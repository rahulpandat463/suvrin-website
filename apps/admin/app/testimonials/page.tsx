import React from "react";

export default function TestimonialsPage() {
  return (
    <div className="space-y-10">
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
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-xs font-bold text-text-primary shadow-sm hover:bg-bg-secondary transition-all">
          <span className="text-sm">🔄</span> Refresh
        </button>
      </div>

      <div className="min-h-[400px] border-2 border-dashed border-border rounded-3xl flex items-center justify-center text-text-muted">
        <p className="text-sm font-medium italic">Testimonials section is empty. Content coming soon.</p>
      </div>
    </div>
  );
}
