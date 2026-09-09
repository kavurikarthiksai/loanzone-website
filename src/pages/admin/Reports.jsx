import React from 'react';
import { 
  BarChart3, TrendingUp, CheckCircle2, AlertTriangle, 
  Send, Users, MessageCircle, Calendar, ArrowUpRight 
} from 'lucide-react';

export const Reports = () => {
  const metrics = [
    { label: "Total Campaigns Executed", value: "42", change: "+12% MoM", icon: Send, color: "text-[#063B73] bg-blue-50" },
    { label: "Total Messages Sent", value: "24,850", change: "+28% MoM", icon: MessageCircle, color: "text-[#0B5ED7] bg-indigo-50" },
    { label: "Overall Delivery Rate", value: "96.4%", change: "+2.1%", icon: CheckCircle2, color: "text-[#16A34A] bg-emerald-50" },
    { label: "Delivery Failure Rate", value: "3.6%", change: "-1.5%", icon: AlertTriangle, color: "text-rose-600 bg-rose-50" },
    { label: "Customer Response Rate", value: "38.2%", change: "+5.4%", icon: TrendingUp, color: "text-[#F97316] bg-orange-50" },
  ];

  // Daily campaign volume bars
  const weeklyData = [
    { day: "Mon", sent: 850, delivered: 820 },
    { day: "Tue", sent: 1200, delivered: 1140 },
    { day: "Wed", sent: 980, delivered: 940 },
    { day: "Thu", sent: 1450, delivered: 1390 },
    { day: "Fri", sent: 1600, delivered: 1530 },
    { day: "Sat", sent: 750, delivered: 710 },
    { day: "Sun", sent: 400, delivered: 380 },
  ];

  const maxVal = 1600;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#063B73] tracking-tight">
          Analytics & Campaign Reports
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Deep-dive into WhatsApp broadcast performance, delivery ratios, and applicant response rates
        </p>
      </div>

      {/* 5 Top Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{m.label}</span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${m.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-black text-slate-900">{m.value}</div>
              <span className="text-[10px] font-bold text-emerald-600 mt-1 block">
                {m.change}
              </span>
            </div>
          );
        })}
      </div>

      {/* Visual Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Weekly Volume Bar Chart (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">Weekly Message Volume & Delivery</h3>
              <p className="text-xs text-slate-400">Total sent vs successfully delivered</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 font-bold text-slate-600">
                <span className="w-3 h-3 rounded-full bg-[#063B73]"></span> Sent
              </span>
              <span className="flex items-center gap-1.5 font-bold text-slate-600">
                <span className="w-3 h-3 rounded-full bg-[#16A34A]"></span> Delivered
              </span>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="h-64 flex items-end justify-between gap-2 sm:gap-6 pt-6 pb-2">
            {weeklyData.map((item, idx) => {
              const sentHeight = Math.round((item.sent / maxVal) * 100);
              const delHeight = Math.round((item.delivered / maxVal) * 100);
              return (
                <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                  <div className="text-[10px] font-bold text-slate-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.delivered}
                  </div>
                  <div className="w-full flex items-end justify-center gap-1 h-48">
                    <div
                      className="w-1/2 max-w-[20px] bg-[#063B73] rounded-t-md transition-all duration-500 hover:bg-[#0B5ED7]"
                      style={{ height: `${sentHeight}%` }}
                    ></div>
                    <div
                      className="w-1/2 max-w-[20px] bg-[#16A34A] rounded-t-md transition-all duration-500 hover:bg-[#15803D]"
                      style={{ height: `${delHeight}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-slate-600 mt-2">{item.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Breakdown Card: Lead Conversion by Product (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col justify-between">
          <div>
            <h3 className="font-extrabold text-slate-900 text-base mb-1">Inquiries by Product</h3>
            <p className="text-xs text-slate-400 mb-6">WhatsApp direct lead origin share</p>

            <div className="space-y-4">
              {[
                { name: "Personal Loan", pct: 52, color: "bg-[#063B73]" },
                { name: "Top-Up Loan", pct: 24, color: "bg-[#F97316]" },
                { name: "Balance Transfer", pct: 14, color: "bg-[#16A34A]" },
                { name: "Business Loan", pct: 10, color: "bg-[#0B5ED7]" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>{item.name}</span>
                    <span>{item.pct}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-500">
            <span className="font-bold text-slate-700 block mb-1">High Conversion Insight:</span>
            Personal loan campaigns dispatched between 11 AM – 1 PM register 42% faster applicant responses.
          </div>
        </div>

      </div>

    </div>
  );
};
