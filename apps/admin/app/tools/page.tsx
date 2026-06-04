"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Edit2, Plus, Save, X, RefreshCw, Cpu, Trash2, ArrowLeft } from "lucide-react";

interface Tool {
  id: number;
  name: string;
  type: string; // "svg" | "emoji" | "text"
  content: string;
  order: number;
}

const _rawApiUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
const API_URL = _rawApiUrl.endsWith("/") ? _rawApiUrl.slice(0, -1) + "/api" : (_rawApiUrl.endsWith("/api") ? _rawApiUrl : _rawApiUrl + "/api");
const TOOL_TYPES = ["svg", "emoji", "text"];

export default function ToolsPage() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Tool>>({});
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTools = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/tools`);
      if (!res.ok) throw new Error("Failed to fetch tools");
      const data = await res.json();
      setTools(data.tools || []);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTools(); }, []);

  const handleEditClick = (tool: Tool) => {
    setEditingId(tool.id);
    setEditForm(tool);
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
        const res = await fetch(`${API_URL}/tools`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editForm),
        });
        if (!res.ok) throw new Error("Failed to create");
      } else if (editingId) {
        const res = await fetch(`${API_URL}/tools`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...editForm }),
        });
        if (!res.ok) throw new Error("Failed to update");
      }
      await fetchTools();
      handleCancelEdit();
    } catch (err: any) {
      alert(err.message || "An error occurred while saving");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this tool?")) return;
    try {
      const res = await fetch(`${API_URL}/tools?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      await fetchTools();
    } catch (err: any) {
      alert(err.message || "An error occurred while deleting");
    }
  };

  const renderPreview = (tool: Tool) => {
    if (tool.type === "emoji") return <span className="text-2xl">{tool.content}</span>;
    if (tool.type === "svg") return <span className="w-8 h-8 block" dangerouslySetInnerHTML={{ __html: tool.content }} />;
    return <span className="text-sm font-bold text-red-600">{tool.content}</span>;
  };

  return (
    <div className="space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-red-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </div>

      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-red-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            TOOLS & TECHNOLOGY
          </div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">
            Tools & Tech Stack
          </h1>
          <p className="text-text-muted text-sm font-medium">
            Manage the technology and tools showcased in your portfolio.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => { setIsCreating(true); setEditingId(null); setEditForm({ name: "", type: "emoji", content: "", order: tools.length }); }}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 border border-red-500 rounded-xl text-xs font-bold text-white shadow-sm hover:bg-red-600 transition-all"
          >
            <Plus className="w-4 h-4" /> Add Tool
          </button>
          <button
            onClick={fetchTools}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-xs font-bold text-text-primary shadow-sm hover:bg-bg-secondary transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Refresh
          </button>
        </div>
      </div>

      {error && <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-200">{error}</div>}

      {loading ? (
        <div className="min-h-[400px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-text-muted gap-4">
          <RefreshCw className="w-8 h-8 animate-spin text-red-500" />
          <p className="text-sm font-medium italic">Loading tools...</p>
        </div>
      ) : tools.length === 0 && !isCreating ? (
        <div className="min-h-[400px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-text-muted gap-4">
          <Cpu className="w-12 h-12 text-border" />
          <p className="text-sm font-medium italic">No tools found. Create one to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {isCreating && (
            <ToolForm form={editForm} setForm={setEditForm} onSave={handleSave} onCancel={handleCancelEdit} isNew={true} />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) =>
              editingId === tool.id ? (
                <div key={tool.id} className="col-span-full">
                  <ToolForm form={editForm} setForm={setEditForm} onSave={handleSave} onCancel={handleCancelEdit} isNew={false} />
                </div>
              ) : (
                <div key={tool.id} className="p-5 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {renderPreview(tool)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-text-primary truncate">{tool.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 bg-red-50 text-red-600 rounded-full font-medium capitalize">{tool.type}</span>
                      <span className="text-xs text-text-muted/60">Order: {tool.order}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => handleEditClick(tool)} className="p-2 text-text-muted hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(tool.id)} className="p-2 text-text-muted hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ToolForm({ form, setForm, onSave, onCancel, isNew }: any) {
  return (
    <div className="p-6 bg-bg-secondary border-2 border-red-200 rounded-3xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-text-primary">
          {isNew ? "Add New Tool" : "Edit Tool"}
        </h3>
        <button onClick={onCancel} className="p-2 text-text-muted hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Tool Name *</label>
            <input type="text" value={form.name || ""} onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
              placeholder="e.g. React, Python" />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Type *</label>
            <select value={form.type || "emoji"} onChange={e => setForm({ ...form, type: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-red-400 transition-all">
              {["svg", "emoji", "text"].map(t => <option key={t} value={t}>{t.toUpperCase()}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Order</label>
            <input type="number" value={form.order ?? 0} onChange={e => setForm({ ...form, order: parseInt(e.target.value) || 0 })}
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-red-400 transition-all" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
            Content * {form.type === "svg" ? "(SVG markup)" : form.type === "emoji" ? "(Emoji character)" : "(Display text)"}
          </label>
          <textarea value={form.content || ""} onChange={e => setForm({ ...form, content: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-text-primary font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition-all min-h-[100px]"
            placeholder={form.type === "svg" ? '<svg viewBox="0 0 24 24">...</svg>' : form.type === "emoji" ? "🐍" : "Python"} />
        </div>

        {/* Preview */}
        {form.content && (
          <div className="p-4 bg-white border border-border rounded-xl">
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider block mb-2">Preview</span>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center overflow-hidden">
                {form.type === "emoji" && <span className="text-2xl">{form.content}</span>}
                {form.type === "svg" && <span className="w-8 h-8 block" dangerouslySetInnerHTML={{ __html: form.content }} />}
                {form.type === "text" && <span className="text-sm font-bold text-red-600">{form.content}</span>}
              </div>
              <span className="font-medium text-text-primary">{form.name || "Tool name"}</span>
            </div>
          </div>
        )}

        <div className="pt-4 flex justify-end gap-3">
          <button onClick={onCancel} className="px-6 py-3 bg-white border border-border rounded-xl text-sm font-bold text-text-primary hover:bg-bg-secondary transition-all">
            Cancel
          </button>
          <button onClick={onSave} disabled={!form.name || !form.type || !form.content}
            className="flex items-center gap-2 px-6 py-3 bg-red-500 border border-red-500 rounded-xl text-sm font-bold text-white hover:bg-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
