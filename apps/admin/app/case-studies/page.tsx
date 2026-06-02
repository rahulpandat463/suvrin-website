"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft, BookOpen, Edit2, Save, X, Plus, Trash2, RefreshCw
} from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_URL || "/api";

// ─── Types ────────────────────────────────────────────────────────────────────
interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  tag: string | null;
  imageUrl: string | null;
  client: string | null;
  industry: string | null;
  location: string | null;
  overview: string | null;
  clientOverview: string | null;
  challenges: any;
  solution: any;
  stakeholders: any;
  reporting: any;
  techStack: any;
  keyOutcomes: any;
  keyFeatures: any;
  results: any;
  resultsAchieved: any;
  conclusion: string | null;
}

// ─── Reusable Section Wrapper ─────────────────────────────────────────────────
function SectionCard({ title, icon: Icon, color, children }: { title: string; icon: any; color: string; children: React.ReactNode }) {
  // Using explicit classes for Tailwind safelisting just in case, but keeping the pattern similar
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
export default function CaseStudiesPage() {
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [editForm, setEditForm] = useState<Partial<CaseStudy>>({});
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(true);

  // ── Fetch ───────────────────────────────
  const fetchStudies = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/case-studies`);
      const data = await res.json();
      setStudies(data.studies || []);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStudies(); }, []);

  // ── Save / Delete ───────────────────────────
  const saveStudy = async () => {
    const method = editingId ? "PUT" : "POST";
    const payload = editingId ? { id: editingId, ...editForm } : editForm;

    // Convert JSON strings back to objects before sending
    const fieldsToParse = ['challenges', 'solution', 'stakeholders', 'reporting', 'techStack', 'keyOutcomes', 'keyFeatures', 'results', 'resultsAchieved'];
    const processedPayload: Record<string, any> = { ...payload };
    
    for (const field of fieldsToParse) {
      if (typeof processedPayload[field] === 'string') {
        try {
          if (processedPayload[field]) {
            processedPayload[field] = JSON.parse(processedPayload[field]);
          }
        } catch (e) {
          // If it fails to parse, leave as is or show error
          console.error(`Failed to parse ${field}`);
        }
      }
    }

    try {
      await fetch(`${API}/case-studies`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(processedPayload)
      });
      setEditingId(null);
      setIsCreating(false);
      setEditForm({});
      fetchStudies();
    } catch (err) {
      alert("Error saving case study");
    }
  };

  const deleteStudy = async (id: number) => {
    if (!confirm("Are you sure you want to delete this case study?")) return;
    try {
      await fetch(`${API}/case-studies?id=${id}`, { method: "DELETE" });
      fetchStudies();
    } catch (err) {
      alert("Error deleting case study");
    }
  };

  const startEdit = (study: CaseStudy) => {
    setEditingId(study.id);
    setIsCreating(false);
    
    // Convert JSON objects to strings for the textareas
    const formValues: Record<string, any> = { ...study };
    const fieldsToConvert = ['challenges', 'solution', 'stakeholders', 'reporting', 'techStack', 'keyOutcomes', 'keyFeatures', 'results', 'resultsAchieved'];
    
    for (const field of fieldsToConvert) {
      if (formValues[field] !== null && typeof formValues[field] === 'object') {
        formValues[field] = JSON.stringify(formValues[field], null, 2);
      }
    }
    
    setEditForm(formValues as Partial<CaseStudy>);
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
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> CASE STUDIES
          </div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Case Studies Management</h1>
          <p className="text-text-muted text-sm font-medium">Manage all case studies and their 11 sections here.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => { setIsCreating(true); setEditingId(null); setEditForm({}); }} className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold text-white hover:bg-blue-700 transition-all">
            <Plus className="w-4 h-4" /> Add Case Study
          </button>
          <button onClick={fetchStudies} className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-xs font-bold text-text-primary hover:bg-bg-secondary transition-all">
            <RefreshCw className="w-4 h-4" /> Refresh All
          </button>
        </div>
      </div>

      {/* Create Form */}
      {(isCreating) && (
        <SectionCard title="New Case Study (e.g. Odoo ERP Implementation)" icon={BookOpen} color="emerald">
          <CaseStudyForm 
            form={editForm} 
            setForm={setEditForm} 
            onSave={saveStudy} 
            onCancel={() => { setIsCreating(false); setEditForm({}); }} 
          />
        </SectionCard>
      )}

      {/* List of Case Studies rendered as SectionCards */}
      {studies.length === 0 && !isCreating ? (
        <p className="text-text-muted text-sm italic">No case studies added yet.</p>
      ) : (
        studies.map((study) => (
          <SectionCard 
            key={study.id} 
            title={study.title || "Odoo ERP Implementation"} 
            icon={BookOpen} 
            color="blue"
          >
            {editingId === study.id ? (
              <CaseStudyForm 
                form={editForm} 
                setForm={setEditForm} 
                onSave={saveStudy} 
                onCancel={() => { setEditingId(null); setEditForm({}); }} 
              />
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4 p-5 bg-bg-secondary border border-border rounded-2xl">
                  <div className="space-y-2 flex-1">
                    <p className="font-bold text-text-primary text-lg">{study.title}</p>
                    {study.subtitle && <p className="text-sm text-text-muted">{study.subtitle}</p>}
                    
                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-text-muted">
                      <div><strong className="text-gray-700">Slug:</strong> {study.slug}</div>
                      <div><strong className="text-gray-700">Client:</strong> {study.client || '-'}</div>
                      <div><strong className="text-gray-700">Industry:</strong> {study.industry || '-'}</div>
                      <div><strong className="text-gray-700">Tag:</strong> {study.tag || '-'}</div>
                    </div>
                    
                    {study.overview && (
                      <div className="mt-4">
                        <strong className="text-gray-700 text-sm">Overview:</strong>
                        <p className="text-sm text-text-muted mt-1">{study.overview}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2 flex-shrink-0">
                    <button onClick={() => startEdit(study)} className="p-2 bg-white border border-border text-text-muted hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all shadow-sm">
                      <Edit2 className="w-4 h-4"/>
                    </button>
                    <button onClick={() => deleteStudy(study.id)} className="p-2 bg-white border border-border text-text-muted hover:text-red-600 hover:bg-red-50 rounded-xl transition-all shadow-sm">
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

// ─── Case Study Form Component ────────────────────────────────────────────────
function CaseStudyForm({ form, setForm, onSave, onCancel }: { form: any, setForm: any, onSave: () => void, onCancel: () => void }) {
  const handleChange = (field: string, value: string) => setForm({ ...form, [field]: value });

  return (
    <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-2xl space-y-6">
      
      {/* Basic Details */}
      <div>
        <h3 className="text-sm font-bold text-blue-900 mb-3 border-b border-blue-200 pb-2">1. Hero Section & Basic Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Slug (e.g. odoo-erp-implementation) *" value={form.slug || ""} onChange={e => handleChange('slug', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Title *" value={form.title || ""} onChange={e => handleChange('title', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Subtitle" value={form.subtitle || ""} onChange={e => handleChange('subtitle', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Tag (e.g. Automation & Integration)" value={form.tag || ""} onChange={e => handleChange('tag', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Image URL" value={form.imageUrl || ""} onChange={e => handleChange('imageUrl', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Client Name" value={form.client || ""} onChange={e => handleChange('client', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Industry" value={form.industry || ""} onChange={e => handleChange('industry', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Location" value={form.location || ""} onChange={e => handleChange('location', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Overview (Short description)" rows={2} value={form.overview || ""} onChange={e => handleChange('overview', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" />
        </div>
      </div>

      {/* Detailed Sections */}
      <div>
        <h3 className="text-sm font-bold text-blue-900 mb-3 border-b border-blue-200 pb-2">2. Detailed Content Sections</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Client Overview</label>
            <textarea rows={3} value={form.clientOverview || ""} onChange={e => handleChange('clientOverview', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Business Challenges (JSON Array)</label>
            <textarea rows={3} placeholder='[{"title":"Challenge 1", "desc":"...", "points":[]}]' value={form.challenges || ""} onChange={e => handleChange('challenges', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Suvrin's Solution (JSON Object)</label>
            <textarea rows={3} placeholder='{"intro":["..."], "modules":[{"title":"...","items":[]}]}' value={form.solution || ""} onChange={e => handleChange('solution', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Centralized Stakeholder Ecosystem (JSON Object)</label>
            <textarea rows={3} placeholder='{"heading":"...", "description":"...", "list":[]}' value={form.stakeholders || ""} onChange={e => handleChange('stakeholders', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Advanced Reporting & Analytics (JSON Object)</label>
            <textarea rows={3} placeholder='{"intro":"...", "items":[]}' value={form.reporting || ""} onChange={e => handleChange('reporting', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Technology Stack (JSON Array)</label>
            <textarea rows={3} placeholder='[{"title":"ERP Platform", "items":["Odoo v18"]}]' value={form.techStack || ""} onChange={e => handleChange('techStack', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Key Outcomes & Business Impact (JSON Object)</label>
            <textarea rows={3} placeholder='{"categories":[{"title":"...","points":[]}],"strategicBenefits":[]}' value={form.keyOutcomes || ""} onChange={e => handleChange('keyOutcomes', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Key Features Delivered (JSON Array)</label>
            <textarea rows={3} placeholder='["Feature 1", "Feature 2"]' value={form.keyFeatures || ""} onChange={e => handleChange('keyFeatures', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Results (Hero Stats - JSON Array)</label>
            <textarea rows={3} placeholder='[{"value":"95%", "label":"Excel Reduced"}]' value={form.results || ""} onChange={e => handleChange('results', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Results Achieved (List - JSON Array)</label>
            <textarea rows={3} placeholder='["Result 1", "Result 2"]' value={form.resultsAchieved || ""} onChange={e => handleChange('resultsAchieved', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-text-muted mb-1">Conclusion</label>
            <textarea rows={3} value={form.conclusion || ""} onChange={e => handleChange('conclusion', e.target.value)} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-end pt-4 border-t border-blue-200">
        <button onClick={onCancel} className="px-6 py-2.5 bg-white border border-border rounded-xl text-sm font-bold text-text-primary hover:bg-bg-secondary transition-all">
          <X className="w-4 h-4 inline mr-2"/>Cancel
        </button>
        <button disabled={!form.slug || !form.title} onClick={onSave} className="px-6 py-2.5 bg-blue-600 rounded-xl text-sm font-bold text-white hover:bg-blue-700 transition-all disabled:opacity-50">
          <Save className="w-4 h-4 inline mr-2"/>Save Case Study
        </button>
      </div>
    </div>
  );
}
