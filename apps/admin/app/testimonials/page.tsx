"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Edit2, Plus, Save, X, RefreshCw, MessageSquare, Trash2, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string | null;
  initial: string | null;
  company: string | null;
  text: string;
  metrics: any;
  order: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Testimonial>>({});
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const fetchTestimonials = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/testimonial`);
      if (!res.ok) throw new Error("Failed to fetch testimonials");
      const data = await res.json();
      setTestimonials(data.testimonials || []);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTestimonials(); }, []);

  const handleEditClick = (t: Testimonial) => {
    setEditingId(t.id);
    setEditForm({ ...t, metrics: t.metrics ? JSON.stringify(t.metrics, null, 2) : "" });
    setIsCreating(false);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
    setIsCreating(false);
  };

  const handleSave = async () => {
    try {
      let metricsValue = editForm.metrics;
      if (typeof metricsValue === "string" && metricsValue.trim()) {
        try { metricsValue = JSON.parse(metricsValue); } catch { metricsValue = []; }
      }

      const payload = { ...editForm, metrics: metricsValue };

      if (isCreating) {
        const res = await fetch(`${API_URL}/testimonial`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Failed to create");
      } else if (editingId) {
        const res = await fetch(`${API_URL}/testimonial`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...payload }),
        });
        if (!res.ok) throw new Error("Failed to update");
      }
      await fetchTestimonials();
      handleCancelEdit();
    } catch (err: any) {
      alert(err.message || "An error occurred while saving");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      const res = await fetch(`${API_URL}/testimonial?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      await fetchTestimonials();
    } catch (err: any) {
      alert(err.message || "An error occurred while deleting");
    }
  };

  const emptyForm: Partial<Testimonial> = { name: "", role: "", company: "", initial: "", image: "", text: "", metrics: "", order: testimonials.length };

  return (
    <div className="space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-yellow-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </div>

      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-yellow-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            TESTIMONIALS
          </div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">
            Testimonials Management
          </h1>
          <p className="text-text-muted text-sm font-medium">
            Manage and display user feedback and reviews.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => { setIsCreating(true); setEditingId(null); setEditForm(emptyForm); }}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-500 border border-yellow-500 rounded-xl text-xs font-bold text-white shadow-sm hover:bg-yellow-600 transition-all"
          >
            <Plus className="w-4 h-4" /> Add Testimonial
          </button>
          <button
            onClick={fetchTestimonials}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-xs font-bold text-text-primary shadow-sm hover:bg-bg-secondary transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Refresh
          </button>
        </div>
      </div>

      {error && <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-200">{error}</div>}

      {loading ? (
        <div className="min-h-[400px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-text-muted gap-4">
          <RefreshCw className="w-8 h-8 animate-spin text-yellow-500" />
          <p className="text-sm font-medium italic">Loading testimonials...</p>
        </div>
      ) : testimonials.length === 0 && !isCreating ? (
        <div className="min-h-[400px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-text-muted gap-4">
          <MessageSquare className="w-12 h-12 text-border" />
          <p className="text-sm font-medium italic">No testimonials found. Create one to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {isCreating && (
            <TestimonialForm form={editForm} setForm={setEditForm} onSave={handleSave} onCancel={handleCancelEdit} isNew={true} />
          )}

          {testimonials.map((t) =>
            editingId === t.id ? (
              <TestimonialForm key={t.id} form={editForm} setForm={setEditForm} onSave={handleSave} onCancel={handleCancelEdit} isNew={false} />
            ) : (
              <div key={t.id} className="p-6 bg-white border border-border rounded-3xl shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {t.initial || t.name?.[0] || "?"}
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-text-primary">{t.name}</span>
                        {t.company && <span className="text-xs text-text-muted bg-bg-secondary px-2 py-0.5 rounded-full">{t.company}</span>}
                        <span className="text-xs text-text-muted/60 font-medium">Order: {t.order}</span>
                      </div>
                      <div className="text-xs text-yellow-600 font-medium">{t.role}</div>
                      <button
                        onClick={() => setExpandedId(expandedId === t.id ? null : t.id)}
                        className="flex items-center gap-1 text-xs text-text-muted hover:text-text-primary transition-colors mt-1"
                      >
                        {expandedId === t.id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        {expandedId === t.id ? "Hide" : "Show"} review
                      </button>
                      {expandedId === t.id && (
                        <p className="text-sm text-text-muted mt-2 leading-relaxed border-l-2 border-yellow-200 pl-3">{t.text}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEditClick(t)} className="p-2 text-text-muted hover:text-yellow-600 hover:bg-yellow-50 rounded-xl transition-all">
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleDelete(t.id)} className="p-2 text-text-muted hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
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

function TestimonialForm({ form, setForm, onSave, onCancel, isNew }: any) {
  return (
    <div className="p-6 bg-bg-secondary border-2 border-yellow-200 rounded-3xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-text-primary">
          {isNew ? "Create New Testimonial" : "Edit Testimonial"}
        </h3>
        <button onClick={onCancel} className="p-2 text-text-muted hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Name *</label>
            <input type="text" value={form.name || ""} onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Role *</label>
            <input type="text" value={form.role || ""} onChange={e => setForm({ ...form, role: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              placeholder="CEO, Acme Inc." />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Company</label>
            <input type="text" value={form.company || ""} onChange={e => setForm({ ...form, company: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              placeholder="Acme Inc." />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Initial (Avatar Letter)</label>
            <input type="text" value={form.initial || ""} onChange={e => setForm({ ...form, initial: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              placeholder="J" maxLength={2} />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Image URL</label>
            <input type="text" value={form.image || ""} onChange={e => setForm({ ...form, image: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              placeholder="https://..." />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Order</label>
            <input type="number" value={form.order ?? 0} onChange={e => setForm({ ...form, order: parseInt(e.target.value) || 0 })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              placeholder="0" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Review Text *</label>
          <textarea value={form.text || ""} onChange={e => setForm({ ...form, text: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all min-h-[100px]"
            placeholder="Enter the testimonial review..." />
        </div>

        <div>
          <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Metrics (JSON, optional)</label>
          <textarea value={typeof form.metrics === "string" ? form.metrics : JSON.stringify(form.metrics || [], null, 2)}
            onChange={e => setForm({ ...form, metrics: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary font-mono text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all min-h-[80px]"
            placeholder='[{"label": "ROI", "value": "3x"}]' />
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <button onClick={onCancel} className="px-6 py-3 bg-white border border-border rounded-xl text-sm font-bold text-text-primary hover:bg-bg-secondary transition-all">
            Cancel
          </button>
          <button onClick={onSave} disabled={!form.name || !form.role || !form.text}
            className="flex items-center gap-2 px-6 py-3 bg-yellow-500 border border-yellow-500 rounded-xl text-sm font-bold text-white hover:bg-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
