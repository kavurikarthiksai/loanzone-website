import React from 'react';
import { ThreeDFlash, ThreeDDocument, ThreeDBank, ThreeDSupport } from './ThreeDIcons';

export const FeatureHighlights = () => {
  const features = [
    {
      iconComponent: ThreeDFlash,
      title: "Quick Processing",
      desc: "Instant digital sanction within 24 hours with paperless e-KYC verification.",
    },
    {
      iconComponent: ThreeDDocument,
      title: "Minimal Documentation",
      desc: "Only PAN, Aadhaar and 3 months' bank statements required for fast clearance.",
    },
    {
      iconComponent: ThreeDBank,
      title: "Trusted Banking Partners",
      desc: "Direct tie-ups with 15+ premier Indian private and PSU banks & leading NBFCs.",
    },
    {
      iconComponent: ThreeDSupport,
      title: "100% Support at Every Step",
      desc: "Dedicated personal loan advisor from inquiry through doorstep fund credit.",
    }
  ];

  return (
    <section className="relative -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((item, idx) => {
          const IconComponent = item.iconComponent;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-premium border border-slate-100/90 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1.5 group flex flex-col justify-between"
            >
              <div>
                {/* 3D Icon with hover lift */}
                <div className="mb-4 transform group-hover:scale-108 group-hover:-rotate-2 transition-transform duration-300 drop-shadow-sm">
                  <IconComponent className="w-14 h-14" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-[#063B73] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
