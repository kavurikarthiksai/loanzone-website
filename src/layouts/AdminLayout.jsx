import React, { useState } from 'react';
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Send, MessageSquareText, Calendar, 
  BarChart3, Settings, LogOut, Search, Bell, Menu, X, 
  ExternalLink, ChevronDown, CheckCheck, Shield 
} from 'lucide-react';
import { getAuthUser, setAuthUser } from '../utils/storage';
import { CONFIG } from '../config/config';
import { useToast } from '../context/ToastContext';

export const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const user = getAuthUser() || {
    name: CONFIG.demoAdmin.name,
    email: CONFIG.demoAdmin.email,
    role: CONFIG.demoAdmin.role
  };

  const handleLogout = () => {
    setAuthUser(null);
    addToast("Logged out of Admin Portal.", "info");
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard, exact: true },
    { name: 'Contacts', path: '/admin/contacts', icon: Users },
    { name: 'WhatsApp Campaigns', path: '/admin/campaigns', icon: Send },
    { name: 'Message Templates', path: '/admin/templates', icon: MessageSquareText },
    { name: 'Scheduled Messages', path: '/admin/scheduled', icon: Calendar },
    { name: 'Reports', path: '/admin/reports', icon: BarChart3 },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col lg:flex-row">
      
      {/* Mobile Drawer Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Dark Navy Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#04244B] text-slate-300 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Logo Brand Strip */}
          <div className="p-5 flex items-center justify-between border-b border-slate-800/80">
            <Link to="/admin" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#063B73] to-[#0B5ED7] flex items-center justify-center text-white font-black text-lg shadow-md border border-white/20">
                LZ
              </div>
              <div>
                <div className="font-black text-xl text-white tracking-tight">
                  Loan<span className="text-[#F97316]">Zone</span>
                </div>
                <p className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">
                  WhatsApp Automation
                </p>
              </div>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1 mt-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.exact}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-150 ${
                      isActive
                        ? 'bg-[#0B5ED7] text-white shadow-md'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Sidebar Utilities */}
        <div className="p-4 border-t border-slate-800/80 space-y-2">
          <Link
            to="/"
            target="_blank"
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900/40 rounded-xl hover:bg-slate-900 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-[#F97316]" /> View Public Website
            </span>
          </Link>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 px-2">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> API Online
            </span>
            <span className="font-mono text-[10px]">v2.4.0</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200/80 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 shadow-2xs">
          
          {/* Left: Mobile Toggle & Global Search */}
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
              aria-label="Open Sidebar Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search leads, campaigns, templates, phone..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#063B73] focus:bg-white"
              />
            </div>
          </div>

          {/* Right: Notifications & Admin Profile */}
          <div className="flex items-center gap-3">
            
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 relative transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#F97316] rounded-full border-2 border-white"></span>
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 z-50 text-xs animate-slide-up">
                  <div className="flex items-center justify-between font-bold text-slate-800 pb-2 border-b border-slate-100">
                    <span>Notifications (3)</span>
                    <span className="text-[10px] text-[#0B5ED7] cursor-pointer">Mark all read</span>
                  </div>
                  <div className="divide-y divide-slate-100 mt-1">
                    <div className="py-2.5">
                      <p className="font-semibold text-slate-800">Campaign "Personal Loan Offer" finished</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">840 messages delivered (86% success)</p>
                    </div>
                    <div className="py-2.5">
                      <p className="font-semibold text-slate-800">42 new leads synced from website</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Ready for WhatsApp drip dispatch</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Admin Avatar & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 pr-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#063B73] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="hidden sm:block text-left">
                  <span className="block text-xs font-bold text-slate-800 leading-tight">
                    {user.name}
                  </span>
                  <span className="block text-[10px] text-slate-400 font-medium">
                    {user.role}
                  </span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-slide-up">
                  <div className="p-2 border-b border-slate-100 text-xs">
                    <p className="font-bold text-slate-800">{user.name}</p>
                    <p className="text-slate-400 text-[11px] truncate">{user.email}</p>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/admin/settings"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
                    >
                      <Settings className="w-4 h-4" /> System Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-600 hover:bg-rose-50 rounded-lg font-medium"
                    >
                      <LogOut className="w-4 h-4" /> Logout Session
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </header>

        {/* Dynamic Nested Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
};
