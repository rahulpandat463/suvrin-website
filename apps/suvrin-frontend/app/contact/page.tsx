"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary border-b border-border" id="contact-hero">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[0.8rem] font-semibold text-accent uppercase tracking-[3px] mb-4">Contact</p>
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.1] mb-4 text-text-primary max-w-[700px]">
            Let&apos;s shape your
            <br />
            <em className="font-light">AI strategy together</em>
          </h1>
          <p className="text-[1.15rem] text-text-secondary max-w-[500px] leading-7">
            Ready to bring AI into your business? Get in touch and our team will
            respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-8">
                Send us a message
              </h2>

              {submitted ? (
                <div className="bg-bg-card border border-border rounded-2xl p-12 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-[1.15rem] font-semibold text-text-primary mb-2.5">Thank you!</h3>
                  <p className="text-[0.92rem] text-text-secondary leading-relaxed">
                    We&apos;ve received your message and will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label className="block text-[0.85rem] font-medium text-text-secondary mb-2" htmlFor="contact-name">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="w-full px-4 py-3 text-[0.95rem] text-text-primary bg-bg-card border border-border rounded-md outline-none transition-colors focus:border-accent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block text-[0.85rem] font-medium text-text-secondary mb-2" htmlFor="contact-email">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="w-full px-4 py-3 text-[0.95rem] text-text-primary bg-bg-card border border-border rounded-md outline-none transition-colors focus:border-accent"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block text-[0.85rem] font-medium text-text-secondary mb-2" htmlFor="contact-company">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      className="w-full px-4 py-3 text-[0.95rem] text-text-primary bg-bg-card border border-border rounded-md outline-none transition-colors focus:border-accent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block text-[0.85rem] font-medium text-text-secondary mb-2" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      className="w-full px-4 py-3 text-[0.95rem] text-text-primary bg-bg-card border border-border rounded-md outline-none transition-colors focus:border-accent min-h-[140px] resize-y"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-[0.95rem] font-semibold text-text-primary bg-accent border-none rounded-full cursor-pointer transition-all duration-250 hover:bg-accent-hover hover:-translate-y-0.5"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-8">
                Get in touch
              </h2>
              <div className="flex flex-col gap-7">
                {[
                  { icon: "📧", label: "Email", value: "hello@suvrin.com" },
                  { icon: "📞", label: "Phone", value: "+91 70335 57104" },
                  { icon: "📍", label: "Location", value: "India" },
                  { icon: "🕐", label: "Response Time", value: "Within 24 hours" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-11 h-11 bg-accent-light rounded-[10px] flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[0.82rem] text-text-muted uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-base text-text-primary">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-bg-secondary to-bg-primary text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-5 text-text-primary">Prefer to schedule a call?</h2>
          <p className="text-[1.1rem] text-text-secondary mb-10 max-w-[500px] mx-auto">
            Book a free 30-minute consultation with our AI experts.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 text-base font-semibold text-text-primary bg-accent rounded-full transition-all duration-250 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(232,134,58,0.35)]"
          >
            Schedule a Call →
          </a>
        </div>
      </section>
    </>
  );
}
