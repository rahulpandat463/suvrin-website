"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Edit2, Trash2, Save, X, RefreshCw, Briefcase, Layers, Zap } from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002/api";

// ─── Types ────────────────────────────────────────────────────────────────────
interface BuildingNew { id: number; heading: string; description: string; features: any; imageUrl?: string; }
interface SuvrinLabs  { id: number; title: string; desc: string; order: number; }
interface WorkMattersDesc { id: number; heading: string; description: string; }
interface Job         { id: number; title: string; category: string; categoryDesc?: string; location: string; type: string; desc: string; dotColor: string; badgeBg: string; order: number; }

// ─── Reusable Section Wrapper ─────────────────────────────────────────────────
function SectionCard({ title, icon: Icon, color, children }: { title: string; icon: any; color: string; children: React.ReactNode }) {
  return (
    <div className={`border border-border rounded-3xl overflow-hidden shadow-sm`}>
      <div className={`px-7 py-5 bg-${color}-50 border-b border-${color}-100 flex items-center gap-3`}>
        <div className={`w-9 h-9 bg-${color}-600 rounded-xl flex items-center justify-center`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-base font-extrabold text-text-primary">{title}</h2>
      </div>
      <div className="p-7 bg-white">{children}</div>
    </div>
  );
}

export default function CareersPage() {
  // ── Building New ─────────────────────────
  const [bnew, setBnew]               = useState<BuildingNew[]>([]);
  const [bnewEdit, setBnewEdit]       = useState<Partial<BuildingNew>>({});
  const [bnewId, setBnewId]           = useState<number | null>(null);
  const [bnewCreating, setBnewCreating] = useState(false);

  // ── Suvrin Labs ──────────────────────────
  const [labs, setLabs]               = useState<SuvrinLabs[]>([]);
  const [labsEdit, setLabsEdit]       = useState<Partial<SuvrinLabs>>({});
  const [labsId, setLabsId]           = useState<number | null>(null);
  const [labsCreating, setLabsCreating] = useState(false);

  // ── Work That Matters Desc ───────────────
  const [wmDesc, setWmDesc]           = useState<WorkMattersDesc[]>([]);
  const [wmDescEdit, setWmDescEdit]   = useState<Partial<WorkMattersDesc>>({});
  const [wmDescId, setWmDescId]       = useState<number | null>(null);
  const [wmDescCreating, setWmDescCreating] = useState(false);

  // ── Jobs (Work That Matters) ─────────────
  const [jobs, setJobs]               = useState<Job[]>([]);
  const [jobsEdit, setJobsEdit]       = useState<Partial<Job>>({});
  const [jobsId, setJobsId]           = useState<number | null>(null);
  const [jobsCreating, setJobsCreating] = useState(false);

  const [loading, setLoading]     = useState(true);

  // ── Fetch all ───────────────────────────────
  const fetchAll = async () => {
    setLoading(true);
    try {
      const [b, l, w, j] = await Promise.all([
        fetch(`${API}/about/careers/building-new`).then(r => r.json()),
        fetch(`${API}/about/careers/suvrin-labs`).then(r => r.json()),
        fetch(`${API}/about/careers/work-matters-desc`).then(r => r.json()),
        fetch(`${API}/about/careers/jobs`).then(r => r.json()),
      ]);
      setBnew(b.buildingNew || []);
      setLabs(l.suvrinLabs  || []);
      setWmDesc(w.description || []);
      setJobs(j.jobs        || []);
    } catch (err) { console.error("Fetch All Error:", err); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchAll(); }, []);

  // ── Reusable save / del ─────────────────────
  const save = async (endpoint: string, id: number | null, data: any, refetch: () => Promise<void> | void) => {
    await fetch(`${API}${endpoint}`, {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, id }),
    });
    refetch();
  };

  const del = async (endpoint: string, id: number, refetch: () => Promise<void> | void) => {
    if (!confirm("Delete this?")) return;
    await fetch(`${API}${endpoint}?id=${id}`, { method: "DELETE" });
    refetch();
  };

  const fetchBnew = () => fetch(`${API}/about/careers/building-new`).then(r=>r.json()).then(d=>setBnew(d.buildingNew||[]));
  const fetchLabs = () => fetch(`${API}/about/careers/suvrin-labs`).then(r=>r.json()).then(d=>setLabs(d.suvrinLabs||[]));
  const fetchWmDesc = () => fetch(`${API}/about/careers/work-matters-desc`).then(r=>r.json()).then(d=>setWmDesc(d.description||[]));
  const fetchJobs = () => fetch(`${API}/about/careers/jobs`).then(r=>r.json()).then(d=>setJobs(d.jobs||[]));

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
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-blue-600 transition-colors mb-3">
            <ArrowLeft className="w-4 h-4" /> Back to About
          </Link>
          <h1 className="text-3xl font-extrabold text-text-primary">Careers Sections</h1>
        </div>
        <button onClick={fetchAll} className="px-4 py-2 border border-border rounded-xl text-xs font-bold hover:bg-bg-secondary flex items-center gap-2">
          <RefreshCw className="w-4 h-4" /> Refresh
        </button>
      </div>

      {/* ── SECTION 1: Building New ── */}
      <SectionCard title="Building New (Next era of AI products)" icon={Layers} color="blue">
        <div className="space-y-4">
          {(bnewCreating || bnewId !== null) && (
            <div className="p-5 bg-blue-50 border border-blue-200 rounded-2xl space-y-3">
              <input placeholder="Heading *" value={bnewEdit.heading||""} onChange={e=>setBnewEdit({...bnewEdit,heading:e.target.value})}
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <textarea placeholder="Description *" rows={3} value={bnewEdit.description||""} onChange={e=>setBnewEdit({...bnewEdit,description:e.target.value})}
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <input placeholder="Image URL" value={bnewEdit.imageUrl||""} onChange={e=>setBnewEdit({...bnewEdit,imageUrl:e.target.value})}
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              
              <div>
                <p className="text-xs font-bold text-text-muted mb-2">Features (JSON array format)</p>
                <textarea placeholder='[{"title":"Impact-first mindset","desc":"Measurable innovation."}]' rows={4} value={typeof bnewEdit.features === 'string' ? bnewEdit.features : JSON.stringify(bnewEdit.features || [])} onChange={e=>setBnewEdit({...bnewEdit,features:e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-xs"/>
              </div>

              <div className="flex gap-2 justify-end">
                <button onClick={()=>{setBnewCreating(false);setBnewId(null);}} className="px-4 py-2 border border-border rounded-xl text-xs font-bold text-text-primary hover:bg-bg-secondary"><X className="w-3 h-3 inline mr-1"/>Cancel</button>
                <button disabled={!bnewEdit.heading||!bnewEdit.description} onClick={async()=>{
                  let parsedFeatures = [];
                  try { if(typeof bnewEdit.features === 'string') parsedFeatures = JSON.parse(bnewEdit.features); else parsedFeatures = bnewEdit.features; } catch(e) { alert("Invalid JSON"); return; }
                  await save("/about/careers/building-new",bnewId,{...bnewEdit, features: parsedFeatures},fetchBnew);setBnewCreating(false);setBnewId(null);setBnewEdit({});
                }} className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold text-white hover:bg-blue-700 disabled:opacity-50"><Save className="w-3 h-3 inline mr-1"/>Save</button>
              </div>
            </div>
          )}
          {bnew.length===0 && !bnewCreating ? (
            <p className="text-text-muted text-sm italic">No building new section yet.</p>
          ) : bnew.map(b=>(
            <div key={b.id} className="p-5 bg-bg-secondary border border-border rounded-2xl flex justify-between gap-4">
              <div>
                <p className="font-bold text-text-primary">{b.heading}</p>
                <p className="text-sm text-text-muted mt-1">{b.description}</p>
                <p className="text-xs text-text-muted mt-2 truncate max-w-md">Features: {JSON.stringify(b.features)}</p>
                {b.imageUrl && <p className="text-xs text-blue-600 mt-2 font-medium">Image: Set</p>}
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <button onClick={()=>{
                  setBnewId(b.id);
                  setBnewEdit({...b, features: JSON.stringify(b.features || [], null, 2)});
                  setBnewCreating(false);
                }} className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Edit2 className="w-4 h-4"/></button>
                <button onClick={()=>del("/about/careers/building-new",b.id,fetchBnew)} className="p-2 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Trash2 className="w-4 h-4"/></button>
              </div>
            </div>
          ))}
          {!bnewCreating && bnew.length === 0 && (
            <button onClick={()=>{setBnewCreating(true);setBnewId(null);setBnewEdit({});}} className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold text-white hover:bg-blue-700">
              <Plus className="w-3 h-3"/> Add Section
            </button>
          )}
        </div>
      </SectionCard>

      {/* ── SECTION 2: Suvrin Labs ── */}
      <SectionCard title="Life at Suvrin Labs (Cards)" icon={Zap} color="violet">
        <div className="space-y-4">
          {(labsCreating || labsId !== null) && (
            <div className="p-5 bg-violet-50 border border-violet-200 rounded-2xl space-y-3">
              <input placeholder="Title *" value={labsEdit.title||""} onChange={e=>setLabsEdit({...labsEdit,title:e.target.value})} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"/>
              <textarea placeholder="Description *" rows={2} value={labsEdit.desc||""} onChange={e=>setLabsEdit({...labsEdit,desc:e.target.value})} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"/>
              <input placeholder="Order (number)" type="number" value={labsEdit.order||0} onChange={e=>setLabsEdit({...labsEdit,order:parseInt(e.target.value)})} className="w-32 px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"/>
              <div className="flex gap-2 justify-end">
                <button onClick={()=>{setLabsCreating(false);setLabsId(null);}} className="px-4 py-2 border border-border rounded-xl text-xs font-bold text-text-primary hover:bg-bg-secondary"><X className="w-3 h-3 inline mr-1"/>Cancel</button>
                <button disabled={!labsEdit.title||!labsEdit.desc} onClick={async()=>{await save("/about/careers/suvrin-labs",labsId,labsEdit,fetchLabs);setLabsCreating(false);setLabsId(null);setLabsEdit({});}} className="px-4 py-2 bg-violet-600 rounded-xl text-xs font-bold text-white hover:bg-violet-700 disabled:opacity-50"><Save className="w-3 h-3 inline mr-1"/>Save</button>
              </div>
            </div>
          )}
          {labs.length===0 && !labsCreating ? (
            <p className="text-text-muted text-sm italic">No labs added yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {labs.map(l=>(
                <div key={l.id} className="p-4 bg-bg-secondary border border-border rounded-2xl flex justify-between gap-3">
                  <div>
                    <p className="font-bold text-text-primary">{l.title}</p>
                    <p className="text-xs text-text-muted mt-1">{l.desc}</p>
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    <button onClick={()=>{setLabsId(l.id);setLabsEdit(l);setLabsCreating(false);}} className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Edit2 className="w-4 h-4"/></button>
                    <button onClick={()=>del("/about/careers/suvrin-labs",l.id,fetchLabs)} className="p-2 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Trash2 className="w-4 h-4"/></button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button onClick={()=>{setLabsCreating(true);setLabsId(null);setLabsEdit({order:0});}} className="flex items-center gap-2 px-4 py-2 bg-violet-600 rounded-xl text-xs font-bold text-white hover:bg-violet-700">
            <Plus className="w-3 h-3"/> Add Lab Card
          </button>
        </div>
      </SectionCard>

      {/* ── SECTION 3: Work That Matters (Description) ── */}
      <SectionCard title="Work That Matters (Heading & Description)" icon={Layers} color="indigo">
        <div className="space-y-4">
          {(wmDescCreating || wmDescId !== null) && (
            <div className="p-5 bg-indigo-50 border border-indigo-200 rounded-2xl space-y-3">
              <input placeholder="Heading *" value={wmDescEdit.heading||""} onChange={e=>setWmDescEdit({...wmDescEdit,heading:e.target.value})}
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              <textarea placeholder="Description *" rows={3} value={wmDescEdit.description||""} onChange={e=>setWmDescEdit({...wmDescEdit,description:e.target.value})}
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              
              <div className="flex gap-2 justify-end">
                <button onClick={()=>{setWmDescCreating(false);setWmDescId(null);}} className="px-4 py-2 border border-border rounded-xl text-xs font-bold text-text-primary hover:bg-bg-secondary"><X className="w-3 h-3 inline mr-1"/>Cancel</button>
                <button disabled={!wmDescEdit.heading||!wmDescEdit.description} onClick={async()=>{
                  await save("/about/careers/work-matters-desc",wmDescId,wmDescEdit,fetchWmDesc);setWmDescCreating(false);setWmDescId(null);setWmDescEdit({});
                }} className="px-4 py-2 bg-indigo-600 rounded-xl text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-50"><Save className="w-3 h-3 inline mr-1"/>Save</button>
              </div>
            </div>
          )}
          {wmDesc.length===0 && !wmDescCreating ? (
            <p className="text-text-muted text-sm italic">No description section added yet.</p>
          ) : wmDesc.map(w=>(
            <div key={w.id} className="p-5 bg-bg-secondary border border-border rounded-2xl flex justify-between gap-4">
              <div>
                <p className="font-bold text-text-primary">{w.heading}</p>
                <p className="text-sm text-text-muted mt-1">{w.description}</p>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <button onClick={()=>{
                  setWmDescId(w.id);
                  setWmDescEdit(w);
                  setWmDescCreating(false);
                }} className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all h-fit"><Edit2 className="w-4 h-4"/></button>
                <button onClick={()=>del("/about/careers/work-matters-desc",w.id,fetchWmDesc)} className="p-2 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all h-fit"><Trash2 className="w-4 h-4"/></button>
              </div>
            </div>
          ))}
          {!wmDescCreating && wmDesc.length === 0 && (
            <button onClick={()=>{setWmDescCreating(true);setWmDescId(null);setWmDescEdit({});}} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-xl text-xs font-bold text-white hover:bg-indigo-700">
              <Plus className="w-3 h-3"/> Add Description
            </button>
          )}
        </div>
      </SectionCard>

      {/* ── SECTION 4: Work That Matters (Jobs) ── */}
      <SectionCard title="Work That Matters (Jobs)" icon={Briefcase} color="teal">
        <div className="space-y-4">
          {(jobsCreating || jobsId !== null) && (
            <div className="p-5 bg-teal-50 border border-teal-200 rounded-2xl space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="Job Title *" value={jobsEdit.title||""} onChange={e=>setJobsEdit({...jobsEdit,title:e.target.value})} className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                <input placeholder="Category (e.g. Design / Software Development) *" value={jobsEdit.category||""} onChange={e=>setJobsEdit({...jobsEdit,category:e.target.value})} className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                <input placeholder="Category Description (Optional)" value={jobsEdit.categoryDesc||""} onChange={e=>setJobsEdit({...jobsEdit,categoryDesc:e.target.value})} className="col-span-2 px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                <input placeholder="Location *" value={jobsEdit.location||""} onChange={e=>setJobsEdit({...jobsEdit,location:e.target.value})} className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                <input placeholder="Type (e.g. Full-time) *" value={jobsEdit.type||""} onChange={e=>setJobsEdit({...jobsEdit,type:e.target.value})} className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
              </div>
              <textarea placeholder="Job Description *" rows={3} value={jobsEdit.desc||""} onChange={e=>setJobsEdit({...jobsEdit,desc:e.target.value})} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
              <div className="grid grid-cols-3 gap-3">
                <input placeholder="Dot Color (bg-[#0546e0])" value={jobsEdit.dotColor||""} onChange={e=>setJobsEdit({...jobsEdit,dotColor:e.target.value})} className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                <input placeholder="Badge BG (bg-[#f0f4ff])" value={jobsEdit.badgeBg||""} onChange={e=>setJobsEdit({...jobsEdit,badgeBg:e.target.value})} className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                <input placeholder="Order" type="number" value={jobsEdit.order||0} onChange={e=>setJobsEdit({...jobsEdit,order:parseInt(e.target.value)})} className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
              </div>
              <div className="flex gap-2 justify-end">
                <button onClick={()=>{setJobsCreating(false);setJobsId(null);}} className="px-4 py-2 border border-border rounded-xl text-xs font-bold text-text-primary hover:bg-bg-secondary"><X className="w-3 h-3 inline mr-1"/>Cancel</button>
                <button disabled={!jobsEdit.title||!jobsEdit.category||!jobsEdit.location||!jobsEdit.type||!jobsEdit.desc} onClick={async()=>{await save("/about/careers/jobs",jobsId,jobsEdit,fetchJobs);setJobsCreating(false);setJobsId(null);setJobsEdit({});}} className="px-4 py-2 bg-teal-600 rounded-xl text-xs font-bold text-white hover:bg-teal-700 disabled:opacity-50"><Save className="w-3 h-3 inline mr-1"/>Save</button>
              </div>
            </div>
          )}
          
          {jobs.length===0 && !jobsCreating ? (
            <p className="text-text-muted text-sm italic">No jobs added yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {jobs.map(j=>(
                <div key={j.id} className="p-5 bg-bg-secondary border border-border rounded-2xl flex justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${j.dotColor || 'bg-gray-400'}`}></span>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wider">{j.category}</p>
                    </div>
                    <p className="font-bold text-text-primary text-lg">{j.title}</p>
                    <p className="text-xs text-text-muted mt-1">{j.location} • {j.type}</p>
                    <p className="text-sm text-text-muted mt-2">{j.desc}</p>
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    <button onClick={()=>{setJobsId(j.id);setJobsEdit(j);setJobsCreating(false);}} className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all h-fit"><Edit2 className="w-4 h-4"/></button>
                    <button onClick={()=>del("/about/careers/jobs",j.id,fetchJobs)} className="p-2 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all h-fit"><Trash2 className="w-4 h-4"/></button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button onClick={()=>{setJobsCreating(true);setJobsId(null);setJobsEdit({order:0});}} className="flex items-center gap-2 px-4 py-2 bg-teal-600 rounded-xl text-xs font-bold text-white hover:bg-teal-700">
            <Plus className="w-3 h-3"/> Add Job
          </button>
        </div>
      </SectionCard>
    </div>
  );
}
