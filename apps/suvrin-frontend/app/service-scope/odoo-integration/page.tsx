/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Odoo Integration Services | Tally, Shopify, SAP, Payment Gateways | Suvrin Technologies",
  description:
    "RESTful APIs, webhooks, and middleware for seamless Odoo connectivity. Tally, SAP, Salesforce, payment gateways, e-commerce, logistics, and government compliance integrations.",
};

const integrationGroups = [
  {
    category: "Accounting & Finance",
    items: [
      "Tally ERP — bidirectional sync",
      "Zoho Books, QuickBooks, Xero",
      "Banking API integrations for automated reconciliation",
    ],
  },
  {
    category: "E-commerce & Marketplaces",
    items: [
      "Shopify, WooCommerce, Magento",
      "Amazon, Noon, Flipkart seller integrations",
      "Custom B2B portal integrations",
    ],
  },
  {
    category: "Payment Gateways",
    items: [
      "Razorpay, PayU, CCAvenue (India)",
      "Stripe, PayPal (US/Global)",
      "Telr, PayTabs, HyperPay (UAE/GCC)",
    ],
  },
  {
    category: "Logistics & Shipping",
    items: [
      "Delhivery, Blue Dart, Shiprocket (India)",
      "Aramex, DHL, FedEx (International/GCC)",
      "Custom 3PL API integrations",
    ],
  },
  {
    category: "Communication & CRM",
    items: [
      "WhatsApp Business API — automated notifications and two-way messaging",
      "Salesforce, HubSpot, Zoho CRM",
      "SMS gateways — Twilio, MSG91",
    ],
  },
  {
    category: "Government & Compliance — India",
    items: [
      "GST e-invoicing (IRP/NIC portal)",
      "E-way bill generation",
      "TDS/TCS filing integrations",
    ],
  },
  {
    category: "Government & Compliance — UAE/GCC",
    items: [
      "UAE FTA VAT filing API",
      "Saudi ZATCA Phase 1 & Phase 2 e-invoicing",
      "Customs and trade compliance integrations",
    ],
  },
];

export default function OdooIntegrationPage() {
  return (
    <>
      <ServicesHero
        id="odoo-integration"
        title={
          <>
            Odoo Integration
            <br />
            Services
          </>
        }
        description="RESTful APIs, webhooks, and middleware for seamless system connectivity"
        ctaText="Plan Your Integration →"
      />

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[1.05rem] text-[#555] leading-relaxed max-w-[820px] mb-16">
            Odoo rarely operates in isolation. Most businesses have existing tools — accounting
            software, e-commerce platforms, payment gateways, logistics providers, and HR systems —
            that need to exchange data with Odoo in real time. We build the integrations that make
            this happen reliably, securely, and without manual data entry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationGroups.map((group) => (
              <div
                key={group.category}
                className="bg-white p-6 rounded-2xl border border-[#eaeaea] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                <h3 className="text-[1rem] font-serif font-bold text-[#111] mb-4 pb-3 border-b border-[#eaeaea]">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.9rem] text-[#555]">
                      <span className="mt-1 text-[#0546e0] flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-[1rem] font-medium text-white bg-[#0546e0] rounded-full hover:bg-[#0438c4] hover:-translate-y-0.5 transition-all duration-250"
          >
            Discuss Your Integration →
          </Link>
          <Link
            href="/services/enterprise-applications/odoo-erp-implementation"
            className="inline-flex items-center justify-center px-8 py-4 text-[1rem] font-medium text-[#0546e0] bg-white border border-[#0546e0] rounded-full hover:bg-[#0546e0]/5 transition-all duration-250"
          >
            ← Back to All Odoo Services
          </Link>
        </div>
      </section>
    </>
  );
}
