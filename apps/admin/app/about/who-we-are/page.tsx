"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft, Users, Briefcase, Globe, Heart,
  Edit2, Save, X, Plus, Trash2, RefreshCw
} from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_URL || "https://suvrin-website-backend.vercel.app/api";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Description { id: number; paragraph1: string; paragraph2: string; }
interface Empowering  { id: number; heading: string; description: string; features: any; imageUrl?: string; ctaText?: string; ctaLink?: string; }
interface Value       { id: number; title: string; desc: string; order: number; }
interface Presence    { id: number; city: string; address?: string; desc?: string; order: number; }
interface Origin      { id: number; heading: string; paragraph1: string; paragraph2: string; }

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

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function WhoWeArePage() {

  // ── Description ─────────────────────────────
  const [desc, setDesc]           = useState<Description[]>([]);
  const [descEdit, setDescEdit]   = useState<Partial<Description>>({});
  const [descId, setDescId]       = useState<number | null>(null);
  const [descCreating, setDescCreating] = useState(false);

  // ── Empowering ──────────────────────────────
  const [emp, setEmp]             = useState<Empowering[]>([]);
  const [empEdit, setEmpEdit]     = useState<Partial<Empowering>>({});
  const [empId, setEmpId]         = useState<number | null>(null);
  const [empCreating, setEmpCreating] = useState(false);

  // ── Values ──────────────────────────────────
  const [values, setValues]       = useState<Value[]>([]);
  const [valEdit, setValEdit]     = useState<Partial<Value>>({});
  const [valId, setValId]         = useState<number | null>(null);
  const [valCreating, setValCreating] = useState(false);

  // ── Global Presence ─────────────────────────
  const [pres, setPres]           = useState<Presence[]>([]);
  const [presEdit, setPresEdit]   = useState<Partial<Presence>>({});
  const [presId, setPresId]       = useState<number | null>(null);
  const [presCreating, setPresCreating] = useState(false);

  // ── Origin Story ────────────────────────────
  const [origin, setOrigin]           = useState<Origin[]>([]);
  const [originEdit, setOriginEdit]   = useState<Partial<Origin>>({});
  const [originId, setOriginId]       = useState<number | null>(null);
  const [originCreating, setOriginCreating] = useState(false);

  const [loading, setLoading]     = useState(true);

  // ── Fetch all ───────────────────────────────
  const fetchAll = async () => {
    setLoading(true);
    try {
      const [d, e, v, p, o] = await Promise.all([
        fetch(`${API}/about/description`).then(r => r.json()),
        fetch(`${API}/about/empowering`).then(r => r.json()),
        fetch(`${API}/about/values`).then(r => r.json()),
        fetch(`${API}/about/global-presence`).then(r => r.json()),
        fetch(`${API}/about/origin-story`).then(r => r.json()),
      ]);
      setDesc(d.description   || []);
      setEmp(e.empowering     || []);
      setValues(v.values      || []);
      setPres(p.globalPresence|| []);
      setOrigin(o.originStory || []);
    } catch (err) { console.error("Fetch All Error:", err); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchAll(); }, []);

  // ── Generic save / delete helpers ───────────
  const save = async (endpoint: string, id: number | null, body: any, refetch: () => void) => {
    const method = id ? "PUT" : "POST";
    const payload = id ? { id, ...body } : body;
    await fetch(`${API}${endpoint}`, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    refetch();
  };

  const del = async (endpoint: string, id: number, refetch: () => void) => {
    await fetch(`${API}${endpoint}?id=${id}`, { method: "DELETE" });
    refetch();
  };

  const fetchDesc  = () => fetch(`${API}/about/description`).then(r=>r.json()).then(d=>setDesc(d.description||[]));
  const fetchEmp   = () => fetch(`${API}/about/empowering`).then(r=>r.json()).then(d=>setEmp(d.empowering||[]));
  const fetchVals  = () => fetch(`${API}/about/values`).then(r=>r.json()).then(d=>setValues(d.values||[]));
  const fetchPres  = () => fetch(`${API}/about/global-presence`).then(r=>r.json()).then(d=>setPres(d.globalPresence||[]));
  const fetchOrigin = () => fetch(`${API}/about/origin-story`).then(r=>r.json()).then(d=>setOrigin(d.originStory||[]));

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
          <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> ABOUT → WHO WE ARE
          </div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Who We Are</h1>
          <p className="text-text-muted text-sm font-medium">Manage all sections of the Who We Are page.</p>
        </div>
        <button onClick={fetchAll} className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-xs font-bold text-text-primary hover:bg-bg-secondary transition-all">
          <RefreshCw className="w-4 h-4" /> Refresh All
        </button>
      </div>

      {/* ── SECTION 1: Description (Who We Are) ── */}
      <SectionCard title="Who We Are (Description)" icon={Users} color="blue">
        <div className="space-y-4">
          {(descCreating || descId !== null) && (
            <div className="p-5 bg-blue-50 border border-blue-200 rounded-2xl space-y-3">
              <textarea placeholder="Paragraph 1 *" rows={3} value={descEdit.paragraph1||""} onChange={e=>setDescEdit({...descEdit,paragraph1:e.target.value})}
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <textarea placeholder="Paragraph 2 *" rows={3} value={descEdit.paragraph2||""} onChange={e=>setDescEdit({...descEdit,paragraph2:e.target.value})}
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <div className="flex gap-2 justify-end">
                <button onClick={()=>{setDescCreating(false);setDescId(null);}} className="px-4 py-2 border border-border rounded-xl text-xs font-bold text-text-primary hover:bg-bg-secondary"><X className="w-3 h-3 inline mr-1"/>Cancel</button>
                <button disabled={!descEdit.paragraph1||!descEdit.paragraph2} onClick={async()=>{await save("/about/description",descId,descEdit,fetchDesc);setDescCreating(false);setDescId(null);setDescEdit({});}} className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold text-white hover:bg-blue-700 disabled:opacity-50"><Save className="w-3 h-3 inline mr-1"/>Save</button>
              </div>
            </div>
          )}
          {desc.length===0 && !descCreating ? (
            <p className="text-text-muted text-sm italic">No description yet.</p>
          ) : desc.map(d=>(
            <div key={d.id} className="p-5 bg-bg-secondary border border-border rounded-2xl flex justify-between gap-4">
              <div>
                <p className="text-sm text-text-muted">{d.paragraph1}</p>
                <p className="text-sm text-text-muted mt-2">{d.paragraph2}</p>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <button onClick={()=>{setDescId(d.id);setDescEdit(d);setDescCreating(false);}} className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Edit2 className="w-4 h-4"/></button>
                <button onClick={()=>del("/about/description",d.id,fetchDesc)} className="p-2 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Trash2 className="w-4 h-4"/></button>
              </div>
            </div>
          ))}
          <button onClick={()=>{setDescCreating(true);setDescId(null);setDescEdit({});}} className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold text-white hover:bg-blue-700">
            <Plus className="w-3 h-3"/> Add Description
          </button>
        </div>
      </SectionCard>

      {/* ── SECTION 2: Empowering Businesses (Mission) ── */}
      <SectionCard title="Empowering Businesses (Mission)" icon={Briefcase} color="violet">
        <div className="space-y-4">
          {(empCreating || empId !== null) && (
            <div className="p-5 bg-violet-50 border border-violet-200 rounded-2xl space-y-3">
              <input placeholder="Heading *" value={empEdit.heading||""} onChange={e=>setEmpEdit({...empEdit,heading:e.target.value})}
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"/>
              <textarea placeholder="Description *" rows={3} value={empEdit.description||""} onChange={e=>setEmpEdit({...empEdit,description:e.target.value})}
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"/>
              <input placeholder="Image URL" value={empEdit.imageUrl||""} onChange={e=>setEmpEdit({...empEdit,imageUrl:e.target.value})}
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"/>
              
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="CTA Text" value={empEdit.ctaText||""} onChange={e=>setEmpEdit({...empEdit,ctaText:e.target.value})} className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"/>
                <input placeholder="CTA Link" value={empEdit.ctaLink||""} onChange={e=>setEmpEdit({...empEdit,ctaLink:e.target.value})} className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"/>
              </div>

              <div>
                <p className="text-xs font-bold text-text-muted mb-2">Features (JSON format)</p>
                <textarea placeholder='[{"title":"Feature 1","desc":"Description 1"}]' rows={4} value={typeof empEdit.features === 'string' ? empEdit.features : JSON.stringify(empEdit.features || [])} onChange={e=>setEmpEdit({...empEdit,features:e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 font-mono text-xs"/>
              </div>

              <div className="flex gap-2 justify-end">
                <button onClick={()=>{setEmpCreating(false);setEmpId(null);}} className="px-4 py-2 border border-border rounded-xl text-xs font-bold text-text-primary hover:bg-bg-secondary"><X className="w-3 h-3 inline mr-1"/>Cancel</button>
                <button disabled={!empEdit.heading||!empEdit.description} onClick={async()=>{
                  let parsedFeatures = [];
                  try { if(typeof empEdit.features === 'string') parsedFeatures = JSON.parse(empEdit.features); else parsedFeatures = empEdit.features; } catch(e) { alert("Invalid JSON in features"); return; }
                  await save("/about/empowering",empId,{...empEdit, features: parsedFeatures},fetchEmp);setEmpCreating(false);setEmpId(null);setEmpEdit({});
                }} className="px-4 py-2 bg-violet-600 rounded-xl text-xs font-bold text-white hover:bg-violet-700 disabled:opacity-50"><Save className="w-3 h-3 inline mr-1"/>Save</button>
              </div>
            </div>
          )}
          {emp.length===0 && !empCreating ? (
            <p className="text-text-muted text-sm italic">No empowering section yet.</p>
          ) : emp.map(e=>(
            <div key={e.id} className="p-5 bg-bg-secondary border border-border rounded-2xl flex justify-between gap-4">
              <div>
                <p className="font-bold text-text-primary">{e.heading}</p>
                <p className="text-sm text-text-muted mt-1">{e.description}</p>
                <p className="text-xs text-text-muted mt-2 truncate max-w-md">Features: {JSON.stringify(e.features)}</p>
                {(e.ctaText || e.imageUrl) && (
                  <p className="text-xs text-violet-600 mt-2 font-medium">
                    {e.ctaText && `CTA: ${e.ctaText} (${e.ctaLink})`}
                    {e.ctaText && e.imageUrl && ' | '}
                    {e.imageUrl && `Image: Set`}
                  </p>
                )}
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <button onClick={()=>{
                  setEmpId(e.id);
                  setEmpEdit({...e, features: JSON.stringify(e.features || [], null, 2)});
                  setEmpCreating(false);
                }} className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Edit2 className="w-4 h-4"/></button>
                <button onClick={()=>del("/about/empowering",e.id,fetchEmp)} className="p-2 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Trash2 className="w-4 h-4"/></button>
              </div>
            </div>
          ))}
          <button onClick={()=>{setEmpCreating(true);setEmpId(null);setEmpEdit({});}} className="flex items-center gap-2 px-4 py-2 bg-violet-600 rounded-xl text-xs font-bold text-white hover:bg-violet-700">
            <Plus className="w-3 h-3"/> Add Section
          </button>
        </div>
      </SectionCard>

      {/* ── SECTION 3: Our Values ── */}
      <SectionCard title="Our Values" icon={Heart} color="emerald">
        <div className="space-y-4">
          {(valCreating || valId !== null) && (
            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
              <input placeholder="Title *" value={valEdit.title||""} onChange={e=>setValEdit({...valEdit,title:e.target.value})} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              <textarea placeholder="Description *" rows={2} value={valEdit.desc||""} onChange={e=>setValEdit({...valEdit,desc:e.target.value})} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              <input placeholder="Order (number)" type="number" value={valEdit.order||0} onChange={e=>setValEdit({...valEdit,order:parseInt(e.target.value)})} className="w-32 px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              <div className="flex gap-2 justify-end">
                <button onClick={()=>{setValCreating(false);setValId(null);}} className="px-4 py-2 border border-border rounded-xl text-xs font-bold text-text-primary hover:bg-bg-secondary"><X className="w-3 h-3 inline mr-1"/>Cancel</button>
                <button disabled={!valEdit.title||!valEdit.desc} onClick={async()=>{await save("/about/values",valId,valEdit,fetchVals);setValCreating(false);setValId(null);setValEdit({});}} className="px-4 py-2 bg-emerald-600 rounded-xl text-xs font-bold text-white hover:bg-emerald-700 disabled:opacity-50"><Save className="w-3 h-3 inline mr-1"/>Save</button>
              </div>
            </div>
          )}
          {values.length===0 && !valCreating ? (
            <p className="text-text-muted text-sm italic">No values added yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {values.map(v=>(
                <div key={v.id} className="p-4 bg-bg-secondary border border-border rounded-2xl flex justify-between gap-3">
                  <div>
                    <p className="font-bold text-text-primary">{v.title}</p>
                    <p className="text-xs text-text-muted mt-1">{v.desc}</p>
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    <button onClick={()=>{setValId(v.id);setValEdit(v);setValCreating(false);}} className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Edit2 className="w-4 h-4"/></button>
                    <button onClick={()=>del("/about/values",v.id,fetchVals)} className="p-2 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Trash2 className="w-4 h-4"/></button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button onClick={()=>{setValCreating(true);setValId(null);setValEdit({order:0});}} className="flex items-center gap-2 px-4 py-2 bg-emerald-600 rounded-xl text-xs font-bold text-white hover:bg-emerald-700">
            <Plus className="w-3 h-3"/> Add Value
          </button>
        </div>
      </SectionCard>

      {/* ── SECTION 4: Global Presence ── */}
      <SectionCard title="Global Presence" icon={Globe} color="orange">
        <div className="space-y-4">
          {(presCreating || presId !== null) && (
            <div className="p-5 bg-orange-50 border border-orange-200 rounded-2xl space-y-3">
              <input placeholder="City (e.g., India — Gurgaon (HQ)) *" value={presEdit.city||""} onChange={e=>setPresEdit({...presEdit,city:e.target.value})} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"/>
              <input placeholder="Address" value={presEdit.address||""} onChange={e=>setPresEdit({...presEdit,address:e.target.value})} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"/>
              <textarea placeholder="Description" rows={2} value={presEdit.desc||""} onChange={e=>setPresEdit({...presEdit,desc:e.target.value})} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"/>
              <input placeholder="Order" type="number" value={presEdit.order||0} onChange={e=>setPresEdit({...presEdit,order:parseInt(e.target.value)})} className="w-32 px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"/>
              <div className="flex gap-2 justify-end">
                <button onClick={()=>{setPresCreating(false);setPresId(null);}} className="px-4 py-2 border border-border rounded-xl text-xs font-bold text-text-primary hover:bg-bg-secondary"><X className="w-3 h-3 inline mr-1"/>Cancel</button>
                <button disabled={!presEdit.city} onClick={async()=>{await save("/about/global-presence",presId,presEdit,fetchPres);setPresCreating(false);setPresId(null);setPresEdit({});}} className="px-4 py-2 bg-orange-500 rounded-xl text-xs font-bold text-white hover:bg-orange-600 disabled:opacity-50"><Save className="w-3 h-3 inline mr-1"/>Save</button>
              </div>
            </div>
          )}
          {pres.length===0 && !presCreating ? (
            <p className="text-text-muted text-sm italic">No locations added yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pres.map(p=>(
                <div key={p.id} className="p-4 bg-bg-secondary border border-border rounded-2xl flex justify-between gap-3">
                  <div>
                    <p className="font-bold text-text-primary">🌍 {p.city}</p>
                    {p.address && <p className="text-xs text-orange-600 font-medium">{p.address}</p>}
                    {p.desc && <p className="text-xs text-text-muted mt-1">{p.desc}</p>}
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    <button onClick={()=>{setPresId(p.id);setPresEdit(p);setPresCreating(false);}} className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Edit2 className="w-4 h-4"/></button>
                    <button onClick={()=>del("/about/global-presence",p.id,fetchPres)} className="p-2 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Trash2 className="w-4 h-4"/></button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button onClick={()=>{setPresCreating(true);setPresId(null);setPresEdit({order:0});}} className="flex items-center gap-2 px-4 py-2 bg-orange-500 rounded-xl text-xs font-bold text-white hover:bg-orange-600">
            <Plus className="w-3 h-3"/> Add Location
          </button>
        </div>
      </SectionCard>

      {/* ── SECTION 5: Origin Story ── */}
      <SectionCard title="Origin Story" icon={Briefcase} color="teal">
        <div className="space-y-4">
          {(originCreating || originId !== null) && (
            <div className="p-5 bg-teal-50 border border-teal-200 rounded-2xl space-y-3">
              <input placeholder="Heading *" value={originEdit.heading||""} onChange={e=>setOriginEdit({...originEdit,heading:e.target.value})} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
              <textarea placeholder="Paragraph 1 *" rows={3} value={originEdit.paragraph1||""} onChange={e=>setOriginEdit({...originEdit,paragraph1:e.target.value})} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
              <textarea placeholder="Paragraph 2 *" rows={3} value={originEdit.paragraph2||""} onChange={e=>setOriginEdit({...originEdit,paragraph2:e.target.value})} className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
              <div className="flex gap-2 justify-end">
                <button onClick={()=>{setOriginCreating(false);setOriginId(null);}} className="px-4 py-2 border border-border rounded-xl text-xs font-bold text-text-primary hover:bg-bg-secondary"><X className="w-3 h-3 inline mr-1"/>Cancel</button>
                <button disabled={!originEdit.heading||!originEdit.paragraph1||!originEdit.paragraph2} onClick={async()=>{await save("/about/origin-story",originId,originEdit,fetchOrigin);setOriginCreating(false);setOriginId(null);setOriginEdit({});}} className="px-4 py-2 bg-teal-600 rounded-xl text-xs font-bold text-white hover:bg-teal-700 disabled:opacity-50"><Save className="w-3 h-3 inline mr-1"/>Save</button>
              </div>
            </div>
          )}
          {origin.length===0 && !originCreating ? (
            <p className="text-text-muted text-sm italic">No origin story yet.</p>
          ) : origin.map(o=>(
            <div key={o.id} className="p-5 bg-bg-secondary border border-border rounded-2xl flex justify-between gap-4">
              <div>
                <p className="font-bold text-text-primary text-lg mb-2">{o.heading}</p>
                <p className="text-sm text-text-muted">{o.paragraph1}</p>
                <p className="text-sm text-text-muted mt-2">{o.paragraph2}</p>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <button onClick={()=>{setOriginId(o.id);setOriginEdit(o);setOriginCreating(false);}} className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Edit2 className="w-4 h-4"/></button>
                <button onClick={()=>del("/about/origin-story",o.id,fetchOrigin)} className="p-2 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Trash2 className="w-4 h-4"/></button>
              </div>
            </div>
          ))}
          <button onClick={()=>{setOriginCreating(true);setOriginId(null);setOriginEdit({});}} className="flex items-center gap-2 px-4 py-2 bg-teal-600 rounded-xl text-xs font-bold text-white hover:bg-teal-700">
            <Plus className="w-3 h-3"/> Add Origin Story
          </button>
        </div>
      </SectionCard>
    </div>
  );
}
