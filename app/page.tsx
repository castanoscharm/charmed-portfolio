"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Script from "next/script";
import WhyWorkWithMe from "./WhyWorkWithMe";
import Testimonials from "./Testimonials";

const WORDS = ["HighLevel Certified Admin", "CRM Builder", "Automation Specialist"];

function useTypingAnimation() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = WORDS[wordIndex];
    if (!deleting && charIndex < current.length) { const t = setTimeout(() => setCharIndex(c => c + 1), 60); return () => clearTimeout(t); }
    if (!deleting && charIndex === current.length) { const t = setTimeout(() => setDeleting(true), 2000); return () => clearTimeout(t); }
    if (deleting && charIndex > 0) { const t = setTimeout(() => setCharIndex(c => c - 1), 35); return () => clearTimeout(t); }
    if (deleting && charIndex === 0) { setDeleting(false); setWordIndex(i => (i + 1) % WORDS.length); }
  }, [charIndex, deleting, wordIndex]);
  useEffect(() => { setDisplayed(WORDS[wordIndex].slice(0, charIndex)); }, [charIndex, wordIndex]);
  return displayed;
}

const SKILL_SEARCH_PHRASES = [
  "CRM setup in GoHighLevel...",
  "Automate my client onboarding...",
  "Build a lead follow-up sequence...",
  "Connect Zapier with my CRM...",
  "Set up an AI voice agent...",
  "Automate my invoice and contracts...",
  "Build an n8n workflow...",
  "Fix my pipeline in GoHighLevel...",
  "Create an automated booking system...",
  "Integrate my tools without code...",
];

function useSkillSearchTyping() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = SKILL_SEARCH_PHRASES[wordIndex];
    if (!deleting && charIndex < current.length) { const t = setTimeout(() => setCharIndex(c => c + 1), 25); return () => clearTimeout(t); }
    if (!deleting && charIndex === current.length) { const t = setTimeout(() => setDeleting(true), 1000); return () => clearTimeout(t); }
    if (deleting && charIndex > 0) { const t = setTimeout(() => setCharIndex(c => c - 1), 15); return () => clearTimeout(t); }
    if (deleting && charIndex === 0) { const t = setTimeout(() => { setDeleting(false); setWordIndex(i => (i + 1) % SKILL_SEARCH_PHRASES.length); }, 300); return () => clearTimeout(t); }
  }, [charIndex, deleting, wordIndex]);
  useEffect(() => { setDisplayed(SKILL_SEARCH_PHRASES[wordIndex].slice(0, charIndex)); }, [charIndex, wordIndex]);
  return displayed;
}

const ICON = (n: string) => `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${n}.svg`;

const SERVICES = [
  { icon: "⚡", title: "AUTOMATE", stat: "20+ hrs saved/week", desc: "The tasks eating your time every day? Gone. I build workflows that handle the repetitive so you never have to touch them again." },
  { icon: "🎯", title: "CRM & MARKETING", stat: "3x faster follow-ups", desc: "No more leads slipping through the cracks. Your pipeline, your forms, your follow-ups — all built, all connected, all running automatically." },
  { icon: "🤖", title: "AI & VOICE AGENTS", stat: "10x your output", desc: "Let AI handle the responses, the follow-throughs, and the grunt work — while you show up only where it counts." },
  { icon: "🔗", title: "INTEGRATIONS", stat: "Save $500+/month", desc: "Your tools should talk to each other. I connect the gaps so nothing falls through and you stop paying for things that don't work together." },
];

const SKILLSET = [
  { num: "01", icon: "🏗️", title: "CRM & Operations", tags: ["Done-For-You CRM Build","Pipelines","Funnels","Forms","Surveys","Calendar","Contact Management","SOPs","System Audits","Workflow Mapping"], desc: "Your entire CRM built from scratch — pipelines, forms, workflows, calendars, and contact management all set up so your business runs without you chasing anything." },
  { num: "02", icon: "⚡", title: "Workflow Automation", tags: ["End-to-End Automation Builds","Multi-Step Workflows","Trigger-Based Sequences","Zapier","n8n","Make"], desc: "End-to-end automations that eliminate the manual work. Built in Zapier, n8n, or Make — triggered, connected, and running 24/7." },
  { num: "03", icon: "🧠", title: "AI-Powered Workflows", tags: ["GPT Integrations","Intelligent Routing","AI + Automation Combos","OpenAI","Anthropic","Vapi Voice AI","Google Gemini"], desc: "AI integrated directly into your systems — GPT, Anthropic, Gemini, and Voice AI working together to respond, route, and convert automatically." },
  { num: "04", icon: "🎯", title: "Lead Management", tags: ["GHL Pipelines","Follow-up Sequences","Appointment Booking","SMS & Email Automation","Lead Nurturing","Sales Pipeline Automation"], desc: "No lead left behind. From first touch to booked call — follow-up sequences, appointment booking, and SMS & email automations all handled." },
  { num: "05", icon: "🔄", title: "Client Journey Systems", tags: ["Onboarding Workflows","Automated Welcome Sequences","Contract & Payment Follow-ups","Offboarding","Done-For-You Client Systems"], desc: "From onboarding to offboarding — your entire client experience automated. Welcome sequences, contracts, payments, and check-ins running on autopilot." },
  { num: "06", icon: "🔗", title: "Integrations & Data", tags: ["Google Workspace","Airtable","Supabase","Multi-Tool Connections","Process Documentation","Business Operations"], desc: "Your tools connected and talking to each other. No more copy-pasting, no more gaps — just clean data flowing where it needs to go." },
];

const MARQUEE_TOOLS = [
  { label: "GoHighLevel",      logo: "/ghl-logo.png",      filter: "" },
  { label: "n8n",              logo: "/n8n-color.png",     filter: "" },
  { label: "Zapier",           logo: ICON("zapier"),       filter: "invert(45%) sepia(100%) saturate(2000%) hue-rotate(5deg) brightness(100%)" },
  { label: "Make",             logo: ICON("make"),         filter: "invert(20%) sepia(100%) saturate(3000%) hue-rotate(250deg) brightness(90%)" },
  { label: "OpenAI",           logo: ICON("openai"),       filter: "invert(100%) brightness(200%)" },
  { label: "Vapi",             logo: null,                 emoji: "🎤", filter: "" },
  { label: "Google Gemini",    logo: ICON("googlegemini"), filter: "invert(45%) sepia(100%) saturate(1500%) hue-rotate(195deg) brightness(95%)" },
  { label: "Airtable",         logo: ICON("airtable"),     filter: "invert(55%) sepia(100%) saturate(1200%) hue-rotate(175deg) brightness(95%)" },
  { label: "Google Workspace", logo: ICON("google"),       filter: "invert(45%) sepia(100%) saturate(1500%) hue-rotate(195deg) brightness(90%)" },
  { label: "Supabase",         logo: ICON("supabase"),     filter: "invert(65%) sepia(80%) saturate(800%) hue-rotate(110deg) brightness(95%)" },
  { label: "Asana",            logo: ICON("asana"),        filter: "invert(55%) sepia(80%) saturate(1000%) hue-rotate(315deg) brightness(95%)" },
  { label: "Notion",           logo: ICON("notion"),       filter: "invert(100%) brightness(200%)" },
  { label: "Trello",           logo: ICON("trello"),       filter: "invert(25%) sepia(100%) saturate(2000%) hue-rotate(210deg) brightness(85%)" },
  { label: "Docusign",         logo: ICON("docusign"),     filter: "invert(30%) sepia(100%) saturate(2000%) hue-rotate(200deg) brightness(85%)" },
  { label: "Stripe",           logo: ICON("stripe"),       filter: "invert(30%) sepia(100%) saturate(2000%) hue-rotate(210deg) brightness(80%)" },
  { label: "Slack",            logo: ICON("slack"),        filter: "invert(30%) sepia(100%) saturate(800%) hue-rotate(250deg) brightness(80%)" },
];

const GHL_PROJECTS = [
  { title: "New Lead", screenshot: "/001. New Lead.png", tags: ["GoHighLevel","Pipelines","Automations","Docs & Contracts"], tagColors: ["#330a0a","#5a1a1a","#7a2a2a","#9a3a3a"], description: "Entry workflow: new lead submits survey → budget qualification check → if qualified, booking reminder sequence begins automatically.", fullDescription: "A complete end-to-end sales automation system. 11 interconnected workflows: 001 New Lead (survey → budget check → booking reminders), 002 Call Booked, 002b Pre-Call Reminders, 003 Call Completed, 003b No-Show Recovery, 004 Proposal Sent, 004b/c/d Proposal Tracking, 005 Closed Won, 006 Closed Lost. Budget disqualification below $1,000 handled automatically.", businessValue: "Without automation, leads fall through the cracks at every stage. This system ensures every lead is followed up with, every proposal tracked, and no opportunity lost.", whyMatters: "This is the core revenue engine for any service business. A fully automated pipeline means the owner spends time closing deals, not chasing follow-ups.", metrics: ["100% automated follow-up","6-stage pipeline"] },
  { title: "Call Booked", screenshot: "/002. Call Booked.png", tags: ["GoHighLevel","Appointment Status","Email","Task Creation"], tagColors: ["#330a0a","#1a5a3a","#1a4a7a","#5a2a7a"], description: "Fires on appointment booked: adds tag, updates opportunity, sends booking confirmation, creates prep task.", fullDescription: "When an appointment status changes to Confirmed, this workflow adds the 'booked-call' tag, updates the opportunity stage, sends a professional booking confirmation email with the meeting link, removes the contact from the New Lead reminder sequence, and creates a prep task for the team.", businessValue: "A clean confirmation email sets professional expectations and stops unnecessary nudges being sent to leads who already booked.", whyMatters: "First impressions start at the booking stage. A professional, immediate confirmation email builds trust before the call even happens.", metrics: ["Instant confirmation sent","Lead workflow stopped"] },
  { title: "Pre-Call Reminders", screenshot: "/002b. Pre-Call Reminders.png", tags: ["GoHighLevel","Appointment Status","Email Automation"], tagColors: ["#330a0a","#1a5a3a","#7a2a2a"], description: "Sends a 24-hour and 1-hour reminder before every booked discovery call — automatically.", fullDescription: "Fires the moment an appointment is confirmed. Waits until 24 hours before the call and sends the 24-hour reminder. Waits again until 1 hour before and sends the 1-hour reminder. Both emails include the meeting link and warm preparation instructions.", businessValue: "No-shows cost service businesses $200–$500 per missed appointment. Reminder sequences reduce no-show rates by 40–50% with zero manual effort.", whyMatters: "Clients forget. A timely reminder is the difference between a show and a no-show — and this handles every booking automatically.", metrics: ["Reduced no-shows 50%+","Zero manual reminders"] },
  { title: "Call Completed", screenshot: "/003. Call Completed.png", tags: ["GoHighLevel","Appointment Status","Task Creation","Email"], tagColors: ["#330a0a","#1a5a3a","#2a2a7a","#5a2a7a"], description: "Fires after a completed call: updates opportunity, sends thank you email, creates Prepare Proposal task.", fullDescription: "When an appointment is marked Showed/Completed, this workflow updates the opportunity stage, sends a personalized thank you email recapping the call, creates a 'Prepare Proposal' task with a due date, and removes the contact from the active call workflow.", businessValue: "The 24 hours after a discovery call are the most critical window. A fast, professional follow-up while the conversation is fresh dramatically increases close rates.", whyMatters: "A same-day thank you email sets you apart from competitors who take 2–3 days to follow up.", metrics: ["Instant post-call action","Zero dropped follow-ups"] },
  { title: "No Show Recovery", screenshot: "/003b. No Show Recovery.png", tags: ["GoHighLevel","Appointment Status","Conditional Logic","Tags"], tagColors: ["#330a0a","#1a5a3a","#5a3a1a","#4a1a5a"], description: "Detects missed appointments, sends recovery emails, checks if rebooked — moves to Closed Lost after final attempt.", fullDescription: "When marked No Show, this workflow updates the opportunity, sends No Show Email 1, waits 1 day and checks if rebooked. If not — sends No Show Email 2, waits 2 more days, checks again. If still not rebooked, moves to Closed Lost.", businessValue: "No-shows are one of the biggest revenue leaks for service businesses. This workflow recovers 40%+ of no-shows automatically.", whyMatters: "A no-show doesn't mean a lost client — a structured recovery sequence re-engages prospects without any manual effort.", metrics: ["40%+ no-shows recovered","Zero manual follow-up"] },
  { title: "Proposal Sent", screenshot: "/004. Proposal Sent.png", tags: ["GoHighLevel","Docs & Contracts","Conditional Logic","Email"], tagColors: ["#330a0a","#1a4a7a","#5a2a7a","#2a5a2a"], description: "Tracks viewed vs. not-viewed proposals, sends smart follow-ups, auto-routes to Closed Won.", fullDescription: "Once a proposal is sent, waits 3 days then checks if viewed. If viewed — sends a personalized follow-up. If not — sends a softer nudge. Both branches wait 3 more days and check for signature before routing to the next stage.", businessValue: "Most businesses lose deals because they forgot to follow up. This ensures every proposal gets 3 strategic, intelligently-timed follow-ups.", whyMatters: "Proposals followed up with 3 times have a 60%+ higher close rate than those sent and forgotten.", metrics: ["Zero proposals forgotten","Smart follow-up timing"] },
  { title: "Proposal Tracking - Viewed", screenshot: "/004b. Proposal Tracking - Viewed.png", tags: ["GoHighLevel","Documents & Contracts","Email","Conditional Logic"], tagColors: ["#330a0a","#1a4a7a","#2a5a2a","#5a2a7a"], description: "Triggers when a proposal is opened and sends a timely follow-up while the prospect is actively reviewing.", fullDescription: "When the proposal-viewed tag is added, this branch fires immediately and sends a warm email acknowledging that the prospect is reviewing the proposal — capitalizing on the exact moment they're most engaged.", businessValue: "Reaching out the moment a prospect opens your proposal is one of the highest-converting moves in sales.", whyMatters: "Timing is everything. A follow-up sent while someone is actively reviewing converts dramatically better than one sent days later.", metrics: ["Strike while iron is hot","Highest-intent follow-up"] },
  { title: "Proposal Tracking - Signed", screenshot: "/004c. Proposal Tracking - Signed.png", tags: ["GoHighLevel","Documents & Contracts","Tag Management"], tagColors: ["#330a0a","#1a4a7a","#5a2a7a"], description: "Triggers on Signed/Accepted proposal: removes old tags, adds closed-won tag, chains into Workflow 005.", fullDescription: "Triggers when the Client Proposal reaches Signed/Accepted status. Removes the old proposal tag, adds the 'closed-won' tag, and that tag triggers Workflow 005 automatically — signed contract → tag → welcome email + onboarding task.", businessValue: "The moment a client signs should feel like the start of something great, not the start of manual scrambling.", whyMatters: "Clients who receive instant onboarding feel confident they made the right choice.", metrics: ["Instant pipeline updates","Zero manual stage moves"] },
  { title: "Proposal Tracking - Declined", screenshot: "/004d. Proposal Tracking - Declined.png", tags: ["GoHighLevel","Documents & Contracts","Email","Re-engagement"], tagColors: ["#330a0a","#1a4a7a","#5a2a2a","#7a4a1a"], description: "Detects a declined proposal, sends a graceful email, waits, then updates the opportunity stage automatically.", fullDescription: "When the Client Proposal reaches Declined status, removes old tags, adds 'proposal-declined,' sends a warm non-pushy email, waits a set period, then automatically updates the opportunity stage — keeping the pipeline clean.", businessValue: "A declined proposal is not a dead end. A professional response significantly increases the chance of a future engagement.", whyMatters: "Many declined proposals are due to timing, not disinterest. A graceful response keeps your name top of mind.", metrics: ["Automated re-engagement","Clean pipeline always"] },
  { title: "Closed Won", screenshot: "/005. Closed Won.png", tags: ["GoHighLevel","Pipeline Stage","Email","Task Creation"], tagColors: ["#330a0a","#2a5a2a","#1a4a7a","#5a2a7a"], description: "Fires on Closed Won: removes old tags, sends welcome email, creates onboarding task, fires internal notification.", fullDescription: "Triggered by the 'closed-won' tag. Removes previous proposal tags, adds a 'client' tag, sends a warm welcome email, creates an internal 'Send onboarding form' task, and fires an internal notification. Everything happens in under 10 seconds.", businessValue: "New client onboarding is the most critical phase. A fast, professional sequence shows the client they made the right decision.", whyMatters: "Clients who have a positive onboarding experience are 3× more likely to refer others.", metrics: ["Instant client onboarding","100% task creation rate"] },
  { title: "Closed Lost", screenshot: "/006. Closed Lost.png", tags: ["GoHighLevel","Pipeline Stage","Email","Internal Alerts"], tagColors: ["#330a0a","#7a1a1a","#5a2a2a","#9a3a3a"], description: "Triggers on stage Lost: cleans tags, sends a graceful closing email, fires internal team notification.", fullDescription: "When a pipeline stage changes to 'Lost,' removes old tags, adds 'closed-lost,' sends a graceful professional email leaving the door open, and fires an internal team notification.", businessValue: "How you handle a 'no' matters as much as a 'yes.' A professional closing email turns a lost deal into a potential future referral.", whyMatters: "80% of lost deals come back within 12–18 months if the relationship is maintained.", metrics: ["Clean CRM data always","Team always informed"] },
];

const ZAPIER_PROJECTS = [
  { title: "Proposal Trigger", screenshot: "/Zap 0 Proposal Trigger.png", tags: ["Zapier","GoHighLevel","Docusign","Webhooks"], tagColors: ["#FF6900","#330a0a","#FFB500","#555"], description: "Catches a GHL webhook when a proposal is ready, formats contact data, and sends a Docusign envelope automatically.", fullDescription: "When a contact reaches the Proposal Sent stage in GHL, a webhook fires to Zapier. Zapier filters the trigger, formats the contact data, sends a Docusign envelope pre-filled with the client's details, then updates the GHL contact to confirm the document was sent.", businessValue: "Sending a proposal manually takes 10–15 minutes per client. This zap does it in seconds with zero manual input.", whyMatters: "Speed matters in sales. The faster a proposal lands after the call, the higher the chance they sign.", metrics: ["Proposal sent in seconds","Zero manual data entry"] },
  { title: "AI Content Repurposing", screenshot: "/AI Content Repurposing Zapier.png", tags: ["Zapier","OpenAI","Google Drive","LinkedIn","Facebook"], tagColors: ["#FF6900","#10a37f","#4285F4","#0A66C2","#1877F2"], description: "Detects new files in Google Drive, transcribes with AI, then branches to LinkedIn and Facebook — generating tailored posts automatically.", fullDescription: "Monitors a Google Drive folder for new audio or video files. Splits into two paths: LinkedIn (long-form professional content) and Facebook (shorter post + AI-generated image via DALL-E). Each published post is logged to Google Sheets.", businessValue: "Content creators spend 10–15 hours per week manually repurposing content. One upload becomes multiple polished, platform-specific posts.", whyMatters: "Consistent multi-platform presence is no longer optional. This system publishes for you so you never fall behind.", metrics: ["15hrs/week saved","3× content output"] },
  { title: "Agreement Signed", screenshot: "/Zap 1 - Agreement Signed.png", tags: ["Zapier","Docusign","Stripe","GoHighLevel","Google Drive"], tagColors: ["#FF6900","#FFB500","#635BFF","#330a0a","#4285F4"], description: "Fires when Docusign envelope is signed: creates Stripe invoice, updates GHL contact, enrolls client in onboarding workflow.", fullDescription: "Triggers the moment a Docusign envelope status changes to Signed. Finds or creates the Stripe customer, generates a Stripe invoice, updates the GHL contact record, and enrolls them in the GHL onboarding workflow — all in under 60 seconds.", businessValue: "Without this zap, every signed contract requires manual invoice creation, CRM updates, and workflow enrollment — easily 20+ minutes of admin work per client.", whyMatters: "The signing moment is the highest-energy point in the client relationship. An instant, automated response keeps that momentum going.", metrics: ["Invoice in seconds","Zero manual admin"] },
  { title: "Invoice Paid", screenshot: "/Zap 2 - Invoice Paid.png", tags: ["Zapier","Stripe","GoHighLevel","Recurring Billing"], tagColors: ["#FF6900","#635BFF","#330a0a","#22c55e"], description: "Fires when Stripe invoice is paid: creates a recurring subscription, updates GHL contact, confirms payment internally.", fullDescription: "Triggers when a Stripe invoice is marked as paid. Creates a recurring Stripe subscription for ongoing monthly billing, updates the GHL contact with the subscription details, tags the contact as 'payment-received,' and sends an internal notification confirming payment.", businessValue: "Manual subscription setup after payment is one of the most error-prone steps in client onboarding. This zap eliminates that risk entirely.", whyMatters: "Recurring revenue is the backbone of a sustainable service business. Automating the subscription setup ensures no client ever slips through without being billed correctly.", metrics: ["Subscription auto-created","Zero billing errors"] },
  { title: "Onboarding Form → Google Drive", screenshot: "/Zap 0.5 Onboarding Form to Drive.png", tags: ["Zapier","GoHighLevel","Google Drive","Webhooks"], tagColors: ["#FF6900","#330a0a","#4285F4","#555"], description: "Catches GHL survey submission via webhook, creates nested Google Drive folder structure for the new client.", fullDescription: "When a new client submits the GHL onboarding survey, a webhook fires to Zapier. Zapier formats the client name, creates a nested Google Drive folder structure with subfolders, sets sharing permissions, and updates the GHL contact with the Drive folder link.", businessValue: "Service businesses waste 15–20 minutes per new client manually creating folders. This workflow does it in under 30 seconds automatically.", whyMatters: "Organized client file management directly impacts project quality. When everything has a place from day one, nothing gets lost.", metrics: ["Client folder in seconds","Zero manual setup"] },
];

const N8N_PROJECTS = [
  { title: "Real Estate AI Lead Qualifier", screenshot: "/Real Estate AI Lead Agent n8n.png", tags: ["n8n","OpenAI","GoHighLevel","Airtable","Gmail"], tagColors: ["#ea4b35","#10a37f","#330a0a","#18bfff","#EA4335"], description: "AI agent triggered by webhook: logs lead, writes personalized GPT outreach, qualifies over email, scores leads Hot/Warm/Cold, routes to GHL pipeline.", fullDescription: "Triggered by a webhook when a new lead is submitted. Logs to Airtable, uses OpenAI GPT to write personalized outreach. Waits for a reply, checks for opt-out. If not opted out, OpenAI runs qualification, creates opportunity in GHL, sends follow-up questions. GPT scores the lead as Hot/Warm/Cold and routes accordingly.", businessValue: "This AI agent responds within minutes, qualifies leads 24/7, and routes sales-ready leads to the right pipeline — impossible to do manually at scale.", whyMatters: "Responding within 5 minutes vs. 30 minutes increases conversion by 21×. This system responds instantly, every time.", metrics: ["100% lead coverage","AI scoring in <10 seconds"] },
];

type Project = typeof GHL_PROJECTS[0];

const PROJECT_GROUPS = [
  { id: "zapier", label: "Zapier Automations",      icon: "⚡", projects: ZAPIER_PROJECTS },
  { id: "ghl",    label: "GoHighLevel Automations", icon: "🎯", projects: GHL_PROJECTS },
  { id: "n8n",    label: "n8n Automations",         icon: "🤖", projects: N8N_PROJECTS },
];

const STEPS = [
  { icon: "🔍", title: "Discovery Call",   desc: "We map your current workflows, identify bottlenecks, and find your highest-impact automation opportunities — together." },
  { icon: "🗺️", title: "Strategy Design",  desc: "I architect your custom automation blueprint, built around how your business actually works. No templates, no cookie-cutter solutions." },
  { icon: "⚙️", title: "Build & Test",     desc: "I build and rigorously test every workflow before it touches your real business. You see it working before we ever go live." },
  { icon: "🚀", title: "Launch & Train",   desc: "Your automation goes live with monitoring in place. I walk you through everything so you're fully in control from day one." },
  { icon: "🛡️", title: "Ongoing Support",  desc: "I monitor, optimize, and evolve your automations as your business grows. Your system gets smarter over time." },
];

function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={`proj-card-wrap${flipped ? " is-flipped" : ""}`}>
      <div className="proj-card proj-front" onClick={() => setFlipped(true)} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && setFlipped(true)}>
        <div className="proj-thumb">
          <img src={p.screenshot} alt={p.title} loading="eager" />
          <div className="proj-thumb-overlay" />
          <div className="proj-thumb-click">Click to flip &rarr;</div>
        </div>
        <div className="proj-body">
          <div className="proj-card-title">{p.title}</div>
          <div className="proj-tags">
            {p.tags.map((tag, ti) => (
              <span key={tag} className="proj-tag" style={{ color: p.tagColors[ti], borderColor: `${p.tagColors[ti]}33`, background: `${p.tagColors[ti]}11` }}>{tag}</span>
            ))}
          </div>
          <p className="proj-desc">{p.description}</p>
          <div className="proj-metrics">
            <div className="proj-metric"><span>⏱️</span>{p.metrics[0]}</div>
            <div className="proj-metric"><span>📈</span>{p.metrics[1]}</div>
          </div>
        </div>
      </div>
      <div className="proj-card proj-back" onClick={() => setFlipped(false)} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && setFlipped(false)}>
        <div className="proj-back-content">
          <div className="proj-card-title" style={{fontSize:"16px",marginBottom:"14px"}}>{p.title}</div>
          <p className="proj-back-desc">{p.fullDescription}</p>
          <div className="proj-tags" style={{marginTop:"14px"}}>
            {p.tags.map((tag, ti) => (
              <span key={tag} className="proj-tag" style={{ color: p.tagColors[ti], borderColor: `${p.tagColors[ti]}33`, background: `${p.tagColors[ti]}11` }}>{tag}</span>
            ))}
          </div>
          <div className="proj-back-btns">
            <button className="proj-back-btn-view" onClick={(e) => { e.stopPropagation(); onOpen(p); }}>View Workflow</button>
            <button className="proj-back-btn-back" onClick={(e) => { e.stopPropagation(); setFlipped(false); }}>&larr; Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const MARQUEE_SPEED = 80; // pixels per second
function MarqueeRow({ direction, projects, onOpen, keyPrefix }: { direction: "left" | "right"; projects: Project[]; onOpen: (p: Project) => void; keyPrefix: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dur, setDur] = useState("40s");
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const halfWidth = el.scrollWidth / 2;
    setDur(`${halfWidth / MARQUEE_SPEED}s`);
  }, []);
  const doubled = [...projects, ...projects];
  return (
    <div className="marquee-row">
      <div
        ref={trackRef}
        className={`marquee-track marquee-${direction}`}
        style={{ "--marquee-dur": dur } as React.CSSProperties}
      >
        {doubled.map((p, i) => (
          <ProjectCard key={`${keyPrefix}-${i}`} p={p} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

function HowItWorksSteps({ steps }: { steps: typeof STEPS }) {
  const [activeStep, setActiveStep] = useState(-1);
  const [dotPos, setDotPos] = useState(0);
  const totalSteps = steps.length;
  const cycleDuration = 8000; // 8s full cycle
  const stepPause = 600; // pause at each step

  useEffect(() => {
    const stops = [0, 25, 50, 75, 100];
    let animId: number;
    let startTime: number | null = null;
    const travelTime = cycleDuration - (totalSteps * stepPause);
    const segmentTravel = travelTime / (totalSteps - 1);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) % (cycleDuration + 1500); // +1500 for end pause before restart

      if (elapsed > cycleDuration) {
        // End pause — all lit, then reset
        setDotPos(100);
        setActiveStep(totalSteps - 1);
        animId = requestAnimationFrame(animate);
        if (elapsed > cycleDuration + 1200) startTime = timestamp;
        return;
      }

      // Calculate which segment we're in
      let accTime = 0;
      let currentStop = 0;
      let pos = 0;

      for (let i = 0; i < totalSteps - 1; i++) {
        const pauseEnd = accTime + stepPause;
        const travelEnd = pauseEnd + segmentTravel;

        if (elapsed <= pauseEnd) {
          // Pausing at stop i
          pos = stops[i];
          currentStop = i;
          break;
        } else if (elapsed <= travelEnd) {
          // Traveling from stop i to i+1
          const travelProgress = (elapsed - pauseEnd) / segmentTravel;
          pos = stops[i] + (stops[i + 1] - stops[i]) * travelProgress;
          currentStop = i;
          break;
        }
        accTime = travelEnd;
        if (i === totalSteps - 2) {
          pos = stops[totalSteps - 1];
          currentStop = totalSteps - 1;
        }
      }

      // Last step pause
      const lastPauseStart = (totalSteps - 1) * (stepPause + segmentTravel) - segmentTravel;
      if (elapsed > lastPauseStart) {
        currentStop = totalSteps - 1;
        pos = 100;
      }

      setDotPos(pos);
      setActiveStep(currentStop);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [totalSteps]);

  // Determine which steps have been passed
  const getStepState = (i: number) => {
    const stopPositions = [0, 25, 50, 75, 100];
    if (dotPos >= stopPositions[i] - 1) {
      if (i === activeStep && dotPos >= stopPositions[i] - 1 && dotPos <= stopPositions[i] + 1) return "active";
      if (dotPos > stopPositions[i] + 1) return "passed";
      return "active";
    }
    return "inactive";
  };

  return (
    <>
      <div className="sol-steps">
        <div className="sol-line-track">
          <div className="sol-line-lit" style={{ width: `${dotPos}%` }} />
          <div className="sol-dot-js" style={{ left: `${dotPos}%` }} />
        </div>
        {steps.map((step, i) => {
          const state = getStepState(i);
          return (
            <div className={`sol-step sol-step--${state}`} key={step.title}>
              <div className="sol-step-icon-wrap">
                <div className="sol-step-num">{i + 1}</div>
                <span>{step.icon}</span>
              </div>
              <div className="sol-step-label">Step 0{i + 1}</div>
              <div className="sol-step-title">{step.title}</div>
              <p className="sol-step-desc">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function Home() {
  const typedText = useTypingAnimation();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const skillSearchText = useSkillSearchTyping();
  const expCardsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveProject(null); };
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h);
  }, []);
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeProject]);

  // 3D tilt on service cards
  useEffect(() => {
    const container = expCardsRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>(".exp-card");
    const MAX_TILT = 8;

    const handleMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateY = x * MAX_TILT * 2;
      const rotateX = -y * MAX_TILT * 2;
      card.style.transition = "transform 0.1s ease, box-shadow 0.3s, border-color 0.3s";
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    };

    const handleLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transition = "transform 0.4s ease, box-shadow 0.3s, border-color 0.3s";
      card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    };

    cards.forEach(card => {
      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@700;800;900&family=Dancing+Script:wght@600;700&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }

        :root {
          --nav-bg: rgba(10,2,2,0.92); --card-bg: rgba(255,255,255,0.045);
          --card-border: rgba(201,144,138,0.10); --shadow: 0 6px 28px rgba(0,0,0,0.45);
          --shadow-hover: 0 14px 42px rgba(0,0,0,0.65); --text-primary: #f0ebe8;
          --text-secondary: #ccc5b9; --text-muted: #9a8880; --btn-bg: #e8c4bc;
          --btn-text: #1a0808; --btn2-border: rgba(201,144,138,0.3); --btn2-text: #ccc5b9;
          --toggle-bg: rgba(201,144,138,0.08); --icon-bg: rgba(201,144,138,0.08);
          --divider: rgba(201,144,138,0.12); --typing-color: #e8c4bc;
          --bar-bg: rgba(201,144,138,0.10);
          --bar-fill-start: #e8c4bc; --bar-fill-end: #a84040; --modal-bg: rgba(10,1,1,0.98);
          --mw: 1380px; --sp: 56px;
        }

        body { font-family:'Poppins',sans-serif; min-height:100vh; color:var(--text-primary);
          background: linear-gradient(180deg, #080101 0%, #0d0202 25%, #110202 50%, #0d0202 75%, #080101 100%);
          background-attachment:fixed; }

        .grad-text { background:linear-gradient(110deg,#f0ebe8 0%,#e8c4bc 28%,#c9908a 52%,#a84040 72%,#330a0a 92%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; }

        .cds-nav { position:fixed; top:0; left:0; right:0; z-index:999; height:70px; display:flex; align-items:center; justify-content:space-between; padding:0 48px; gap:16px; background:var(--nav-bg); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border-bottom:1px solid var(--divider); transition:background 0.5s,border-color 0.4s; }
        .cds-logo { text-decoration:none; display:flex; align-items:center; flex-shrink:0; }
        .cds-nav-right { display:flex; align-items:center; gap:4px; }
        .cds-nav-links { list-style:none; display:flex; align-items:center; gap:2px; margin-right:12px; }
        .cds-nav-links a { text-decoration:none; font-size:13.5px; font-weight:500; color:var(--text-secondary); padding:7px 13px; border-radius:9px; transition:all 0.2s; white-space:nowrap; }
        .cds-nav-links a:hover { color:var(--text-primary); background:var(--card-bg); }
        .cds-btn-book-nav { display:flex; align-items:center; gap:7px; padding:9px 20px; background:var(--btn-bg); color:var(--btn-text); border-radius:10px; font-family:'Poppins',sans-serif; font-size:13px; font-weight:700; text-decoration:none; white-space:nowrap; border:none; cursor:pointer; transition:all 0.25s; margin-left:8px; }
        .cds-btn-book-nav:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(51,10,10,0.28); opacity:.88; }

        /* ===== CINEMATIC HERO ===== */
        .cds-hero { position:relative; aspect-ratio:16/9; width:100%; display:flex; align-items:flex-end; justify-content:center; overflow:hidden; background:transparent; }

        /* Fullscreen video background */
        .cds-hero-video { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:1; mask-image:linear-gradient(to bottom, #000 70%, transparent 100%); -webkit-mask-image:linear-gradient(to bottom, #000 70%, transparent 100%); }

        /* Dark overlay on top of video */
        .cds-hero-overlay { position:absolute; inset:0; z-index:2; background:linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.65) 70%, transparent 100%); }

        /* Glowing red light behind image */
        .cds-hero-glow { position:absolute; top:20%; left:50%; transform:translateX(-50%); width:600px; height:600px; border-radius:50%; background:radial-gradient(circle, rgba(51,10,10,0.8) 0%, rgba(51,10,10,0.4) 30%, rgba(51,10,10,0.1) 60%, transparent 80%); z-index:0; filter:blur(60px); animation:heroGlowPulse 4s ease-in-out infinite; }
        .cds-hero-glow-2 { position:absolute; top:10%; left:40%; width:400px; height:400px; border-radius:50%; background:radial-gradient(circle, rgba(107,26,26,0.5) 0%, rgba(51,10,10,0.2) 40%, transparent 70%); z-index:0; filter:blur(80px); animation:heroGlowPulse 6s ease-in-out 1s infinite; }
        .cds-hero-glow-3 { position:absolute; top:30%; right:30%; width:350px; height:350px; border-radius:50%; background:radial-gradient(circle, rgba(168,64,64,0.3) 0%, rgba(51,10,10,0.15) 40%, transparent 70%); z-index:0; filter:blur(70px); animation:heroGlowPulse 5s ease-in-out 2s infinite; }
        @keyframes heroGlowPulse { 0%,100%{ opacity:0.6; transform:translateX(-50%) scale(1); } 50%{ opacity:1; transform:translateX(-50%) scale(1.15); } }
        .cds-hero-glow-2, .cds-hero-glow-3 { animation-name:heroGlowFloat; }
        @keyframes heroGlowFloat { 0%,100%{ opacity:0.5; transform:scale(1); } 50%{ opacity:0.9; transform:scale(1.1); } }

        /* Floating particles */
        .cds-particles { position:absolute; inset:0; z-index:3; overflow:hidden; pointer-events:none; }
        .cds-particle { position:absolute; width:2px; height:2px; background:rgba(201,144,138,0.6); border-radius:50%; animation:particleFloat linear infinite; }
        .cds-particle:nth-child(1) { left:10%; top:20%; width:3px; height:3px; animation-duration:8s; animation-delay:0s; }
        .cds-particle:nth-child(2) { left:20%; top:80%; width:2px; height:2px; animation-duration:12s; animation-delay:1s; }
        .cds-particle:nth-child(3) { left:35%; top:40%; width:2px; height:2px; animation-duration:10s; animation-delay:2s; }
        .cds-particle:nth-child(4) { left:50%; top:70%; width:3px; height:3px; animation-duration:9s; animation-delay:0.5s; }
        .cds-particle:nth-child(5) { left:65%; top:30%; width:2px; height:2px; animation-duration:11s; animation-delay:3s; }
        .cds-particle:nth-child(6) { left:75%; top:60%; width:1.5px; height:1.5px; animation-duration:14s; animation-delay:1.5s; }
        .cds-particle:nth-child(7) { left:85%; top:15%; width:2px; height:2px; animation-duration:10s; animation-delay:4s; }
        .cds-particle:nth-child(8) { left:90%; top:85%; width:3px; height:3px; animation-duration:8s; animation-delay:2.5s; }
        .cds-particle:nth-child(9) { left:45%; top:10%; width:1.5px; height:1.5px; animation-duration:13s; animation-delay:0.8s; }
        .cds-particle:nth-child(10) { left:55%; top:50%; width:2px; height:2px; animation-duration:11s; animation-delay:3.5s; }
        .cds-particle:nth-child(11) { left:15%; top:55%; width:2px; height:2px; animation-duration:9s; animation-delay:1.2s; }
        .cds-particle:nth-child(12) { left:80%; top:40%; width:1.5px; height:1.5px; animation-duration:12s; animation-delay:2.8s; }
        .cds-particle:nth-child(13) { left:30%; top:90%; width:2px; height:2px; animation-duration:10s; animation-delay:0.3s; }
        .cds-particle:nth-child(14) { left:70%; top:75%; width:3px; height:3px; animation-duration:8s; animation-delay:4.2s; }
        .cds-particle:nth-child(15) { left:5%; top:45%; width:2px; height:2px; animation-duration:15s; animation-delay:1.8s; }
        .cds-particle:nth-child(16) { left:95%; top:25%; width:1.5px; height:1.5px; animation-duration:11s; animation-delay:3.2s; }
        .cds-particle:nth-child(17) { left:40%; top:65%; width:2px; height:2px; animation-duration:9s; animation-delay:0.6s; }
        .cds-particle:nth-child(18) { left:60%; top:5%; width:2px; height:2px; animation-duration:13s; animation-delay:2.2s; }
        .cds-particle:nth-child(19) { left:25%; top:35%; width:3px; height:3px; animation-duration:10s; animation-delay:1.6s; }
        .cds-particle:nth-child(20) { left:88%; top:55%; width:2px; height:2px; animation-duration:12s; animation-delay:3.8s; }
        @keyframes particleFloat {
          0%   { transform:translateY(0) translateX(0); opacity:0; }
          10%  { opacity:1; }
          90%  { opacity:1; }
          100% { transform:translateY(-100vh) translateX(30px); opacity:0; }
        }

        /* Hero content overlay */
        .cds-hero-content { position:relative; z-index:4; width:100%; max-width:900px; text-align:center; padding:0 var(--sp) 80px; display:flex; flex-direction:column; align-items:center; }

        .cds-eyebrow { font-size:13px; font-weight:600; letter-spacing:5px; text-transform:uppercase; color:rgba(201,144,138,0.8); margin-bottom:16px; opacity:0; animation:slideUp 0.6s ease 0.1s forwards; }
        .cds-heading { font-family:'Montserrat','Poppins',sans-serif; font-weight:900; font-size:clamp(42px,6vw,82px); line-height:1.0; color:#ffffff; white-space:nowrap; margin-bottom:16px; opacity:0; animation:slideUp 0.6s ease 0.18s forwards; text-shadow:0 0 40px rgba(51,10,10,0.6), 0 0 80px rgba(51,10,10,0.3); letter-spacing:-1px; }
        .cds-heading .grad-text { background:linear-gradient(110deg,#ff6b6b 0%,#c9908a 30%,#e8c4bc 60%,#ff8a80 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; filter:drop-shadow(0 0 20px rgba(168,64,64,0.5)); }
        .cds-subtitle-wrap { min-height:36px; margin-bottom:24px; opacity:0; animation:slideUp 0.6s ease 0.26s forwards; }
        .cds-subtitle { font-size:clamp(16px,2vw,22px); font-weight:600; color:#e8c4bc; display:inline; text-shadow:0 0 20px rgba(201,144,138,0.4); }
        .cds-cursor { display:inline-block; width:3px; height:1.1em; background:#e8c4bc; margin-left:3px; vertical-align:text-bottom; border-radius:2px; animation:cursorBlink 0.75s step-end infinite; box-shadow:0 0 8px rgba(232,196,188,0.6); }
        @keyframes cursorBlink{0%,100%{opacity:1}50%{opacity:0}}
        .cds-desc { font-size:15px; color:rgba(204,197,185,0.85); line-height:1.84; max-width:560px; margin-bottom:38px; opacity:0; animation:slideUp 0.6s ease 0.33s forwards; text-align:center; }
        .cds-desc strong { font-weight:700; color:#e8c4bc; }
        .cds-ctas { display:flex; gap:16px; flex-wrap:wrap; justify-content:center; opacity:0; animation:slideUp 0.6s ease 0.40s forwards; }
        .cds-btn-primary { display:flex; align-items:center; gap:9px; padding:15px 32px; background:linear-gradient(135deg,#6b1a1a,#330a0a); color:#f0ebe8; border-radius:14px; font-family:'Poppins',sans-serif; font-size:15px; font-weight:700; text-decoration:none; transition:all 0.3s; border:1px solid rgba(168,64,64,0.3); box-shadow:0 0 30px rgba(51,10,10,0.5), 0 8px 32px rgba(0,0,0,0.4); }
        .cds-btn-primary:hover { transform:translateY(-3px); box-shadow:0 0 50px rgba(107,26,26,0.6), 0 12px 40px rgba(0,0,0,0.5); border-color:rgba(168,64,64,0.5); }
        .cds-btn-secondary { display:flex; align-items:center; gap:9px; padding:15px 32px; background:rgba(255,255,255,0.05); color:rgba(240,235,232,0.9); border:1.5px solid rgba(201,144,138,0.25); border-radius:14px; font-family:'Poppins',sans-serif; font-size:15px; font-weight:600; text-decoration:none; transition:all 0.3s; backdrop-filter:blur(10px); }
        .cds-btn-secondary:hover { transform:translateY(-3px); background:rgba(255,255,255,0.1); border-color:rgba(201,144,138,0.45); box-shadow:0 0 30px rgba(51,10,10,0.3); }

        /* Stats row below CTAs */
        .cds-hero-stats { display:flex; gap:32px; margin-top:48px; opacity:0; animation:slideUp 0.6s ease 0.5s forwards; }
        .cds-hero-stat { text-align:center; }
        .cds-hero-stat-num { font-family:'Poppins',sans-serif; font-weight:800; font-size:24px; background:linear-gradient(110deg,#ff6b6b,#e8c4bc 50%,#c9908a); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:block; }
        .cds-hero-stat-lbl { font-size:11px; font-weight:500; color:rgba(204,197,185,0.6); margin-top:4px; letter-spacing:0.5px; }
        .cds-hero-stat-divider { width:1px; height:40px; background:rgba(201,144,138,0.15); align-self:center; }

        /* Scroll indicator */
        @keyframes scrollPulse { 0%,100%{ height:30px; opacity:0.3; } 50%{ height:50px; opacity:0.7; } }

        .section-divider { position:relative; width:100%; height:2px; overflow:visible; }
        .section-divider::before { content:''; position:absolute; top:0; left:50%; transform:translateX(-50%); width:60%; height:1px; background:linear-gradient(90deg,transparent,#330a0a 20%,#a84040 50%,#330a0a 80%,transparent); animation:lineExpand 3s ease-in-out infinite; opacity:.5; }
        .section-divider::after { content:''; position:absolute; top:-3px; left:50%; transform:translateX(-50%); width:40%; height:7px; border-radius:99px; background:linear-gradient(90deg,transparent,rgba(168,64,64,.6) 35%,rgba(201,144,138,.9) 50%,rgba(168,64,64,.6) 65%,transparent); filter:blur(4px); animation:glowPulse 3s ease-in-out infinite; }
        @keyframes lineExpand{0%{width:0%;opacity:0}50%{width:75%;opacity:1}100%{width:0%;opacity:0}}
        @keyframes glowPulse{0%{width:0%;opacity:0}50%{width:50%;opacity:1}100%{width:0%;opacity:0}}

        .exp-section { width:100%; padding-top:80px; padding-bottom:0; }
        .exp-content-wrap { max-width:var(--mw); margin:0 auto; padding:0 var(--sp); margin-bottom:32px; }
        .exp-inner { padding:64px var(--sp) 52px; }
        .exp-header { text-align:center; margin-bottom:52px; }
        .exp-eyebrow { font-size:11px; font-weight:700; letter-spacing:4px; text-transform:uppercase; background:linear-gradient(110deg,#e8c4bc,#c9908a 60%,#a84040); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; margin-bottom:14px; }
        .exp-title { font-family:'Montserrat','Poppins',sans-serif; font-weight:900; font-size:clamp(22px,2.6vw,38px); color:var(--text-primary); line-height:1.1; margin-bottom:18px; white-space:nowrap; }
        .exp-title-grad { background:linear-gradient(110deg,#e8c4bc,#c9908a 50%,#a84040); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; }
        .exp-subtitle { font-size:16px; font-weight:600; color:#e8c4bc; margin-bottom:12px; letter-spacing:0.5px; }
        .exp-desc { font-size:14.5px; color:var(--text-muted); line-height:1.8; max-width:560px; margin:0 auto; }
        .exp-cards { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
        .exp-card { position:relative; background:var(--card-bg); border:1px solid var(--card-border); border-radius:20px; padding:26px 22px; box-shadow:var(--shadow); transition:transform 0.4s ease,box-shadow 0.3s,border-color 0.3s; display:flex; flex-direction:column; overflow:hidden; z-index:0; transform-style:preserve-3d; will-change:transform; }
        .exp-card::after { content:''; position:absolute; left:0; right:0; bottom:0; height:200%; background:linear-gradient(to top,transparent 0%,rgba(180,40,40,0.12) 30%,rgba(232,196,188,0.08) 50%,transparent 70%); transform:translateY(100%); transition:none; pointer-events:none; z-index:1; }
        .exp-card:hover { border-color:rgba(180,40,40,0.4); box-shadow:0 0 30px rgba(180,40,40,0.2),0 10px 30px rgba(0,0,0,0.3); }
        .exp-card:hover::after { animation:shimmerSweep 2.5s ease-in-out infinite; }
        @keyframes shimmerSweep { 0%{transform:translateY(100%)} 50%{transform:translateY(-100%)} 100%{transform:translateY(100%)} }
        .exp-card-icon { width:46px; height:46px; border-radius:13px; background:var(--icon-bg); display:flex; align-items:center; justify-content:center; font-size:21px; margin-bottom:16px; }
        .exp-card-title { font-family:'Poppins',sans-serif; font-weight:700; font-size:14px; color:var(--text-primary); margin-bottom:10px; letter-spacing:1px; }
        .exp-stat-badge { display:inline-flex; align-self:flex-start; padding:5px 14px; border-radius:20px; font-size:11px; font-weight:700; color:#e8c4bc; background:rgba(51,10,10,0.4); border:1px solid rgba(201,144,138,0.15); margin-bottom:14px; letter-spacing:0.3px; }
        .exp-card-desc { font-size:13px; color:var(--text-muted); line-height:1.75; }

        .exp-marquee-wrap { width:100%; overflow:hidden; padding:28px 0; }
        .exp-marquee-track { display:flex; gap:10px; width:max-content; animation:marqueeScroll 30s linear infinite; }
        .exp-marquee-wrap:hover .exp-marquee-track { animation-play-state:paused; }
        @keyframes marqueeScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .exp-marquee-pill { display:flex; align-items:center; gap:8px; padding:8px 16px; background:var(--card-bg); border:1px solid var(--card-border); border-radius:40px; white-space:nowrap; font-size:12.5px; font-weight:600; color:var(--text-secondary); box-shadow:var(--shadow); flex-shrink:0; margin-left:10px; transition:transform 0.2s; }
        .exp-marquee-pill:hover { transform:scale(1.05); }
        .marquee-logo { width:15px; height:15px; object-fit:contain; flex-shrink:0; }

        /* WHAT I BRING / SKILLSET */
        .skl-section { padding:80px 0 80px; }
        .skl-wrap { max-width:var(--mw); margin:0 auto; padding:0 var(--sp); }
        .skl-header { text-align:center; margin-bottom:48px; }
        .skl-label { font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--text-muted); margin-bottom:14px; }
        .skl-title { font-family:'Montserrat','Poppins',sans-serif; font-weight:900; font-size:clamp(28px,3.5vw,48px); color:#fff; line-height:1.1; margin-bottom:16px; }
        .skl-title-accent { color:#e8c4bc; }
        .skl-subtitle { font-size:14.5px; color:var(--text-muted); line-height:1.8; max-width:600px; margin:0 auto 32px; }
        .skl-search { display:flex; justify-content:center; margin-bottom:40px; }
        .skl-search-input { width:100%; max-width:420px; padding:12px 20px 12px 44px; background:rgba(255,255,255,0.04); border:1px solid var(--card-border); border-radius:12px; color:var(--text-primary); font-family:'Poppins',sans-serif; font-size:14px; outline:none; transition:border-color 0.25s,box-shadow 0.25s; }
        .skl-search-input { display:flex; align-items:center; }
        .skl-search-cursor { color:#e8c4bc; font-weight:300; animation:searchCursorBlink 0.75s step-end infinite; margin-left:1px; }
        @keyframes searchCursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }
        .skl-search-wrap { position:relative; width:100%; max-width:420px; }
        .skl-search-icon { position:absolute; left:16px; top:50%; transform:translateY(-50%); font-size:15px; color:var(--text-muted); pointer-events:none; }
        .skl-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .skl-card { position:relative; background:rgba(255,255,255,0.03); border:1px solid var(--card-border); border-radius:20px; padding:28px 24px; transition:transform 0.35s ease,box-shadow 0.35s ease,border-color 0.35s ease,opacity 0.35s ease; overflow:hidden; }
        .skl-grid:hover .skl-card { opacity:0.4; transform:scale(0.97); }
        .skl-grid:hover .skl-card:hover { opacity:1; transform:scale(1.06); border-color:rgba(180,40,40,0.5); box-shadow:0 0 20px 6px rgba(180,40,40,0.7),0 0 40px 12px rgba(180,40,40,0.4); z-index:2; }
        /* Concentric spinning circles */
        /* Rotating hashtag grid on hover */
        .skl-grid-lines { position:absolute; inset:-10px; pointer-events:none; z-index:0; opacity:0; transition:opacity 0.3s ease; }
        .skl-card:hover .skl-grid-lines { opacity:1; animation:sklGridSpin 8s linear infinite; }
        @keyframes sklGridSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .skl-gline { position:absolute; background:rgba(200,50,50,0.5); }
        .skl-gline-h { height:1px; left:-15px; right:-15px; }
        .skl-gline-v { width:1px; top:-15px; bottom:-15px; }
        .skl-gline-h1 { top:15%; }
        .skl-gline-h2 { top:85%; }
        .skl-gline-v1 { left:15%; }
        .skl-gline-v2 { left:85%; }
        .skl-card-top, .skl-card-title, .skl-card-desc, .skl-tags { position:relative; z-index:2; }
        .skl-card-top { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:16px; }
        .skl-card-icon { width:46px; height:46px; border-radius:13px; background:rgba(51,10,10,0.3); display:flex; align-items:center; justify-content:center; font-size:21px; animation:iconPulse 2s ease-in-out infinite; transition:animation-duration 0.3s ease; }
        .skl-card:hover .skl-card-icon { animation-duration:1s; }
        @keyframes iconPulse { 0%,100%{transform:scale(1);filter:drop-shadow(0 0 0px rgba(200,50,50,0))} 50%{transform:scale(1.12);filter:drop-shadow(0 0 8px rgba(200,50,50,0.7))} }
        .skl-card-num { font-family:'Poppins',sans-serif; font-weight:800; font-size:13px; color:rgba(201,144,138,0.25); letter-spacing:1px; }
        .skl-card-title { font-family:'Poppins',sans-serif; font-weight:700; font-size:15px; color:var(--text-primary); margin-bottom:0; transition:color 0.35s ease; }
        .skl-card:hover .skl-card-title { color:#e8c4bc; }
        .skl-card-desc { font-size:12.5px; color:var(--text-muted); line-height:1.75; max-height:0; opacity:0; overflow:hidden; margin-top:0; transition:max-height 0.35s ease,opacity 0.35s ease,margin-top 0.35s ease; }
        .skl-card:hover .skl-card-desc { max-height:200px; opacity:1; margin-top:12px; }
        .skl-tags { display:flex; flex-wrap:wrap; gap:6px; margin-top:16px; }
        .skl-tag { padding:4px 12px; border-radius:20px; font-size:11px; font-weight:600; color:var(--text-secondary); background:rgba(51,10,10,0.25); border:1px solid rgba(201,144,138,0.08); white-space:nowrap; transition:background 0.35s ease,border-color 0.35s ease; }
        .skl-card:hover .skl-tag { background:rgba(51,10,10,0.4); border-color:rgba(201,144,138,0.15); }
        .skl-empty { grid-column:1/-1; text-align:center; padding:40px 0; color:var(--text-muted); font-size:14px; }
        @media(max-width:1200px){ .skl-grid{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:820px){ .skl-grid{grid-template-columns:1fr} }

        .proj-section { padding:80px 0 100px; }
        .proj-section-header { max-width:var(--mw); margin:0 auto 48px; padding:0 var(--sp); text-align:center; }
        .proj-section-title { font-family:'Poppins',sans-serif; font-weight:900; font-size:clamp(28px,3.2vw,44px); color:var(--text-primary); line-height:1.1; }
        .proj-section-title-grad { background:linear-gradient(110deg,#e8c4bc,#c9908a 50%,#a84040); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; }
        .marquee-row { overflow:hidden; padding:20px 0; }
        .marquee-track { display:flex; gap:20px; width:max-content; padding:10px 0; }
        .marquee-left { animation:scrollLeft var(--marquee-dur,40s) linear infinite; }
        .marquee-right { animation:scrollRight var(--marquee-dur,40s) linear infinite; }
        .marquee-row:hover .marquee-track { animation-play-state:paused; }
        @keyframes scrollLeft { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes scrollRight { from{transform:translateX(-50%)} to{transform:translateX(0)} }
        /* Flip card container */
        .proj-card-wrap { flex:0 0 340px; width:340px; perspective:1200px; height:420px; position:relative; border-radius:20px; transform-style:preserve-3d; -webkit-transform-style:preserve-3d; }
        .proj-card-wrap .proj-card { position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; background:rgba(255,255,255,0.03); border:1px solid var(--card-border); border-radius:20px; overflow:hidden; transition:transform 0.6s ease,box-shadow 0.35s ease,border-color 0.35s ease; display:flex; flex-direction:column; cursor:pointer; box-shadow:0 4px 24px 4px rgba(255,255,255,0.18); }
        /* Shimmer sweep on hover */
        .proj-card-wrap .proj-card::before { content:''; position:absolute; inset:0; background:linear-gradient(to top,transparent 0%,rgba(180,40,40,0.1) 30%,rgba(232,196,188,0.06) 50%,transparent 70%); transform:translateY(100%); pointer-events:none; z-index:2; border-radius:20px; }
        .proj-front { z-index:2; transform:rotateY(0deg); }
        .proj-back { transform:rotateY(-180deg); z-index:1; pointer-events:none; }
        .proj-back .proj-back-content { opacity:0; transition:opacity 0s 0.3s; }
        .proj-card-wrap.is-flipped .proj-front { transform:rotateY(180deg); }
        .proj-card-wrap.is-flipped .proj-back { transform:rotateY(0deg); pointer-events:auto; }
        .proj-card-wrap.is-flipped .proj-back .proj-back-content { opacity:1; transition:opacity 0s 0.3s; }
        /* Hover: lift + glow + shimmer */
        .proj-card:hover { transform:translateY(-6px); z-index:3; box-shadow:0 0 20px 6px rgba(180,40,40,0.6),0 0 40px 12px rgba(180,40,40,0.3); border-color:rgba(180,40,40,0.4); }
        .proj-card:hover::before { animation:projShimmer 1.2s ease forwards; }
        @keyframes projShimmer { 0%{transform:translateY(100%)} 100%{transform:translateY(-100%)} }
        .proj-card-wrap.is-flipped .proj-back:hover { transform:rotateY(0deg) translateY(-6px); }
        /* Back face content */
        .proj-back-thumb { width:100%; flex-shrink:0; overflow:hidden; }
        .proj-back-thumb img { width:100%; height:auto; display:block; }
        .proj-back-content { padding:24px 20px; display:flex; flex-direction:column; flex:1; overflow-y:auto; }
        .proj-back-desc { font-size:12.5px; color:var(--text-muted); line-height:1.75; flex:1; }
        .proj-back-btns { display:flex; gap:10px; margin-top:16px; }
        .proj-back-btn-view { flex:1; padding:10px 16px; background:linear-gradient(135deg,#6b1a1a,#330a0a); color:#f0ebe8; border:1px solid rgba(168,64,64,0.3); border-radius:10px; font-family:'Poppins',sans-serif; font-size:12.5px; font-weight:700; cursor:pointer; transition:all 0.25s; }
        .proj-back-btn-view:hover { box-shadow:0 0 20px rgba(107,26,26,0.4); }
        .proj-back-btn-back { padding:10px 16px; background:transparent; color:var(--text-secondary); border:1px solid var(--card-border); border-radius:10px; font-family:'Poppins',sans-serif; font-size:12.5px; font-weight:600; cursor:pointer; transition:all 0.25s; }
        .proj-back-btn-back:hover { border-color:var(--text-muted); color:var(--text-primary); }
        /* Thumbnail with Ken Burns */
        .proj-thumb { height:190px; position:relative; overflow:hidden; flex-shrink:0; background:linear-gradient(135deg,#1a0808,#330a0a 50%,#5a1a1a); }
        .proj-thumb img { width:100%; height:100%; object-fit:cover; object-position:top center; display:block; animation:kenBurns 8s ease-in-out infinite alternate; }
        @keyframes kenBurns { 0%{transform:scale(1)} 100%{transform:scale(1.08)} }
        .proj-card:hover .proj-thumb img { animation-duration:4s; }
        .proj-thumb-overlay { position:absolute; bottom:0; left:0; right:0; height:30%; background:linear-gradient(to top,rgba(15,3,3,0.5),transparent); z-index:1; pointer-events:none; }
        .proj-thumb-click { position:absolute; bottom:10px; right:10px; z-index:2; background:rgba(51,10,10,.75); backdrop-filter:blur(8px); border:1px solid rgba(201,144,138,.25); border-radius:6px; padding:4px 9px; font-size:9.5px; font-weight:600; color:#e8c4bc; opacity:0; transition:opacity 0.2s; pointer-events:none; }
        .proj-card:hover .proj-thumb-click { opacity:1; }
        .proj-body { padding:16px 18px 18px; display:flex; flex-direction:column; flex:1; }
        .proj-card-title { font-family:'Poppins',sans-serif; font-weight:700; font-size:14px; color:var(--text-primary); margin-bottom:9px; line-height:1.3; }
        .proj-tags { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:10px; }
        .proj-tag { padding:2px 8px; border-radius:20px; font-size:9.5px; font-weight:600; border:1px solid; white-space:nowrap; }
        .proj-desc { font-size:12px; color:var(--text-muted); line-height:1.7; margin-bottom:12px; flex:1; }
        .proj-metrics { display:flex; flex-direction:column; gap:4px; border-top:1px solid var(--divider); padding-top:10px; }
        .proj-metric { display:flex; align-items:center; gap:6px; font-size:11.5px; font-weight:600; color:var(--text-secondary); }

        .sol-section { padding:80px 0 100px; }
        .sol-wrap { max-width:var(--mw); margin:0 auto; padding:0 var(--sp); }
        .sol-inner { padding:64px var(--sp) 56px; }
        .sol-header { text-align:center; margin-bottom:60px; }
        .sol-eyebrow { font-size:11px; font-weight:700; letter-spacing:4px; text-transform:uppercase; background:linear-gradient(110deg,#e8c4bc,#c9908a 60%,#a84040); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; margin-bottom:14px; }
        .sol-title { font-family:'Poppins',sans-serif; font-weight:900; font-size:clamp(28px,3.2vw,44px); color:var(--text-primary); line-height:1.1; margin-bottom:14px; }
        .sol-title-grad { background:linear-gradient(110deg,#e8c4bc,#c9908a 50%,#a84040); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; }
        .sol-subtitle { font-size:15px; color:var(--text-muted); max-width:520px; margin:0 auto; line-height:1.7; }
        .sol-steps { position:relative; display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:56px; }
        .sol-line-track { position:absolute; top:36px; left:calc(10% + 4px); right:calc(10% + 4px); height:2px; background:rgba(168,64,64,0.15); z-index:0; border-radius:99px; overflow:visible; }
        .sol-line-lit { position:absolute; top:0; left:0; height:100%; border-radius:99px; background:linear-gradient(90deg,rgba(168,64,64,0.6),rgba(200,50,50,0.9)); box-shadow:0 0 8px rgba(200,50,50,0.5),0 0 20px rgba(200,50,50,0.25); transition:width 0.05s linear; }
        .sol-dot-js { position:absolute; top:50%; transform:translate(-50%,-50%); width:14px; height:14px; border-radius:50%; background:linear-gradient(135deg,#a84040,#e8c4bc); box-shadow:0 0 12px rgba(200,50,50,0.9),0 0 28px rgba(168,64,64,0.5); z-index:2; transition:left 0.05s linear; }

        .sol-step { flex:1; display:flex; flex-direction:column; align-items:center; text-align:center; padding:0 10px; position:relative; z-index:1; }
        .sol-step-icon-wrap { position:relative; width:72px; height:72px; border-radius:20px; background:rgba(20,5,5,0.8); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border:1.5px solid var(--card-border); box-shadow:var(--shadow); display:flex; align-items:center; justify-content:center; font-size:26px; margin-bottom:18px; transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s ease,background 0.3s ease,border-color 0.3s ease; }
        .sol-step:hover .sol-step-icon-wrap { transform:translateY(-4px); box-shadow:var(--shadow-hover); border-color:rgba(168,64,64,0.35); }
        .sol-step-num { position:absolute; top:-9px; right:-9px; width:22px; height:22px; border-radius:50%; background:linear-gradient(135deg,#330a0a,#a84040); color:#efefef; font-size:10px; font-weight:800; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(51,10,10,0.35); border:1.5px solid #0a0a0a; transition:box-shadow 0.3s ease,background 0.3s ease; }
        .sol-step-label { font-size:10px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:var(--text-muted); margin-bottom:6px; }
        .sol-step-title { font-family:'Poppins',sans-serif; font-weight:700; font-size:15px; color:var(--text-primary); margin-bottom:10px; line-height:1.3; }
        .sol-step-desc { font-size:12.5px; color:var(--text-muted); line-height:1.75; max-width:190px; }

        /* Step active — dot is currently here */
        .sol-step--active .sol-step-icon-wrap { transform:translateY(-8px); background:rgba(51,10,10,0.6); border-color:rgba(200,50,50,0.5); box-shadow:0 0 30px 10px rgba(200,50,50,0.5),0 0 60px 20px rgba(200,50,50,0.2); animation:stepPulse 1.5s ease-in-out infinite; }
        .sol-step--active .sol-step-num { background:linear-gradient(135deg,#a84040,#e8c4bc); box-shadow:0 0 12px rgba(200,50,50,0.8),0 2px 8px rgba(51,10,10,0.35); }
        @keyframes stepPulse { 0%,100%{box-shadow:0 0 30px 10px rgba(200,50,50,0.5),0 0 60px 20px rgba(200,50,50,0.2)} 50%{box-shadow:0 0 35px 14px rgba(200,50,50,0.6),0 0 70px 24px rgba(200,50,50,0.25)} }

        /* Step passed — dot has gone past */
        .sol-step--passed .sol-step-icon-wrap { background:rgba(51,10,10,0.35); border-color:rgba(200,50,50,0.25); box-shadow:0 0 14px 4px rgba(200,50,50,0.2),0 0 28px 8px rgba(200,50,50,0.08); }
        .sol-step--passed .sol-step-num { background:linear-gradient(135deg,#6b1a1a,#c9908a); box-shadow:0 0 6px rgba(200,50,50,0.4),0 2px 8px rgba(51,10,10,0.35); }
        .sol-cta { display:flex; flex-direction:column; align-items:center; gap:14px; padding-top:16px; }
        .sol-btn { display:inline-flex; align-items:center; gap:10px; padding:18px 42px; background:var(--btn-bg); color:var(--btn-text); border-radius:50px; font-family:'Poppins',sans-serif; font-size:17px; font-weight:800; letter-spacing:0.3px; text-decoration:none; transition:all 0.25s; box-shadow:0 6px 24px rgba(51,10,10,0.28); }
        .sol-btn:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(51,10,10,0.35); opacity:0.9; }
        .sol-cta-sub { font-size:12px; color:var(--text-muted); }

        /* WHY WORK WITH ME */
        .wwm-section { width:100%; text-align:center; padding:80px 40px; }
        .wwm-title { font-family:'Montserrat','Poppins',sans-serif; font-weight:900; font-size:clamp(28px,4vw,52px); color:#fff; line-height:1.15; margin-bottom:14px; }
        .wwm-title span { background:linear-gradient(110deg,#e8c4bc,#c9908a 50%,#a84040); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; }
        .wwm-sub { font-size:20px; font-weight:700; color:var(--text-muted); margin-bottom:48px; }
        .wwm-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; max-width:900px; margin:0 auto 48px; perspective:900px; }
        .wwm-card { background:rgba(255,255,255,0.03); border:1px solid var(--card-border); border-radius:18px; padding:28px 24px; text-align:left; transition:transform 0.6s ease,box-shadow 0.6s ease,border-color 0.6s ease,opacity 0.6s ease; }
        .wwm-card:hover { transform:translateY(-4px); border-color:rgba(180,40,40,0.4); box-shadow:0 0 20px rgba(180,40,40,0.25),0 8px 24px rgba(0,0,0,0.3); }
        .wwm-card:hover .wwm-text { color:var(--text-primary); }
        .wwm-num { font-family:'Poppins',sans-serif; font-weight:800; font-size:13px; color:rgba(201,144,138,0.3); letter-spacing:1px; margin-bottom:12px; display:block; }
        .wwm-text { font-size:14.5px; color:var(--text-muted); line-height:1.7; font-weight:500; transition:color 0.3s ease; }
        .wwm-divider { width:80px; height:2px; background:linear-gradient(90deg,transparent,rgba(168,64,64,0.5),transparent); margin:0 auto 36px; }
        .wwm-body { display:block; font-family:'Poppins',sans-serif; font-size:clamp(16px,1.8vw,20px); font-weight:600; color:var(--text-secondary); line-height:2.1; max-width:720px; margin:0 auto 32px; }
        .wwm-cta { display:inline-flex; align-items:center; gap:8px; padding:18px 42px; background:linear-gradient(135deg,#6b1a1a,#330a0a); color:#f0ebe8; border-radius:50px; font-family:'Poppins',sans-serif; font-size:17px; font-weight:800; letter-spacing:1.5px; text-decoration:none; transition:all 0.3s; border:1px solid rgba(168,64,64,0.3); box-shadow:0 6px 24px rgba(51,10,10,0.3); cursor:pointer; }
        .wwm-cta:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(51,10,10,0.4); border-color:rgba(168,64,64,0.5); }

        /* TESTIMONIALS */
        .tst-section { width:100%; background:#0a0404; padding:80px 40px; text-align:center; }
        .tst-title { font-family:'Montserrat','Poppins',sans-serif; font-weight:900; font-size:clamp(28px,4vw,52px); color:#efefef; line-height:1.15; margin-bottom:56px; }
        .tst-title span { color:#c97a72; }
        .tst-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; max-width:900px; margin:0 auto; align-items:center; }
        .tst-card { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:20px; padding:36px 28px 28px; text-align:left; position:relative; opacity:0; transform:translateY(30px); transition:opacity 0.7s ease,transform 0.7s ease; }
        .tst-card--visible { opacity:1; transform:translateY(0); }
        .tst-card--side.tst-card--visible { opacity:0.75; transform:scale(0.95); }
        .tst-card--featured { border-color:rgba(255,255,255,0.15); }
        .tst-quote-mark { font-family:Georgia,serif; font-size:64px; line-height:1; color:#330a0a; display:block; margin-bottom:-8px; user-select:none; }
        .tst-text { font-size:14.5px; color:#efefef; line-height:1.8; font-style:italic; font-weight:400; }
        .tst-divider { width:40px; height:1px; background:rgba(201,144,138,0.2); margin:20px 0 16px; }
        .tst-name { font-family:'Poppins',sans-serif; font-size:14px; font-weight:700; color:var(--text-secondary); }
        .tst-role { font-family:'Poppins',sans-serif; font-size:12px; color:var(--text-muted); margin-top:2px; }
        @media(max-width:768px){
          .tst-grid{grid-template-columns:1fr;max-width:480px;margin:0 auto}
          .tst-card--side.tst-card--visible{opacity:1;transform:scale(1)}
        }

        .modal-backdrop { position:fixed; inset:0; z-index:1000; background:rgba(0,0,0,.6); backdrop-filter:blur(8px); display:flex; align-items:center; justify-content:center; padding:24px; animation:fadeIn 0.25s; }
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .modal-box { background:var(--modal-bg); border:1px solid var(--card-border); border-radius:28px; max-width:760px; width:100%; max-height:88vh; overflow-y:auto; box-shadow:0 24px 80px rgba(0,0,0,.4); animation:scaleIn 0.28s cubic-bezier(0.34,1.56,0.64,1); scrollbar-width:thin; scrollbar-color:var(--card-border) transparent; }
        @keyframes scaleIn{from{opacity:0;transform:scale(0.92)}to{opacity:1;transform:scale(1)}}
        .modal-img { width:100%; height:auto; border-radius:28px 28px 0 0; display:block; }
        .modal-body { padding:32px 36px 36px; }
        .modal-top { display:flex; justify-content:flex-end; margin-bottom:8px; }
        .modal-close { width:36px; height:36px; border-radius:10px; border:1px solid var(--card-border); background:var(--card-bg); cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:18px; color:var(--text-muted); flex-shrink:0; transition:all 0.2s; }
        .modal-close:hover { background:var(--btn-bg); color:var(--btn-text); border-color:var(--btn-bg); }
        .modal-title { font-family:'Poppins',sans-serif; font-weight:800; font-size:clamp(20px,2.5vw,26px); color:var(--text-primary); margin-bottom:14px; line-height:1.2; }
        .modal-tags { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:24px; }
        .modal-tag { padding:4px 12px; border-radius:20px; font-size:11px; font-weight:600; border:1px solid; }
        .modal-section-label { font-size:10px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px; margin-top:22px; }
        .modal-section-label:first-of-type { margin-top:0; }
        .modal-text { font-size:14px; color:var(--text-secondary); line-height:1.8; }
        .modal-metrics { display:flex; gap:14px; flex-wrap:wrap; margin-top:24px; }
        .modal-metric-pill { display:flex; align-items:center; gap:8px; padding:10px 18px; background:var(--icon-bg); border:1px solid var(--card-border); border-radius:12px; font-size:13px; font-weight:700; color:var(--text-primary); }
        .modal-divider { height:1px; background:var(--divider); margin:22px 0; }

        /* CONTACT */
        .contact-section { width:100%; background:#0a0404; padding:80px 40px; }
        .contact-grid { display:grid; grid-template-columns:1fr 1.4fr; gap:48px; max-width:1200px; margin:0 auto; align-items:center; }
        .contact-left { display:flex; flex-direction:column; gap:16px; }
        .contact-title { font-family:'Montserrat','Poppins',sans-serif; font-weight:900; font-size:clamp(28px,4vw,52px); color:#fff; line-height:1.15; margin-bottom:12px; }
        .contact-title span { color:#c97a72; }
        .contact-intro { font-size:17px; color:var(--text-muted); font-style:italic; line-height:1.8; margin-bottom:20px; }
        .contact-pick { font-family:'Poppins',sans-serif; font-size:18px; font-weight:600; color:#ffffff; text-shadow:0 0 20px rgba(255,255,255,0.5); margin-bottom:0; }
        .contact-arrow { display:inline-block; font-size:22px; margin-left:4px; animation:arrowBounce 1.5s ease-in-out infinite; }
        @keyframes arrowBounce { 0%,100%{transform:translateX(0)} 50%{transform:translateX(8px)} }
        .contact-details { margin-top:36px; display:flex; flex-direction:column; gap:12px; padding-top:24px; border-top:1px solid rgba(255,255,255,0.06); }
        .contact-biz { font-family:'Poppins',sans-serif; font-size:18px; font-weight:700; color:#fff; }
        .contact-email { display:flex; align-items:center; gap:8px; font-size:14px; color:var(--text-muted); text-decoration:none; transition:color 0.2s; }
        .contact-email:hover { color:var(--text-secondary); }
        .contact-socials { display:flex; gap:10px; margin-top:4px; }
        .contact-social-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 18px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:50px; color:var(--text-secondary); font-size:13px; font-weight:600; text-decoration:none; transition:all 0.2s; }
        .contact-social-btn:hover { background:rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.15); color:#fff; }
        .contact-social-btn svg { width:16px; height:16px; fill:currentColor; }
        .contact-tagline { font-size:13px; color:var(--text-muted); font-style:italic; margin-top:8px; }
        .contact-cal-wrap { width:100%; position:relative; padding:24px; border-radius:20px; background:rgba(255,255,255,0.05); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,0.1); box-shadow:0 8px 32px rgba(0,0,0,0.4); }
        .contact-cal { width:100%; height:680px; border:none; background:transparent; display:block; border-radius:12px; }

        /* FOOTER */
        .site-footer { width:100%; border-top:1px solid #2e1212; padding:28px 40px; text-align:center; }
        .site-footer p { font-size:12px; color:var(--text-muted); font-family:'Poppins',sans-serif; }

        @media(max-width:768px){
          .contact-grid{grid-template-columns:1fr;gap:40px}
          .contact-cal-wrap{height:600px} .contact-cal{height:600px}
        }

        @keyframes slideUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        @keyframes blink{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(34,197,94,.5)}50%{opacity:.7;box-shadow:0 0 0 5px rgba(34,197,94,0)}}

        @media(max-width:1200px){
          :root{ --sp:32px; --mw:100%; }
          .cds-nav{padding:0 24px} .cds-nav-links{display:none}
          .exp-cards{grid-template-columns:repeat(2,1fr)}
          .proj-card-wrap{flex:0 0 300px;width:300px}
          .modal-body{padding:24px 28px 28px}
          .wwm-grid{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:900px){
          .sol-steps{flex-direction:column;align-items:center;gap:36px}
          .sol-line-track{display:none}
          .sol-step{flex:none;flex-direction:column;text-align:center;width:100%;max-width:320px;gap:0;padding:0 20px;align-items:center}
          .sol-step-icon-wrap{margin-bottom:14px;flex-shrink:0}
          .sol-step-label{margin-bottom:6px}
          .sol-step-title{margin-bottom:8px;font-size:16px}
          .sol-step-desc{max-width:100%;font-size:14px;line-height:1.8}
          .cds-hero-stats{gap:20px} .cds-hero-stat-num{font-size:20px}
        }
        @media(max-width:820px){
          :root{ --sp:20px; }
          .cds-hero{aspect-ratio:auto;min-height:100svh}
          .cds-heading{white-space:normal; font-size:clamp(32px,8vw,52px); }
          .cds-hero-content{padding:0 var(--sp) 40px}
          .cds-hero-stats{flex-wrap:wrap;gap:16px;justify-content:center}
          .cds-hero-stat-divider{display:none}
          .cds-hero-glow{width:350px;height:350px}
          .cds-btn-primary,.cds-btn-secondary{font-size:14px;padding:14px 26px}
          .exp-title{white-space:normal;font-size:clamp(20px,5vw,32px)}
          .exp-inner{padding:36px var(--sp) 36px} .exp-cards{grid-template-columns:1fr}
          .proj-card-wrap{flex:0 0 280px;width:280px;height:380px;transform-style:preserve-3d;-webkit-transform-style:preserve-3d}
          .proj-card:hover{transform:none;box-shadow:0 4px 24px 4px rgba(255,255,255,0.18);border-color:var(--card-border)}
          .proj-card-wrap.is-flipped .proj-back:hover{transform:rotateY(0deg)}
          .wwm-grid{grid-template-columns:1fr;max-width:480px}
          .wwm-section{padding:60px 20px}
          .wwm-sub{font-size:16px;margin-bottom:32px}
          .wwm-body{font-size:16px;line-height:1.9;max-width:100%}
          .wwm-cta{font-size:15px;padding:16px 32px;letter-spacing:1px}
          .tst-section{padding:60px 20px}
          .tst-title{margin-bottom:36px}
          .contact-section{padding:60px 20px}
          .contact-grid{grid-template-columns:1fr;gap:40px}
          .contact-title{font-size:clamp(28px,7vw,40px);text-align:center}
          .contact-intro{text-align:center}
          .contact-pick{font-size:16px;text-align:center}
          .contact-arrow{display:inline-block;animation-name:arrowBounceDown;transform:rotate(90deg)}
          @keyframes arrowBounceDown{0%,100%{transform:rotate(90deg) translateX(0)}50%{transform:rotate(90deg) translateX(8px)}}
          .contact-details{text-align:center;align-items:center}
          .contact-socials{justify-content:center}
          .contact-cal-wrap{padding:16px}
          .contact-cal{height:580px}
          .sol-btn{font-size:14px;padding:16px 28px;letter-spacing:0.2px}
          .sol-btn-arrow{display:none}
          .site-footer{padding:24px 20px}
          .modal-box{border-radius:20px} .modal-img{height:auto;border-radius:20px 20px 0 0} .modal-body{padding:20px 22px 24px}
        }
        @media(max-width:480px){
          .cds-hero{min-height:100svh}
          .cds-heading{font-size:clamp(28px,9vw,42px)}
          .cds-hero-content{padding:0 16px 32px}
          .cds-hero-stats{gap:10px}
          .cds-hero-stat-num{font-size:18px}
          .cds-hero-stat-lbl{font-size:10px}
          .cds-btn-primary,.cds-btn-secondary{font-size:13px;padding:13px 22px;border-radius:12px}
          .exp-title{font-size:clamp(18px,5.5vw,28px)}
          .wwm-section{padding:48px 16px}
          .wwm-title{font-size:clamp(24px,7vw,36px)}
          .wwm-sub{font-size:15px}
          .wwm-cta{font-size:14px;padding:14px 28px}
          .tst-section{padding:48px 16px}
          .tst-card{padding:28px 20px 22px}
          .contact-section{padding:48px 16px}
          .contact-intro{font-size:15px}
          .contact-cal-wrap{padding:12px}
          .contact-cal{height:520px}
          .sol-btn{font-size:13px;padding:14px 24px}
          .site-footer{padding:20px 16px}
          .site-footer p{font-size:11px}
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="cds-nav">
        <a href="#" className="cds-logo">
          <Image src="/logo-new.png" alt="Charmed Digital Studio" width={180} height={56} style={{ objectFit:"contain", filter:"brightness(10) contrast(1.2)", opacity:1, height:"auto" }} priority />
        </a>
        <div className="cds-nav-right">
          <ul className="cds-nav-links">
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="https://app.charmeddigitalstudio.com/widget/booking/gA97jFQNli6Tm1jyQxDk" target="_blank" rel="noopener noreferrer" className="cds-btn-book-nav">📅 BOOK A CALL</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="cds-hero">
        {/* Glow effects behind image */}
        <div className="cds-hero-glow" />
        <div className="cds-hero-glow-2" />
        <div className="cds-hero-glow-3" />

        {/* Fullscreen video background */}
        <video className="cds-hero-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/pwede.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="cds-hero-overlay" />

        {/* Floating particles */}
        <div className="cds-particles">
          {Array.from({length:20}).map((_,i)=><div key={i} className="cds-particle" />)}
        </div>

        {/* Content */}
        <div className="cds-hero-content">
          <p className="cds-eyebrow">Charm Castanos</p>
          <h1 className="cds-heading">HEY! I&apos;M <span className="grad-text">CHARM</span></h1>
          <div className="cds-subtitle-wrap">
            <span className="cds-subtitle">{typedText}</span>
            <span className="cds-cursor" />
          </div>
          <p className="cds-desc">Stop doing manually what a system can do for you. I build the <strong>CRM workflows and automations</strong> that free up your time and keep your business moving.</p>
          <div className="cds-ctas">
            <a href="#contact" className="cds-btn-primary">Book a Free Call</a>
            <a href="#projects" className="cds-btn-secondary">See My Work</a>
          </div>
          <div className="cds-hero-stats">
            {[{num:"10x",lbl:"Faster Workflows"},{num:"500+",lbl:"Hours Saved"},{num:"98%",lbl:"Client Satisfaction"},{num:"3+",lbl:"Years Experience"}].map((s,i)=>(
              <React.Fragment key={s.num}>{i>0&&<div className="cds-hero-stat-divider"/>}<div className="cds-hero-stat"><span className="cds-hero-stat-num">{s.num}</span><span className="cds-hero-stat-lbl">{s.lbl}</span></div></React.Fragment>
            ))}
          </div>
        </div>

      </section>

      <div className="section-divider" />

      {/* WHAT I DO */}
      <section className="exp-section" id="expertise">
        <div className="exp-content-wrap">
          <div className="exp-inner">
            <div className="exp-header">
              <h2 className="exp-title"><span className="exp-title-grad">SYSTEMS THAT WORK FOR YOU.</span></h2>
              <p className="exp-subtitle">Build once. Run forever. Scale without burning out.</p>
              <p className="exp-desc">I design automation systems and CRM workflows that eliminate the busywork — so your business runs while you focus on what actually matters.</p>
            </div>
            <div className="exp-cards" ref={expCardsRef}>
              {SERVICES.map(card=>(
                <div className="exp-card" key={card.title}>
                  <div className="exp-card-icon">{card.icon}</div>
                  <div className="exp-card-title">{card.title}</div>
                  <div className="exp-stat-badge">{card.stat}</div>
                  <p className="exp-card-desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-window marquee */}
        <div className="exp-marquee-wrap">
          <div className="exp-marquee-track">
            {[...MARQUEE_TOOLS,...MARQUEE_TOOLS].map((tool,i)=>(
              <div className="exp-marquee-pill" key={i}>
                {tool.logo
                  ? <img src={tool.logo} alt={tool.label} className="marquee-logo" style={{filter: tool.filter || undefined}} />
                  : <span style={{fontSize:"14px"}}>{"emoji" in tool ? tool.emoji : ""}</span>
                }
                <span>{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I BRING / SKILLSET */}
      <section className="skl-section" id="skillset">
        <div className="skl-wrap">
          <div className="skl-header">
            <div className="skl-label">— What I Bring —</div>
            <h2 className="skl-title"><span className="skl-title-accent">Hybrid</span> Skillset</h2>
            <p className="skl-subtitle">CRM builds, automations, and AI workflows — all designed around one goal: giving you your time back.</p>
            <div className="skl-search">
              <div className="skl-search-wrap">
                <span className="skl-search-icon">🔍</span>
                <div className="skl-search-input" style={{pointerEvents:"none",userSelect:"none"}}><span>{skillSearchText}</span><span className="skl-search-cursor">|</span></div>
              </div>
            </div>
          </div>
          <div className="skl-grid">
            {(()=>{
              return SKILLSET.map(s=>(
                <div className="skl-card" key={s.num}>
                  <div className="skl-grid-lines"><div className="skl-gline skl-gline-h skl-gline-h1"/><div className="skl-gline skl-gline-h skl-gline-h2"/><div className="skl-gline skl-gline-v skl-gline-v1"/><div className="skl-gline skl-gline-v skl-gline-v2"/></div>
                  <div className="skl-card-top">
                    <div className="skl-card-icon">{s.icon}</div>
                    <div className="skl-card-num">{s.num}</div>
                  </div>
                  <div className="skl-card-title">{s.title}</div>
                  <p className="skl-card-desc">{s.desc}</p>
                  <div className="skl-tags">
                    {s.tags.map(tag=><span className="skl-tag" key={tag}>{tag}</span>)}
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="proj-section" id="projects">
        <div className="proj-section-header">
          <h2 className="proj-section-title">Featured <span className="proj-section-title-grad">Projects</span></h2>
        </div>
        <MarqueeRow direction="left" projects={[...ZAPIER_PROJECTS, ...GHL_PROJECTS]} onOpen={setActiveProject} keyPrefix="r1" />
        <MarqueeRow direction="right" projects={[...N8N_PROJECTS, ...ZAPIER_PROJECTS]} onOpen={setActiveProject} keyPrefix="r2" />
      </section>

      <div className="section-divider" />

      {/* HOW IT WORKS / SOLUTIONS */}
      <section className="sol-section" id="solutions">
        <div className="sol-wrap">
          <div className="sol-inner">
            <div className="sol-header">
              <div className="sol-eyebrow">Process</div>
              <h2 className="sol-title">How It <span className="sol-title-grad">Works</span></h2>
              <p className="sol-subtitle">A simple, proven 5-step process to transform your business with custom automation — from first call to ongoing results.</p>
            </div>
            <HowItWorksSteps steps={STEPS} />
            <div className="sol-cta">
              <a href="#contact" className="sol-btn">📅 BOOK YOUR FREE DISCOVERY CALL <span className="sol-btn-arrow">→</span></a>
              <p className="sol-cta-sub">15 min · No obligations · 100% free</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <div className="section-divider" />
      <WhyWorkWithMe />

      <div className="section-divider" />
      <Testimonials />

      {/* CONTACT */}
      <div className="section-divider" />
      <section className="contact-section" id="contact">
        <div className="contact-grid">
          <div className="contact-left">
            <h2 className="contact-title">It Starts <span>Here</span></h2>
            <p className="contact-intro">Every automated business starts with one conversation. Yours is 30 minutes away.</p>
            <p className="contact-pick">Pick a time that works for you <span className="contact-arrow">&rarr;</span></p>

            <div className="contact-details">
              <p className="contact-biz">Charmed Digital Studio</p>
              <a href="mailto:hello@charmeddigitalstudio.com" className="contact-email">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                hello@charmeddigitalstudio.com
              </a>
              <div className="contact-socials">
                <a href="https://www.linkedin.com/in/charm-castanos-055345146/" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a href="https://www.upwork.com/freelancers/~019c4c3f6873ffcb85" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>
                  Upwork
                </a>
              </div>
              <p className="contact-tagline">Building systems that work while you don&apos;t.</p>
            </div>
          </div>
          <div className="contact-cal-wrap">
            <iframe
              src="https://app.charmeddigitalstudio.com/widget/booking/gA97jFQNli6Tm1jyQxDk"
              className="contact-cal"
              title="Book a Call"
              style={{opacity:1,visibility:'visible',display:'block'}}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>&copy; 2025 Charmed Digital Studio. All rights reserved.</p>
      </footer>

      <Script src="https://app.charmeddigitalstudio.com/js/form_embed.js" strategy="afterInteractive" />

      {/* MODAL */}
      {activeProject&&(
        <div className="modal-backdrop" onClick={e=>{if(e.target===e.currentTarget)setActiveProject(null);}}>
          <div className="modal-box">
            <img src={activeProject.screenshot} alt={activeProject.title} className="modal-img"/>
            <div className="modal-body">
              <div className="modal-top">
                <button className="modal-close" onClick={()=>setActiveProject(null)}>✕</button>
              </div>
              <div className="modal-title">{activeProject.title}</div>
              <div className="modal-tags">
                {activeProject.tags.map((tag,ti)=>(
                  <span key={tag} className="modal-tag" style={{color:activeProject.tagColors[ti],borderColor:`${activeProject.tagColors[ti]}33`,background:`${activeProject.tagColors[ti]}11`}}>{tag}</span>
                ))}
              </div>
              <div className="modal-section-label">How It Works</div>
              <p className="modal-text">{activeProject.fullDescription}</p>
              <div className="modal-divider"/>
              <div className="modal-section-label">Business Value</div>
              <p className="modal-text">{activeProject.businessValue}</p>
              <div className="modal-divider"/>
              <div className="modal-section-label">Why It Matters</div>
              <p className="modal-text">{activeProject.whyMatters}</p>
              <div className="modal-metrics">
                <div className="modal-metric-pill">⏱️ {activeProject.metrics[0]}</div>
                <div className="modal-metric-pill">📈 {activeProject.metrics[1]}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}