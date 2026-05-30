"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Edit2, Plus, Save, X, RefreshCw, LayoutTemplate, ArrowLeft } from "lucide-react";

interface Hero {
  id: number;
  heading1: string;
  heading2: string | null;
  subheading: string | null;
  button1: string | null;
  button2: string | null;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

export default function HerosPage() {
  const [heros, setHeros] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Hero>>({});
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHeros = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/heros`);
      if (!res.ok) throw new Error("Failed to fetch heros");
      const data = await res.json();
      setHeros(data.heros || []);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeros();
  }, []);

  const handleEditClick = (hero: Hero) => {
    setEditingId(hero.id);
    setEditForm(hero);
    setIsCreating(false);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
    setIsCreating(false);
  };

  const handleSave = async () => {
    try {
      if (isCreating) {
        const res = await fetch(`${API_URL}/heros`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editForm),
        });
        if (!res.ok) throw new Error("Failed to create");
      } else if (editingId) {
        const res = await fetch(`${API_URL}/heros`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...editForm }),
        });
        if (!res.ok) throw new Error("Failed to update");
      }

      await fetchHeros();
      handleCancelEdit();
    } catch (err: any) {
      alert(err.message || "An error occurred while saving");
    }
  };

  return (
    <div className="space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </div>

      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            HEROS
          </div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">
            Heros Management
          </h1>
          <p className="text-text-muted text-sm font-medium">
            Manage your frontend hero sections.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => { setIsCreating(true); setEditingId(null); setEditForm({ heading1: "", heading2: "", subheading: "", button1: "", button2: "" }); }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 border border-blue-600 rounded-xl text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-all"
          >
            <Plus className="w-4 h-4" /> Add New Hero
          </button>
          <button
            onClick={fetchHeros}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-xs font-bold text-text-primary shadow-sm hover:bg-bg-secondary transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Refresh
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-200">
          {error}
        </div>
      )}

      {loading ? (
        <div className="min-h-[400px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-text-muted gap-4">
          <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
          <p className="text-sm font-medium italic">Loading heros...</p>
        </div>
      ) : heros.length === 0 && !isCreating ? (
        <div className="min-h-[400px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-text-muted gap-4">
          <LayoutTemplate className="w-12 h-12 text-border" />
          <p className="text-sm font-medium italic">No hero sections found. Create one to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {isCreating && (
            <HeroForm
              form={editForm}
              setForm={setEditForm}
              onSave={handleSave}
              onCancel={handleCancelEdit}
              isNew={true}
            />
          )}

          {heros.map((hero) => (
            editingId === hero.id ? (
              <HeroForm
                key={hero.id}
                form={editForm}
                setForm={setEditForm}
                onSave={handleSave}
                onCancel={handleCancelEdit}
                isNew={false}
              />
            ) : (
              <div key={hero.id} className="p-6 bg-white border border-border rounded-3xl shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-4 flex-1">
                    <div>
                      <span className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1 block">Heading</span>
                      <h3 className="text-2xl font-bold text-text-primary">
                        {hero.heading1}
                        {hero.heading2 && <span className="block mt-1 text-xl text-text-muted">{hero.heading2}</span>}
                      </h3>
                    </div>
                    {hero.subheading && (
                      <div>
                        <span className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1 block">Subheading</span>
                        <p className="text-text-muted">{hero.subheading}</p>
                      </div>
                    )}
                    <div className="flex gap-3 pt-2">
                      {hero.button1 && <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium border border-blue-100">{hero.button1}</span>}
                      {hero.button2 && <span className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium border border-gray-200">{hero.button2}</span>}
                    </div>
                  </div>
                  <button
                    onClick={() => handleEditClick(hero)}
                    className="p-2 text-text-muted hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
}

function HeroForm({ form, setForm, onSave, onCancel, isNew }: any) {
  return (
    <div className="p-6 bg-bg-secondary border-2 border-blue-200 rounded-3xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-text-primary">
          {isNew ? "Create New Hero" : "Edit Hero"}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="p-2 text-text-muted hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Heading 1 *</label>
            <input
              type="text"
              value={form.heading1 || ""}
              onChange={e => setForm({ ...form, heading1: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter main heading"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Heading 2</label>
            <input
              type="text"
              value={form.heading2 || ""}
              onChange={e => setForm({ ...form, heading2: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter second heading"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Subheading</label>
          <textarea
            value={form.subheading || ""}
            onChange={e => setForm({ ...form, subheading: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[100px]"
            placeholder="Enter subheading or description"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Button 1 Text</label>
            <input
              type="text"
              value={form.button1 || ""}
              onChange={e => setForm({ ...form, button1: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="e.g. Get Started"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Button 2 Text</label>
            <input
              type="text"
              value={form.button2 || ""}
              onChange={e => setForm({ ...form, button2: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="e.g. Learn More"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-6 py-3 bg-white border border-border rounded-xl text-sm font-bold text-text-primary hover:bg-bg-secondary transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            disabled={!form.heading1}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 border border-blue-600 rounded-xl text-sm font-bold text-white hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
