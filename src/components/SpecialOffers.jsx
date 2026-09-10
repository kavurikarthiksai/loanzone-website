import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Tag } from 'lucide-react';

const offers = [
  {
    id: 1,
    image: '/images/offers/exclusive-offer.png',
    title: 'Exclusive Bank Offer',
    description: 'Low interest rates, easy process, and quick approval across major banks.',
  },
  {
    id: 2,
    image: '/images/offers/hdfc-festive.jpg',
    title: 'HDFC Festive Treats',
    description: 'Go big this festive season. Get instant funds with Xpress Personal Loan from 9.99%.',
  },
  {
    id: 3,
    image: '/images/offers/rakhi-loans.png',
    title: 'Special Personal Loans',
    description: 'Top-up loans, balance transfers, and more with minimum documentation.',
  },
  {
    id: 4,
    image: '/images/offers/instant-transfer.jpg',
    title: 'Instant Bank Transfer',
    description: 'Fast, safe, and trusted instant bank transfers from credit cards.',
  },
  {
    id: 5,
    image: '/images/offers/icici-smile.png',
    title: 'ICICI Bank Personal Loan',
    description: '0 Foreclosure charges after 24 EMIs. Gift more than a smile.',
  }
];

export const SpecialOffers = () => {
  const scrollRef = useRef(null);
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      // Get the width of one card + gap
      const itemWidth = scrollRef.current.children[0]?.offsetWidth || 344; // 320px + 24px gap
      const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60" id="offers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100/50 text-[#F97316] font-bold text-xs uppercase tracking-wider rounded-full mb-4 border border-orange-200/50">
              <Tag className="w-3.5 h-3.5" />
              <span>Limited Time Promotions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B73] tracking-tight">
              Exclusive Partner Offers
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Take advantage of festive specials, zero-foreclosure deals, and tailored loan terms directly from our top lending partners.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-3 shrink-0">
            <button 
              onClick={() => scroll('left')}
              className="p-3.5 rounded-full border border-slate-200 bg-white text-[#063B73] hover:bg-[#063B73] hover:text-white hover:border-[#063B73] transition-all shadow-sm active:scale-95"
              aria-label="Previous offers"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3.5 rounded-full border border-slate-200 bg-white text-[#063B73] hover:bg-[#063B73] hover:text-white hover:border-[#063B73] transition-all shadow-sm active:scale-95"
              aria-label="Next offers"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="shrink-0 w-[85vw] sm:w-[320px] md:w-[380px] lg:w-[400px] snap-center sm:snap-start group cursor-pointer"
            >
              <div className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden transition-all duration-400 hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1.5 h-full flex flex-col">
                
                {/* Image Container with Blurry Background Effect for varying aspect ratios */}
                <div className="relative h-[320px] sm:h-[400px] bg-slate-900 overflow-hidden">
                  {/* Blurred Background */}
                  <img 
                    src={offer.image} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover scale-125 blur-xl opacity-50 select-none pointer-events-none"
                    aria-hidden="true"
                  />
                  {/* Foreground Image */}
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col bg-white">
                  <h3 className="font-extrabold text-xl text-[#063B73] mb-3 leading-tight group-hover:text-[#F97316] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-2">
                    {offer.description}
                  </p>
                  
                  {/* Fake "View Details" link that appears on hover */}
                  <div className="mt-6 flex items-center gap-2 text-[#063B73] font-bold text-sm opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span>View Offer Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};
