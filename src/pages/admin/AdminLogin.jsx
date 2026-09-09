import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { CONFIG } from '../../config/config';
import { setAuthUser } from '../../utils/storage';
import { useToast } from '../../context/ToastContext';

export const AdminLogin = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (
        email.trim().toLowerCase() === CONFIG.demoAdmin.email.toLowerCase() &&
        password === CONFIG.demoAdmin.password
      ) {
        const user = {
          email: CONFIG.demoAdmin.email,
          name: CONFIG.demoAdmin.name,
          role: CONFIG.demoAdmin.role,
          loginTime: new Date().toISOString()
        };
        setAuthUser(user);
        addToast(`Welcome back, ${CONFIG.demoAdmin.name}!`, "success");
        navigate('/admin');
      } else {
        setError('Invalid credentials. Please use the demo credentials below.');
        setLoading(false);
      }
    }, 600);
  };

  const handlePrefillDemo = () => {
    setEmail(CONFIG.demoAdmin.email);
    setPassword(CONFIG.demoAdmin.password);
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#063B73] via-[#04244B] to-[#031730] p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Decorative Top Accent */}
        <div className="h-2 w-full bg-gradient-to-r from-[#063B73] via-[#0B5ED7] to-[#F97316] absolute top-0 left-0"></div>

        {/* Logo & Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#063B73] text-white font-black text-xl flex items-center justify-center shadow-md">
              LZ
            </div>
            <span className="font-black text-2xl text-[#063B73]">
              Loan<span className="text-[#F97316]">Zone</span>
            </span>
          </Link>
          <h2 className="text-xl font-bold text-slate-900">WhatsApp Automation Portal</h2>
          <p className="text-xs text-slate-500 mt-1">Authorized operations & campaign management</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="admin@loanzone.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73] font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73] font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 bg-[#063B73] hover:bg-[#0B5ED7] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Box with One-Click Fill */}
        <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" /> Demo Credentials
            </span>
            <button
              type="button"
              onClick={handlePrefillDemo}
              className="text-xs text-[#0B5ED7] font-bold hover:underline"
            >
              Auto-Fill Demo
            </button>
          </div>
          <div className="text-xs text-slate-500 font-mono space-y-1 bg-white p-2 rounded-lg border border-slate-200/70">
            <div>Email: <strong className="text-slate-800">admin@loanzone.com</strong></div>
            <div>Pass: <strong className="text-slate-800">Admin@123</strong></div>
          </div>
          <p className="text-[10px] text-slate-400 mt-2">
            Frontend demonstration mode. Session is securely stored in localStorage.
          </p>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-xs font-semibold text-slate-500 hover:text-[#063B73]">
            ← Return to Public Website
          </Link>
        </div>

      </div>
    </div>
  );
};
