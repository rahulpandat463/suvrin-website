"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Edit2, Plus, Save, X, RefreshCw, BarChart, Trash2, ArrowLeft } from "lucide-react";

interface Impact {
  id: number;
  value: string;
  description: string;
  order: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

export default function ImpactByNumberPage() {
  const [impacts, setImpacts] = useState<Impact[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Impact>>({});
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchImpacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/impact`);
      if (!res.ok) throw new Error("Failed to fetch impacts");
      const data = await res.json();
      setImpacts(data.impacts || []);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImpacts();
  }, []);

  const handleEditClick = (impact: Impact) => {
    setEditingId(impact.id);
    setEditForm(impact);
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
        const res = await fetch(`${API_URL}/impact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editForm),
        });
        if (!res.ok) throw new Error("Failed to create");
      } else if (editingId) {
        const res = await fetch(`${API_URL}/impact`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...editForm }),
        });
        if (!res.ok) throw new Error("Failed to update");
      }
      await fetchImpacts();
      handleCancelEdit();
    } catch (err: any) {
      alert(err.message || "An error occurred while saving");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this impact stat?")) return;
    try {
      const res = await fetch(`${API_URL}/impact?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      await fetchImpacts();
    } catch (err: any) {
      alert(err.message || "An error occurred while deleting");
    }
  };

  return (
    <div className="space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-green-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </div>

      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-green-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            IMPACT BY NUMBER
          </div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">
            Impact By Number Management
          </h1>
          <p className="text-text-muted text-sm font-medium">
            Manage your impact statistics and metrics.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => { setIsCreating(true); setEditingId(null); setEditForm({ value: "", description: "", order: impacts.length }); }}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 border border-green-600 rounded-xl text-xs font-bold text-white shadow-sm hover:bg-green-700 transition-all"
          >
            <Plus className="w-4 h-4" /> Add New Stat
          </button>
          <button
            onClick={fetchImpacts}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-xs font-bold text-text-primary shadow-sm hover:bg-bg-secondary transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Refresh
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-200">{error}</div>
      )}

      {loading ? (
        <div className="min-h-[400px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-text-muted gap-4">
          <RefreshCw className="w-8 h-8 animate-spin text-green-500" />
          <p className="text-sm font-medium italic">Loading impacts...</p>
        </div>
      ) : impacts.length === 0 && !isCreating ? (
        <div className="min-h-[400px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-text-muted gap-4">
          <BarChart className="w-12 h-12 text-border" />
          <p className="text-sm font-medium italic">No impact stats found. Create one to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {isCreating && (
            <ImpactForm
              form={editForm}
              setForm={setEditForm}
              onSave={handleSave}
              onCancel={handleCancelEdit}
              isNew={true}
            />
          )}

          {impacts.map((impact) =>
            editingId === impact.id ? (
              <ImpactForm
                key={impact.id}
                form={editForm}
                setForm={setEditForm}
                onSave={handleSave}
                onCancel={handleCancelEdit}
                isNew={false}
              />
            ) : (
              <div key={impact.id} className="p-6 bg-white border border-border rounded-3xl shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="p-4 bg-green-50 rounded-2xl text-green-600 min-w-fit">
                      <BarChart className="w-6 h-6" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="text-3xl font-extrabold text-text-primary">{impact.value}</div>
                      <div className="text-text-muted text-sm">{impact.description}</div>
                      <div className="text-xs text-text-muted/60 font-medium">Order: {impact.order}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditClick(impact)}
                      className="p-2 text-text-muted hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(impact.id)}
                      className="p-2 text-text-muted hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

function ImpactForm({ form, setForm, onSave, onCancel, isNew }: any) {
  return (
    <div className="p-6 bg-bg-secondary border-2 border-green-200 rounded-3xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-text-primary">
          {isNew ? "Create New Impact Stat" : "Edit Impact Stat"}
        </h3>
        <button onClick={onCancel} className="p-2 text-text-muted hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Value *</label>
            <input
              type="text"
              value={form.value || ""}
              onChange={e => setForm({ ...form, value: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="e.g. 500+, 98%, $2M"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Order</label>
            <input
              type="number"
              value={form.order ?? 0}
              onChange={e => setForm({ ...form, order: parseInt(e.target.value) || 0 })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="Display order"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Description *</label>
          <input
            type="text"
            value={form.description || ""}
            onChange={e => setForm({ ...form, description: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            placeholder="e.g. Projects Completed, Client Satisfaction"
          />
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
            disabled={!form.value || !form.description}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 border border-green-600 rounded-xl text-sm font-bold text-white hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
