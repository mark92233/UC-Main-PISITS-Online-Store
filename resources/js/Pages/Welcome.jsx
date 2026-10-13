import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, ShieldCheck, 
  Layers, Users, QrCode, Clock, Download, 
  Monitor, Smartphone, MapPin, Mail, LayoutDashboard,
  CheckCircle2, Zap, BarChart3, Fingerprint, RefreshCw
} from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeWorkflowTab, setActiveWorkflowTab] = useState('setup');
  const [activeDeviceTab, setActiveDeviceTab] = useState('desktop');

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Install App', href: '#install' },
  ];

  const workflowData = {
    setup: [
      { step: '01', title: 'Digital ID Generation', desc: 'Securely authenticate and mint your unique digital organization profile.' },
      { step: '02', title: 'Workspace Integration', desc: 'Sync automatically with your designated departments and collaborative teams.' }
    ],
    'core usage': [
      { step: '01', title: 'Live Inventory Matrix', desc: 'Browse and filter available resources in real-time across all facilities.' },
      { step: '02', title: 'Instant Provisioning', desc: 'Secure items immediately with tap-to-confirm digital checkouts.' },
      { step: '03', title: 'Smart Approvals', desc: 'High-tier items automatically route to administrators for one-click approval.' }
    ],
    'advanced actions': [
      { step: '01', title: 'Predictive Booking', desc: 'Reserve high-demand assets weeks in advance with conflict resolution.' },
      { step: '02', title: 'Delegated Access', desc: 'Temporarily transfer access rights to verified team members via QR handoff.' }
    ],
    returns: [
      { step: '01', title: 'Condition Auditing', desc: 'Log item status with photographic evidence upon return.' },
      { step: '02', title: 'Ledger Reconciliation', desc: 'System instantly clears your accountability record and updates global availability.' }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-yellow-400 selection:text-purple-950 scroll-smooth">
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-purple-950/95 backdrop-blur-md border-b border-purple-800 shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 p-2 rounded-xl shadow-inner">
                <Zap className="w-6 h-6 text-purple-950 fill-current" />
              </div>
              <span className={`text-2xl font-black tracking-tight ${isScrolled ? 'text-white' : 'text-purple-950 md:text-purple-950'}`}>
                Orbit Sync
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isScrolled 
                      ? 'text-purple-200 hover:text-white hover:bg-purple-800/50' 
                      : 'text-purple-900 hover:text-purple-700 hover:bg-purple-100/50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pl-4 ml-2 border-l border-purple-300/30">
               <Link href="/login" className="inline-block bg-yellow-400 text-purple-950 px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all transform hover:-translate-y-0.5">
                    Get Started
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`p-2 rounded-lg ${isScrolled ? 'text-white' : 'text-purple-950'}`}
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-purple-950 border-b border-purple-800 px-4 pt-2 pb-6 space-y-2 shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-purple-100 hover:text-white hover:bg-purple-800 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full bg-yellow-400 text-purple-950 px-5 py-4 rounded-xl text-base font-bold shadow-md active:bg-yellow-500">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-purple-950">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <div className="space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/50 border border-purple-700/50 text-yellow-400 text-sm font-bold backdrop-blur-sm shadow-sm">
                <Zap className="w-4 h-4 fill-current" />
                <span>Orbit Sync v3.0 is now live</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
                Orchestrate Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Digital Workflow</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-purple-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                The enterprise-grade platform designed to eradicate manual processes. Centralize equipment tracking, automate facility access, and enforce unbreakable collaborative accountability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/login" className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-purple-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all transform hover:-translate-y-1">
                    Get Started Free
                <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="flex items-center justify-center gap-2 bg-purple-900/50 text-white border border-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-800 transition-all backdrop-blur-sm">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Hero Visual Placeholder */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-3xl transform rotate-3 scale-[1.02] opacity-70 blur-lg"></div>
              <div className="relative bg-[#1A0B3B]/90 backdrop-blur-xl border border-purple-700/50 p-6 rounded-3xl shadow-2xl transform transition-transform duration-700 hover:rotate-0 rotate-[-2deg]">
                
                {/* Mock UI Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-purple-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center">
                      <LayoutDashboard className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg leading-tight">Command Center</h3>
                      <p className="text-purple-300 text-xs font-medium">Live Organization Feed</p>
                    </div>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Systems Operational
                  </span>
                </div>
                
                {/* Mock UI Content */}
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-purple-900/30 border border-purple-800/30 hover:bg-purple-800/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-full ${i === 2 ? 'bg-yellow-400/10 text-yellow-400' : 'bg-blue-400/10 text-blue-400'}`}>
                          {i === 2 ? <Clock className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">Asset Deployment #{8090 + i}</p>
                          <p className="text-xs text-purple-300 font-medium mt-0.5">Verified by Node Alpha • Just now</p>
                        </div>
                      </div>
                      <div className="text-right hidden sm:block">
                        <span className="text-xs font-bold text-purple-200 bg-purple-950 px-2 py-1 rounded-md">Authorized</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Mock UI Footer Stats */}
                <div className="mt-8 pt-6 border-t border-purple-800/50 grid grid-cols-2 gap-4">
                  <div className="bg-purple-900/40 p-4 rounded-2xl border border-purple-800/30">
                    <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-1">Active Nodes</p>
                    <p className="text-3xl font-black text-white">2,845</p>
                  </div>
                  <div className="bg-purple-900/40 p-4 rounded-2xl border border-purple-800/30">
                    <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-1">Resolution Time</p>
                    <p className="text-3xl font-black text-yellow-400">0.4s</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white relative z-20 -mt-8 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-purple-950 mb-6 tracking-tight">
              From Manual Chaos to <br className="hidden md:block" />
              <span className="text-purple-700">Digital Supremacy</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Operational friction is the enemy of progress. Orbit Sync dismantles fragmented spreadsheets and manual logs, replacing them with a unified, technology-driven ecosystem engineered for 24/7 reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <Zap className="w-7 h-7" />,
                title: 'Technology-Driven Engine',
                desc: 'Built on next-generation edge architecture ensuring instantaneous performance and seamless API integrations with your existing legacy tools.'
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: 'Unrestricted 24/7 Access',
                desc: 'Cloud-native infrastructure dictates that your organization never sleeps. Book, approve, and audit from any location, at any exact moment.'
              },
              {
                icon: <ShieldCheck className="w-7 h-7" />,
                title: 'Immutable Transparency',
                desc: 'Every single state change is permanently logged in a tamper-proof digital ledger, delivering absolute, undisputed accountability across all tiers.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-900 group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-purple-950 mb-3">{feature.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-32 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-purple-950 mb-6 tracking-tight">Master Your Workflow</h2>
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              Execute complex operational sequences with intuitive, strictly structured digital pathways designed for zero user error.
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {Object.keys(workflowData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveWorkflowTab(tab)}
                className={`px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeWorkflowTab === tab 
                    ? 'bg-purple-950 text-yellow-400 shadow-lg scale-105' 
                    : 'bg-white text-purple-900 border border-purple-200 hover:bg-purple-50 hover:border-purple-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Step Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowData[activeWorkflowTab].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Decorative Background Accent */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-50 rounded-full group-hover:bg-yellow-50 group-hover:scale-150 transition-all duration-500 ease-out z-0"></div>
                
                <div className="relative z-10">
                  <span className="text-6xl font-black text-slate-100 absolute -top-4 -right-4 group-hover:text-yellow-100 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 bg-purple-950 text-yellow-400 rounded-xl flex items-center justify-center font-black text-xl mb-6 shadow-md">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-purple-950 mb-4">{item.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-purple-950 mb-6 tracking-tight">Why Industry Leaders Choose Orbit</h2>
            <p className="text-xl text-slate-600 font-medium">
              We don't just optimize workflows; we fundamentally restructure how accountability and speed coexist in modern organizations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: 'Transparent Records',
                desc: 'Maintain a surgically precise, auditable history of every transaction and resource deployment. Eliminate lost assets completely.'
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: 'Streamlined Workflows',
                desc: 'Condense labyrinthine approval processes into linear, single-click digital pathways that execute instantly.'
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Group Accountability',
                desc: 'Bind responsibilities to specific user cohorts. Enforce strict collaborative ownership over critical organizational resources.'
              },
              {
                icon: <QrCode className="w-6 h-6" />,
                title: 'Fast QR Verification',
                desc: 'Deploy dynamic, time-sensitive cryptographic QR codes for sub-second, contact-free physical verification at all checkpoints.'
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: 'Real-Time Updates',
                desc: 'Push bidirectional state changes to all active clients globally. See status modifications the millisecond they happen.'
              }
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className={`flex gap-6 ${idx >= 3 ? 'lg:col-span-1.5' : ''} ${idx === 3 ? 'lg:col-start-1 lg:ml-auto lg:w-[85%]' : ''} ${idx === 4 ? 'lg:col-start-2 lg:mr-auto lg:w-[85%]' : ''}`}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-purple-950 rounded-2xl flex items-center justify-center text-yellow-400 shadow-lg transform -rotate-3">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-950 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="install" className="py-32 bg-purple-950 text-white relative overflow-hidden">
        {/* Dynamic Abstract Geometry */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] border-[40px] border-purple-800/30 rounded-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] border-[60px] border-yellow-500/10 rounded-full opacity-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM2YjIxYTEiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Deploy Orbit Sync <br/>
              <span className="text-yellow-400">Everywhere.</span>
            </h2>
            <p className="text-purple-200 text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Harness native-level performance without the app store friction. Our Progressive Web App (PWA) installs directly to your device core in seconds.
            </p>
            <ul className="space-y-4 mb-8 text-left max-w-md mx-auto lg:mx-0">
              {[
                'Universal compatibility (Windows, macOS, Linux, iOS, Android)',
                'Aggressive offline caching for uninterrupted severe-condition workflows',
                'Zero-byte storage bloat with instant background updates'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-yellow-400/20 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="text-purple-100 font-medium text-lg leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-5/12 bg-purple-900/40 backdrop-blur-2xl border border-purple-700/50 p-10 rounded-[2.5rem] w-full shadow-2xl relative">
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Download className="w-6 h-6 text-purple-950" />
            </div>
            
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Select Host Platform</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button 
                onClick={() => setActiveDeviceTab('desktop')}
                className={`flex flex-col items-center justify-center gap-4 p-8 rounded-2xl transition-all duration-300 border ${
                  activeDeviceTab === 'desktop' 
                    ? 'bg-purple-800 border-yellow-400 shadow-inner' 
                    : 'bg-purple-950/50 border-purple-800 hover:bg-purple-800/80'
                }`}
              >
                <Monitor className={`w-10 h-10 ${activeDeviceTab === 'desktop' ? 'text-yellow-400' : 'text-purple-400'}`} />
                <span className="font-bold text-lg">Desktop</span>
              </button>
              <button 
                onClick={() => setActiveDeviceTab('mobile')}
                className={`flex flex-col items-center justify-center gap-4 p-8 rounded-2xl transition-all duration-300 border ${
                  activeDeviceTab === 'mobile' 
                    ? 'bg-purple-800 border-yellow-400 shadow-inner' 
                    : 'bg-purple-950/50 border-purple-800 hover:bg-purple-800/80'
                }`}
              >
                <Smartphone className={`w-10 h-10 ${activeDeviceTab === 'mobile' ? 'text-yellow-400' : 'text-purple-400'}`} />
                <span className="font-bold text-lg">Mobile</span>
              </button>
            </div>
            
            <button className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-purple-950 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transform hover:-translate-y-1">
              <Download className="w-6 h-6" />
              Initialize Installation
            </button>
            <p className="text-center mt-4 text-purple-300 text-sm font-medium">Requires modern browser (Chrome, Safari, Edge)</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#0f0524] text-purple-200 py-20 border-t border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-400 p-2 rounded-xl">
                  <Zap className="w-6 h-6 text-purple-950 fill-current" />
                </div>
                <span className="text-2xl font-black text-white tracking-tight">Orbit Sync</span>
              </div>
              <p className="text-purple-300/80 font-medium leading-relaxed">
                Architecting the future of centralized operations. We build digital infrastructure that replaces manual latency with absolute precision.
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Platform</h4>
              <ul className="space-y-4 font-medium">
                <li><a href="#about" className="hover:text-yellow-400 transition-colors">Core Philosophy</a></li>
                <li><a href="#workflow" className="hover:text-yellow-400 transition-colors">Workflow Engine</a></li>
                <li><a href="#benefits" className="hover:text-yellow-400 transition-colors">Enterprise Benefits</a></li>
                <li><a href="#install" className="hover:text-yellow-400 transition-colors">PWA Deployment</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
              <ul className="space-y-4 font-medium">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Security Overview</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">System Status</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Headquarters</h4>
              <ul className="space-y-5 font-medium mb-6 text-purple-300/80">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-yellow-400" />
                  <span>Sector 7G, Innovation Nexus<br/>San Francisco, CA 94103</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 flex-shrink-0 text-yellow-400" />
                  <a href="mailto:admin@orbitsync.io" className="hover:text-white transition-colors">admin@orbitsync.io</a>
                </li>
              </ul>
              {/* Map Placeholder */}
              <div className="w-full h-32 bg-purple-900/20 rounded-2xl border border-purple-800/50 flex flex-col items-center justify-center text-sm text-purple-400/50 relative overflow-hidden group hover:border-yellow-400/30 transition-colors cursor-pointer">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0MCIvPjwvZz48L3N2Zz4=')] opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
                <MapPin className="w-6 h-6 mb-2 opacity-50 group-hover:text-yellow-400 group-hover:opacity-100 transition-all" />
                <span className="font-bold tracking-widest uppercase text-xs">View Map</span>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-purple-900/50 text-sm font-medium text-purple-400/60 flex flex-col md:flex-row items-center justify-between gap-6">
            <p>&copy; {new Date().getFullYear()} Orbit Sync Technologies. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}