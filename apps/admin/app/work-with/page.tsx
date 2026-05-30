"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Briefcase, Trash2, Image as ImageIcon, AlertCircle, ArrowLeft } from "lucide-react";

interface WorkedWithImage {
  id: number;
  filename: string;
  url: string;
  extension: string;
  createdAt: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

export default function WorkWithPage() {
  const [images, setImages] = useState<WorkedWithImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/WorkedWith`);
      if (!res.ok) throw new Error("Failed to fetch images");
      const data = await res.json();
      setImages(data.images || []);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchImages(); }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Remove this image record from the database? (The file in /public won't be deleted.)")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`${API_URL}/WorkedWith?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setImages(prev => prev.filter(img => img.id !== id));
    } catch (err: any) {
      alert(err.message || "An error occurred while deleting");
    } finally {
      setDeletingId(null);
    }
  };

  const getBackendImageUrl = (url: string) => {
    // Images are served from the backend's public folder at port 3002
    return `http://localhost:3002${url}`;
  };

  return (
    <div className="space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-purple-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </div>

      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-purple-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            WORK WITH
          </div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">
            Work With Management
          </h1>
          <p className="text-text-muted text-sm font-medium">
            Manage partner & client logos. Add images to the <code className="text-xs bg-bg-secondary px-1.5 py-0.5 rounded font-mono">/public</code> folder in the backend, then refresh to sync.
          </p>
        </div>
        <button
          onClick={fetchImages}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-xs font-bold text-text-primary shadow-sm hover:bg-bg-secondary transition-all"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Refresh & Sync
        </button>
      </div>

      {/* Info banner */}
      <div className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-100 rounded-2xl">
        <AlertCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-purple-700 space-y-1">
          <p className="font-semibold">How it works</p>
          <p>Place <strong>.jpeg / .jpg / .png / .webp</strong> files in the backend&apos;s <code className="bg-purple-100 px-1 rounded font-mono text-xs">apps/backend/public/</code> folder, then click <strong>Refresh &amp; Sync</strong> — the API auto-detects and seeds them to the database.</p>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-200">{error}</div>
      )}

      {loading ? (
        <div className="min-h-[400px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-text-muted gap-4">
          <RefreshCw className="w-8 h-8 animate-spin text-purple-500" />
          <p className="text-sm font-medium italic">Loading images...</p>
        </div>
      ) : images.length === 0 ? (
        <div className="min-h-[400px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-text-muted gap-4">
          <Briefcase className="w-12 h-12 text-border" />
          <p className="text-sm font-medium italic">No images found. Add images to the backend /public folder and click Refresh.</p>
        </div>
      ) : (
        <>
          {/* Count badge */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-text-primary">{images.length} image{images.length !== 1 ? "s" : ""} in database</span>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                {/* Image */}
                <div className="aspect-video bg-bg-secondary flex items-center justify-center p-3">
                  <img
                    src={getBackendImageUrl(image.url)}
                    alt={image.filename}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <div className="hidden flex-col items-center gap-1 text-text-muted">
                    <ImageIcon className="w-8 h-8" />
                    <span className="text-xs">No preview</span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-3 py-2 border-t border-border">
                  <p className="text-xs font-medium text-text-primary truncate" title={image.filename}>
                    {image.filename}
                  </p>
                  <p className="text-[10px] text-text-muted uppercase tracking-wider mt-0.5">
                    .{image.extension} &bull; ID: {image.id}
                  </p>
                </div>

                {/* Delete overlay */}
                <button
                  onClick={() => handleDelete(image.id)}
                  disabled={deletingId === image.id}
                  className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm border border-border rounded-lg text-text-muted hover:text-red-600 hover:bg-red-50 hover:border-red-200 opacity-0 group-hover:opacity-100 transition-all shadow-sm disabled:opacity-50"
                  title="Remove from database"
                >
                  {deletingId === image.id
                    ? <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    : <Trash2 className="w-3.5 h-3.5" />
                  }
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
