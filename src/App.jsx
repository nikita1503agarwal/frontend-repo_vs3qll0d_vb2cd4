import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Database,
  Mail,
  Settings2,
  Boxes,
  Zap,
  Network,
  Workflow,
  ShieldCheck,
  LineChart,
  TerminalSquare,
  ArrowRight,
  CheckCircle2,
  Clock,
  Github,
  Linkedin,
  Cpu
} from 'lucide-react'
import Spline from '@splinetool/react-spline'

// Animation presets
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } },
})

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

// Glass card wrapper
function GlassCard({ children, className = '' }) {
  return (
    <div className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md ${className}`}>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
      {children}
    </div>
  )
}

// Floating Navbar
function Navbar() {
  return (
    <div className="sticky top-6 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400">
                <Network className="h-5 w-5 text-white" />
                <span className="absolute -inset-1 -z-10 rounded-xl bg-indigo-500/30 blur-md" />
              </div>
              <span className="text-slate-50 font-semibold tracking-tight">Merosync <span className="text-indigo-400">Solutions</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-slate-300">
              <a href="#solutions" className="hover:text-slate-100 transition-colors">Solutions</a>
              <a href="#methodology" className="hover:text-slate-100 transition-colors">Methodology</a>
              <a href="#cases" className="hover:text-slate-100 transition-colors">Case Studies</a>
            </div>
            <div className="flex items-center">
              <a
                href="#cta"
                className="relative inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-indigo-200 transition hover:bg-indigo-500/20"
              >
                <Zap className="h-4 w-4" />
                <span className="font-medium">Audit Your Workflow</span>
                <span className="absolute inset-0 -z-10 rounded-xl bg-indigo-500/30 blur-md" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Workflow visualizer with moving packet
function WorkflowVisualizer() {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-3 items-center gap-4">
        {/* Input */}
        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-cyan-400" />
            <div>
              <p className="text-slate-200 text-sm font-medium">Input</p>
              <p className="text-slate-400 text-xs">CRM / Forms / Webhooks</p>
            </div>
          </div>
        </GlassCard>

        {/* Brain */}
        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <Brain className="h-5 w-5 text-indigo-400" />
            <div>
              <p className="text-slate-200 text-sm font-medium">AI Layer</p>
              <p className="text-slate-400 text-xs">LLM Integration / Reasoning</p>
            </div>
          </div>
        </GlassCard>

        {/* Output */}
        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-teal-400" />
            <div>
              <p className="text-slate-200 text-sm font-medium">Output</p>
              <p className="text-slate-400 text-xs">Email / Slack / Databases</p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Path */}
      <div className="relative mt-6 hidden md:block">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-teal-400/0" />
        <div className="absolute left-1/3 right-1/3 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-indigo-400/0 via-indigo-400/50 to-indigo-400/0" />
        {/* moving packet */}
        <motion.div
          className="absolute top-1/2 -mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 shadow-[0_0_12px_3px_rgba(45,212,191,0.6)]"
          initial={{ x: '0%' }}
          animate={{ x: 'calc(100% - 0.5rem)' }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 3.2, ease: 'easeInOut' }}
        />
      </div>

      {/* Mobile path */}
      <div className="relative mt-6 md:hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/0 via-cyan-400/40 to-teal-400/0" />
        <motion.div
          className="absolute left-1/2 -ml-1 h-2 w-2 rounded-full bg-gradient-to-b from-cyan-400 to-teal-400 shadow-[0_0_12px_3px_rgba(45,212,191,0.6)]"
          initial={{ y: 0 }}
          animate={{ y: 'calc(100% - 0.5rem)' }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 3.2, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0C15]/70 via-[#0B0C15]/70 to-[#0B0C15]/90" />

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 md:pt-36 md:pb-28">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div variants={fadeIn(0)} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono">System Status: Operational</span>
          </motion.div>
          <motion.h1 variants={fadeIn(0.1)} className="mt-6 text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
            We Connect Your Tools. <span className="bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">AI Does the Rest.</span>
          </motion.h1>
          <motion.p variants={fadeIn(0.2)} className="mt-4 max-w-2xl text-slate-300">
            Merosync Solutions builds custom AI‑enhanced automations that transform manual chaos into autonomous revenue. Lower latency. Higher throughput. Future‑proof architecture.
          </motion.p>
          <motion.div variants={fadeIn(0.3)} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-slate-900 font-semibold shadow-[0_0_24px_rgba(99,102,241,0.4)]">
              Start Automation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#solutions" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-slate-200 backdrop-blur-md">
              View Blueprints
            </a>
          </motion.div>
        </motion.div>

        <div className="mt-14">
          <WorkflowVisualizer />
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <GlassCard className="p-6 hover:translate-y-[-2px] transition-transform">
      <div className="flex items-start gap-4">
        <div className="mt-1 grid h-10 w-10 place-items-center rounded-lg bg-white/10">
          <Icon className="h-5 w-5 text-indigo-300" />
        </div>
        <div>
          <h3 className="text-slate-50 font-semibold">{title}</h3>
          <p className="mt-1 text-slate-400 text-sm">{desc}</p>
        </div>
      </div>
    </GlassCard>
  )
}

function FeaturesGrid() {
  return (
    <section id="solutions" className="relative mx-auto max-w-7xl px-4 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(500px_circle_at_80%_30%,rgba(20,184,166,0.12),transparent_60%)]" />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 variants={fadeIn(0)} className="text-3xl md:text-4xl font-bold text-slate-50 tracking-tight">
          Problems Eliminated. Systems Orchestrated.
        </motion.h2>
        <motion.p variants={fadeIn(0.1)} className="mt-3 max-w-2xl text-slate-400">
          We design unified ecosystems that move data with precision and apply intelligence where it drives outcomes.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature icon={Boxes} title="Unified Ecosystems" desc="Break down data silos. Streamline handoffs across CRM, billing, support, and analytics with reliable webhooks and APIs." />
          <Feature icon={TerminalSquare} title="Self‑Correcting Workflows" desc="Automations that monitor themselves. Retries, fallbacks, and observability baked in to minimize manual intervention." />
          <Feature icon={LineChart} title="Predictive Insights" desc="Surface leading indicators and next‑best‑actions with compact ML models and LLM‑assisted reasoning." />
        </div>
      </motion.div>
    </section>
  )
}

function Services() {
  const items = [
    { icon: Settings2, title: 'API Integration', text: 'Custom webhooks, REST/GraphQL, and legacy system bridging at scale.' },
    { icon: Brain, title: 'AI Agents', text: 'Retrievers, chat interfaces, and automated decision systems aligned to KPIs.' },
    { icon: Workflow, title: 'Workflow Orchestration', text: 'Architecture with n8n, Zapier, and Make — from simple flows to multi‑branch DAGs.' },
    { icon: Database, title: 'Data Warehousing', text: 'Centralized stores for analytics and AI training with clean contracts.' },
  ]
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-8">
      <motion.h2 variants={fadeIn(0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-slate-50 tracking-tight">
        The Stack
      </motion.h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <motion.div key={i} variants={fadeIn(0.05 * i)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-indigo-500/30 to-teal-500/30">
                  <it.icon className="h-5 w-5 text-indigo-300" />
                </div>
                <h3 className="text-slate-50 font-semibold">{it.title}</h3>
              </div>
              <p className="mt-3 text-slate-400 text-sm">{it.text}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function HowWeWork() {
  const steps = [
    { icon: SearchIcon, title: 'Audit', text: 'Discovery. We map systems, events, and constraints.' },
    { icon: Cpu, title: 'Architect', text: 'Blueprint. Define contracts, schemas, and flow topology.' },
    { icon: Settings2, title: 'Integrate', text: 'Build. Implement connectors, jobs, and guardrails.' },
    { icon: Brain, title: 'Enhance', text: 'AI Layer. Retrieval, scoring, and assistance over your data.' },
  ]
  return (
    <section id="methodology" className="relative mx-auto max-w-7xl px-4 py-20">
      <motion.h2 variants={fadeIn(0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-slate-50 tracking-tight">
        How We Work
      </motion.h2>
      <p className="mt-3 max-w-2xl text-slate-400">
        A circuit‑style timeline showing the path from idea to intelligent automation.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div key={i} variants={fadeIn(0.05 * i)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                  <s.icon className="h-5 w-5 text-teal-300" />
                </div>
                <h3 className="text-slate-50 font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-slate-400 text-sm">{s.text}</p>
              {/* circuit line */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-indigo-400/0 via-indigo-400/50 to-indigo-400/0" />
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                <Clock className="h-4 w-4" /> Typical duration: 1–2 weeks
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section id="cta" className="relative mx-auto max-w-7xl px-4 py-20">
      <GlassCard className="p-8 md:p-12 overflow-hidden">
        <div className="pointer-events-none absolute -inset-32 bg-[radial-gradient(400px_circle_at_20%_30%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(500px_circle_at_80%_70%,rgba(20,184,166,0.25),transparent_60%)]" />
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-50">Audit Your Workflow</h3>
            <p className="mt-2 text-slate-300">
              Get a blueprint that reduces latency, increases throughput, and unlocks intelligent automation across your stack.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a href="#" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-slate-900 font-semibold shadow-[0_0_24px_rgba(99,102,241,0.4)]">
              Book a 30‑min Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </GlassCard>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0B0C15]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Network className="h-5 w-5 text-indigo-400" />
            <span className="text-slate-200 font-medium">Merosync Solutions</span>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
            <a href="#" className="flex items-center gap-2 hover:text-slate-50 transition-colors"><Github className="h-5 w-5" /> GitHub</a>
            <a href="#" className="flex items-center gap-2 hover:text-slate-50 transition-colors"><Linkedin className="h-5 w-5" /> LinkedIn</a>
          </div>
        </div>
        <div className="mt-6 text-center md:text-left text-slate-500 text-sm">
          © {new Date().getFullYear()} Merosync Solutions. The Architecture of Efficiency.
        </div>
      </div>
    </footer>
  )
}

// Local icon alias for HowWeWork first step
function SearchIcon(props){return <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}><path fill="currentColor" d="M21 21l-4.3-4.3m1.8-4.7a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"/></svg>}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0C15] text-slate-300">
      {/* subtle background glows */}
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <FeaturesGrid />
      <Services />
      <HowWeWork />
      <CTASection />
      <Footer />
    </div>
  )
}
