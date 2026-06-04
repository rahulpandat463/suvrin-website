"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft, FileText, Edit2, Save, X, Plus, Trash2, RefreshCw
} from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_URL || "/api";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Blog {
  id: number;
  slug: string;
  tag: string | null;
  date: string | null;
  title: string;
  description: string | null;
  intro: string | null;
  image: string | null;
  content: string | null;
}

// ─── Reusable Section Wrapper ─────────────────────────────────────────────────
function SectionCard({ title, icon: Icon, color, children }: { title: string; icon: any; color: string; children: React.ReactNode }) {
  const bg50 = color === 'blue' ? 'bg-blue-50' : color === 'emerald' ? 'bg-emerald-50' : 'bg-gray-50';
  const border100 = color === 'blue' ? 'border-blue-100' : color === 'emerald' ? 'border-emerald-100' : 'border-gray-100';
  const bg600 = color === 'blue' ? 'bg-blue-600' : color === 'emerald' ? 'bg-emerald-600' : 'bg-gray-600';

  return (
    <div className={`border border-border rounded-3xl overflow-hidden shadow-sm`}>
      <div className={`px-7 py-5 ${bg50} border-b ${border100} flex items-center gap-3`}>
        <div className={`w-9 h-9 ${bg600} rounded-xl flex items-center justify-center`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-base font-extrabold text-text-primary">{title}</h2>
      </div>
      <div className="p-7 bg-white">{children}</div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editForm, setEditForm] = useState<Partial<Blog>>({});
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(true);

  // ── Fetch ───────────────────────────────
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/blogs`, { cache: "no-store" });
      const data = await res.json();
      setBlogs(data.blogs || []);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  // ── Save / Delete ───────────────────────────
  const saveBlog = async () => {
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API}/blogs/${editingId}` : `${API}/blogs`;
    
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm)
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        alert(`Error: ${errData.error || res.statusText}`);
        return;
      }

      setEditingId(null);
      setIsCreating(false);
      setEditForm({});
      await fetchBlogs();
    } catch (err) {
      console.error("Save error:", err);
      alert("Network error — could not save blog.");
    }
  };

  const deleteBlog = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await fetch(`${API}/blogs/${id}`, { method: "DELETE" });
      if (!res.ok) {
        alert("Error deleting blog");
        return;
      }
      await fetchBlogs();
    } catch (err) {
      alert("Network error — could not delete blog.");
    }
  };

  const startEdit = (blog: Blog) => {
    setEditingId(blog.id);
    setIsCreating(false);
    setEditForm(blog);
  };

  if (loading) return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-blue-600 transition-colors mb-3">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> BLOGS
          </div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Blogs Management</h1>
          <p className="text-text-muted text-sm font-medium">Manage all blog posts here.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => { setIsCreating(true); setEditingId(null); setEditForm({}); }} className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold text-white hover:bg-blue-700 transition-all">
            <Plus className="w-4 h-4" /> Add Blog
          </button>
          <button onClick={fetchBlogs} className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-xs font-bold text-text-primary hover:bg-bg-secondary transition-all">
            <RefreshCw className="w-4 h-4" /> Refresh All
          </button>
        </div>
      </div>

      {/* Create Form */}
      {(isCreating) && (
        <SectionCard title="New Blog Post" icon={FileText} color="emerald">
          <BlogForm 
            form={editForm} 
            setForm={setEditForm} 
            onSave={saveBlog} 
            onCancel={() => { setIsCreating(false); setEditForm({}); }} 
          />
        </SectionCard>
      )}

      {/* List of Blogs rendered as SectionCards */}
      {blogs.length === 0 && !isCreating ? (
        <p className="text-text-muted text-sm italic">No blogs added yet.</p>
      ) : (
        blogs.map((blog) => (
          <SectionCard 
            key={blog.id} 
            title={blog.title || "Untitled Blog Post"} 
            icon={FileText} 
            color="blue"
          >
            {editingId === blog.id ? (
              <BlogForm 
                form={editForm} 
                setForm={setEditForm} 
                onSave={saveBlog} 
                onCancel={() => { setEditingId(null); setEditForm({}); }} 
              />
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4 p-5 bg-bg-secondary border border-border rounded-2xl">
                  <div className="space-y-2 flex-1">
                    <p className="font-bold text-text-primary text-lg">{blog.title}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-text-muted">
                      <div><strong className="text-gray-700">Slug:</strong> {blog.slug}</div>
                      <div><strong className="text-gray-700">Tag:</strong> {blog.tag || '-'}</div>
                      <div><strong className="text-gray-700">Date:</strong> {blog.date || '-'}</div>
                    </div>
                    
                    {blog.description && (
                      <div className="mt-4">
                        <strong className="text-gray-700 text-sm">Description:</strong>
                        <p className="text-sm text-text-muted mt-1">{blog.description}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2 flex-shrink-0">
                    <button onClick={() => startEdit(blog)} className="p-2 bg-white border border-border text-text-muted hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all shadow-sm">
                      <Edit2 className="w-4 h-4"/>
                    </button>
                    <button onClick={() => deleteBlog(blog.id)} className="p-2 bg-white border border-border text-text-muted hover:text-red-600 hover:bg-red-50 rounded-xl transition-all shadow-sm">
                      <Trash2 className="w-4 h-4"/>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </SectionCard>
        ))
      )}
    </div>
  );
}

// ─── Blog Form Component ────────────────────────────────────────────────
function BlogForm({ form, setForm, onSave, onCancel }: { form: any, setForm: any, onSave: () => void, onCancel: () => void }) {
  const handleChange = (field: string, value: string) => setForm({ ...form, [field]: value });

  return (
    <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-2xl space-y-6">
      
      {/* Basic Details */}
      <div>
        <h3 className="text-sm font-bold text-blue-900 mb-3 border-b border-blue-200 pb-2">Blog Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Slug (e.g. journey-to-ai) *" value={form.slug || ""} onChange={e => handleChange('slug', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Title *" value={form.title || ""} onChange={e => handleChange('title', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Tag (e.g. AI Products)" value={form.tag || ""} onChange={e => handleChange('tag', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Date (e.g. JAN 8, 2026)" value={form.date || ""} onChange={e => handleChange('date', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Image URL" value={form.image || ""} onChange={e => handleChange('image', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" />
        </div>
      </div>

      {/* Content Sections */}
      <div>
        <h3 className="text-sm font-bold text-blue-900 mb-3 border-b border-blue-200 pb-2">Content</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Description (Short excerpt)</label>
            <textarea rows={2} value={form.description || ""} onChange={e => handleChange('description', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Intro (Main introduction paragraph)</label>
            <textarea rows={4} value={form.intro || ""} onChange={e => handleChange('intro', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Full Content (Optional)</label>
            <textarea rows={6} value={form.content || ""} onChange={e => handleChange('content', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-end pt-4 border-t border-blue-200">
        <button onClick={onCancel} className="px-6 py-2.5 bg-white border border-border rounded-xl text-sm font-bold text-text-primary hover:bg-bg-secondary transition-all">
          <X className="w-4 h-4 inline mr-2"/>Cancel
        </button>
        <button disabled={!form.slug || !form.title} onClick={onSave} className="px-6 py-2.5 bg-blue-600 rounded-xl text-sm font-bold text-white hover:bg-blue-700 transition-all disabled:opacity-50">
          <Save className="w-4 h-4 inline mr-2"/>Save Blog
        </button>
      </div>
    </div>
  );
}
