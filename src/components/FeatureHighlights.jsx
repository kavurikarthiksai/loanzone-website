import React from 'react';
import { Zap, FileText, Building2, Headphones } from 'lucide-react';

export const FeatureHighlights = () => {
  const features = [
    {
      icon: Zap,
      title: "Quick Processing",
      desc: "Instant digital sanction within 24 hours with paperless e-KYC verification.",
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      icon: FileText,
      title: "Minimal Documentation",
      desc: "Only PAN, Aadhaar and 3 months' bank statements required for fast clearance.",
      color: "bg-blue-50 text-[#0B5ED7] border-blue-200"
    },
    {
      icon: Building2,
      title: "Trusted Banking Partners",
      desc: "Direct tie-ups with 15+ premier Indian private and PSU banks & leading NBFCs.",
      color: "bg-indigo-50 text-[#063B73] border-indigo-200"
    },
    {
      icon: Headphones,
      title: "100% Support at Every Step",
      desc: "Dedicated personal loan advisor from inquiry through doorstep fund credit.",
      color: "bg-emerald-50 text-[#16A34A] border-emerald-200"
    }
  ];

  return (
    <section className="relative -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-premium border border-slate-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 border ${item.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#063B73] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
