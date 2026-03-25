"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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

const ICON = (n: string) => `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${n}.svg`;

const SKILLS = [
  { icon: "⚡", title: "Automation", tools: [
    { name: "n8n",    pct: 95, logo: "/n8n-color.png", filter: "" },
    { name: "Zapier", pct: 92, logo: ICON("zapier"),   filter: "invert(45%) sepia(100%) saturate(2000%) hue-rotate(5deg) brightness(100%)" },
    { name: "Make",   pct: 90, logo: ICON("make"),     filter: "invert(20%) sepia(100%) saturate(3000%) hue-rotate(250deg) brightness(90%)" },
  ]},
  { icon: "🎯", title: "CRM & Marketing", tools: [
    { name: "GoHighLevel", pct: 98, logo: "/ghl-logo.png", filter: "" },
    { name: "Pipelines",   pct: 97, logo: null, emoji: "📊" },
    { name: "Funnels",     pct: 95, logo: null, emoji: "🔻" },
  ]},
  { icon: "🤖", title: "AI & Voice Agents", tools: [
    { name: "OpenAI / GPT",  pct: 88, logo: ICON("openai"),      filter: "brightness(0%)" },
    { name: "Vapi Voice AI", pct: 85, logo: null,                 emoji: "🎤" },
    { name: "Google Gemini", pct: 80, logo: ICON("googlegemini"), filter: "invert(45%) sepia(100%) saturate(1500%) hue-rotate(195deg) brightness(95%)" },
  ]},
  { icon: "🔗", title: "Integrations & Data", tools: [
    { name: "Google Workspace", pct: 92, logo: ICON("google"),   filter: "invert(45%) sepia(100%) saturate(1500%) hue-rotate(195deg) brightness(90%)" },
    { name: "Airtable",         pct: 87, logo: ICON("airtable"), filter: "invert(55%) sepia(100%) saturate(1200%) hue-rotate(175deg) brightness(95%)" },
    { name: "Supabase",         pct: 78, logo: ICON("supabase"), filter: "invert(65%) sepia(80%) saturate(800%) hue-rotate(110deg) brightness(95%)" },
  ]},
];

const MARQUEE_TOOLS = [
  { label: "GoHighLevel",      logo: "/ghl-logo.png",      filter: "" },
  { label: "n8n",              logo: "/n8n-color.png",     filter: "" },
  { label: "Zapier",           logo: ICON("zapier"),       filter: "invert(45%) sepia(100%) saturate(2000%) hue-rotate(5deg) brightness(100%)" },
  { label: "Make",             logo: ICON("make"),         filter: "invert(20%) sepia(100%) saturate(3000%) hue-rotate(250deg) brightness(90%)" },
  { label: "OpenAI",           logo: ICON("openai"),       filter: "brightness(0%)" },
  { label: "Vapi",             logo: null,                 emoji: "🎤", filter: "" },
  { label: "Google Gemini",    logo: ICON("googlegemini"), filter: "invert(45%) sepia(100%) saturate(1500%) hue-rotate(195deg) brightness(95%)" },
  { label: "Airtable",         logo: ICON("airtable"),     filter: "invert(55%) sepia(100%) saturate(1200%) hue-rotate(175deg) brightness(95%)" },
  { label: "Google Workspace", logo: ICON("google"),       filter: "invert(45%) sepia(100%) saturate(1500%) hue-rotate(195deg) brightness(90%)" },
  { label: "Supabase",         logo: ICON("supabase"),     filter: "invert(65%) sepia(80%) saturate(800%) hue-rotate(110deg) brightness(95%)" },
  { label: "Asana",            logo: ICON("asana"),        filter: "invert(55%) sepia(80%) saturate(1000%) hue-rotate(315deg) brightness(95%)" },
  { label: "Notion",           logo: ICON("notion"),       filter: "brightness(0%)" },
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

function ProjectGroup({ group, onOpen }: { group: typeof PROJECT_GROUPS[0]; onOpen: (p: Project) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canL, setCanL] = useState(false);
  const [canR, setCanR] = useState(true);
  const chk = () => {
    const el = ref.current; if (!el) return;
    setCanL(el.scrollLeft > 10);
    setCanR(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.addEventListener("scroll", chk); chk();
    return () => el.removeEventListener("scroll", chk);
  }, []);
  const scr = (dir: "left" | "right") => {
    const el = ref.current; if (!el) return;
    el.scrollBy({ left: dir === "right" ? el.clientWidth * 0.75 : -el.clientWidth * 0.75, behavior: "smooth" });
  };
  return (
    <div className="proj-group">
      <div className="proj-inner">
        <div className="proj-group-header">
          <div className="proj-group-label">
            <div className="proj-group-icon">{group.icon}</div>
            <span className="proj-group-name">{group.label}</span>
          </div>
          <div className="proj-group-arrows">
            <button className="proj-arrow" onClick={() => scr("left")}  disabled={!canL}>←</button>
            <button className="proj-arrow" onClick={() => scr("right")} disabled={!canR}>→</button>
          </div>
        </div>
      </div>
      <div className="row-wrap">
        <div className="row-track" ref={ref}>
          {group.projects.map(p => (
            <div className="proj-card" key={p.title} onClick={() => onOpen(p)} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onOpen(p)}>
              <div className="proj-thumb">
                <img src={p.screenshot} alt={p.title} loading="eager" />
                <div className="proj-thumb-overlay" />
                <div className="proj-thumb-click">View details →</div>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const typedText = useTypingAnimation();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("cds-theme") as "light" | "dark" | null;
    if (saved) setTheme(saved);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("cds-theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme(t => t === "light" ? "dark" : "light");
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveProject(null); };
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h);
  }, []);
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeProject]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@700;800;900&family=Dancing+Script:wght@600;700&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }

        :root {
          --nav-bg: rgba(253,240,237,0.95); --card-bg: rgba(255,255,255,0.65);
          --card-border: rgba(180,145,140,0.22); --shadow: 0 6px 28px rgba(80,20,10,0.09);
          --shadow-hover: 0 14px 42px rgba(80,20,10,0.17); --text-primary: #1a0808;
          --text-secondary: #3e2723; --text-muted: #7a5550; --btn-bg: #330a0a;
          --btn-text: #efefef; --btn2-border: rgba(62,39,35,0.42); --btn2-text: #3e2723;
          --toggle-bg: rgba(62,39,35,0.10); --icon-bg: rgba(51,10,10,0.07);
          --divider: rgba(180,145,140,0.35); --typing-color: #330a0a;
          --section-bg: rgba(255,255,255,0.35); --bar-bg: rgba(180,145,140,0.18);
          --bar-fill-start: #330a0a; --bar-fill-end: #a84040; --modal-bg: rgba(253,240,237,0.99);
          --mw: 1380px; --sp: 56px;
        }
        [data-theme="dark"] {
          --nav-bg: rgba(10,2,2,0.95); --card-bg: rgba(255,255,255,0.055);
          --card-border: rgba(204,197,185,0.13); --shadow: 0 6px 28px rgba(0,0,0,0.42);
          --shadow-hover: 0 14px 42px rgba(0,0,0,0.62); --text-primary: #f0ebe8;
          --text-secondary: #ccc5b9; --text-muted: #9a8880; --btn-bg: #e8c4bc;
          --btn-text: #1a0808; --btn2-border: rgba(204,197,185,0.4); --btn2-text: #ccc5b9;
          --toggle-bg: rgba(204,197,185,0.12); --icon-bg: rgba(232,196,188,0.10);
          --divider: rgba(204,197,185,0.15); --typing-color: #e8c4bc;
          --section-bg: rgba(255,255,255,0.03); --bar-bg: rgba(204,197,185,0.12);
          --bar-fill-start: #e8c4bc; --bar-fill-end: #a84040; --modal-bg: rgba(13,2,2,0.99);
        }

        body { font-family:'Poppins',sans-serif; min-height:100vh; color:var(--text-primary); transition:background 0.5s,color 0.4s;
          background: radial-gradient(ellipse at 10% 10%,#c9908a 0%,transparent 42%), radial-gradient(ellipse at 85% 85%,#d4a09a 0%,transparent 48%), linear-gradient(160deg,#fdf0ed 0%,#fff8f6 45%,#f7ece8 100%); }
        [data-theme="dark"] body { background: radial-gradient(ellipse at 5% 5%,#200808 0%,transparent 50%), radial-gradient(ellipse at 90% 90%,#071820 0%,transparent 55%), linear-gradient(160deg,#0d0202 0%,#150606 40%,#091420 100%); }

        .grad-text { background:linear-gradient(110deg,#000 0%,#330a0a 28%,#6b1a1a 52%,#a84040 72%,#c9908a 90%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; }
        [data-theme="dark"] .grad-text { background:linear-gradient(110deg,#f0ebe8 0%,#e8c4bc 28%,#c9908a 52%,#a84040 72%,#330a0a 92%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }

        .cds-nav { position:fixed; top:0; left:0; right:0; z-index:999; height:70px; display:flex; align-items:center; justify-content:space-between; padding:0 48px; gap:16px; background:var(--nav-bg); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border-bottom:1px solid var(--divider); transition:background 0.5s,border-color 0.4s; }
        .cds-logo { text-decoration:none; display:flex; align-items:center; flex-shrink:0; }
        .cds-nav-right { display:flex; align-items:center; gap:4px; }
        .cds-nav-links { list-style:none; display:flex; align-items:center; gap:2px; margin-right:12px; }
        .cds-nav-links a { text-decoration:none; font-size:13.5px; font-weight:500; color:var(--text-secondary); padding:7px 13px; border-radius:9px; transition:all 0.2s; white-space:nowrap; }
        .cds-nav-links a:hover { color:var(--text-primary); background:var(--card-bg); }
        .cds-btn-book-nav { display:flex; align-items:center; gap:7px; padding:9px 20px; background:var(--btn-bg); color:var(--btn-text); border-radius:10px; font-family:'Poppins',sans-serif; font-size:13px; font-weight:700; text-decoration:none; white-space:nowrap; border:none; cursor:pointer; transition:all 0.25s; margin-left:8px; }
        .cds-btn-book-nav:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(51,10,10,0.28); opacity:.88; }
        .cds-theme-toggle { width:40px; height:40px; border-radius:10px; border:1px solid var(--card-border); background:var(--toggle-bg); cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:17px; flex-shrink:0; margin-left:6px; transition:all 0.25s; }
        .cds-theme-toggle:hover { transform:scale(1.1) rotate(12deg); }

        .cds-hero { min-height:100vh; display:flex; align-items:center; padding:90px var(--sp) 50px; gap:48px; max-width:var(--mw); margin:0 auto; }
        .cds-hero-left { flex:1; max-width:500px; display:flex; flex-direction:column; }
        .cds-eyebrow { font-size:11px; font-weight:700; letter-spacing:3.5px; text-transform:uppercase; color:var(--text-muted); margin-bottom:12px; opacity:0; animation:slideUp 0.6s ease 0.1s forwards; }
        .cds-heading { font-family:'Poppins',sans-serif; font-weight:900; font-size:clamp(36px,4.2vw,60px); line-height:1.05; color:var(--text-primary); white-space:nowrap; margin-bottom:14px; opacity:0; animation:slideUp 0.6s ease 0.18s forwards; }
        .cds-subtitle-wrap { min-height:36px; margin-bottom:20px; opacity:0; animation:slideUp 0.6s ease 0.26s forwards; }
        .cds-subtitle { font-size:clamp(16px,1.7vw,21px); font-weight:700; color:var(--typing-color); display:inline; }
        .cds-cursor { display:inline-block; width:3px; height:1.1em; background:var(--typing-color); margin-left:3px; vertical-align:text-bottom; border-radius:2px; animation:cursorBlink 0.75s step-end infinite; }
        @keyframes cursorBlink{0%,100%{opacity:1}50%{opacity:0}}
        .cds-desc { font-size:14.5px; color:var(--text-muted); line-height:1.84; max-width:440px; margin-bottom:34px; opacity:0; animation:slideUp 0.6s ease 0.33s forwards; }
        .cds-desc strong { font-weight:700; color:var(--text-secondary); }
        .cds-ctas { display:flex; gap:13px; flex-wrap:wrap; opacity:0; animation:slideUp 0.6s ease 0.40s forwards; }
        .cds-btn-primary { display:flex; align-items:center; gap:9px; padding:13px 26px; background:var(--btn-bg); color:var(--btn-text); border-radius:12px; font-family:'Poppins',sans-serif; font-size:14px; font-weight:700; text-decoration:none; transition:all 0.25s; }
        .cds-btn-primary:hover { transform:translateY(-2px); box-shadow:0 10px 26px rgba(51,10,10,0.28); opacity:.9; }
        .cds-btn-secondary { display:flex; align-items:center; gap:9px; padding:13px 26px; background:transparent; color:var(--btn2-text); border:1.5px solid var(--btn2-border); border-radius:12px; font-family:'Poppins',sans-serif; font-size:14px; font-weight:600; text-decoration:none; transition:all 0.25s; }
        .cds-btn-secondary:hover { transform:translateY(-2px); background:var(--card-bg); }
        .cds-hero-right { flex:1.2; display:flex; align-items:center; justify-content:flex-end; gap:20px; opacity:0; animation:slideUp 0.7s ease 0.28s forwards; }
        .cds-photo-col { position:relative; flex-shrink:0; }
        .cds-photo-frame { width:280px; height:360px; border-radius:24px; overflow:hidden; box-shadow:var(--shadow); border:2px solid var(--card-border); position:relative; }
        .cds-status-badge { position:absolute; bottom:-16px; left:50%; transform:translateX(-50%); z-index:2; background:var(--card-bg); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border:1px solid var(--card-border); border-radius:40px; padding:7px 14px; display:flex; align-items:center; gap:8px; white-space:nowrap; font-size:10.5px; font-weight:600; color:var(--text-secondary); box-shadow:var(--shadow); }
        .cds-status-dot { width:7px; height:7px; border-radius:50%; background:#22c55e; flex-shrink:0; animation:blink 2s ease-in-out infinite; }
        .cds-stats-col { display:flex; flex-direction:column; gap:12px; flex-shrink:0; }
        .cds-stat-card { background:var(--card-bg); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border:1px solid var(--card-border); border-radius:16px; padding:16px 18px; display:flex; align-items:center; gap:14px; box-shadow:var(--shadow); width:210px; transition:transform 0.28s,box-shadow 0.28s; cursor:default; }
        .cds-stat-card:hover { transform:translateY(-3px) translateX(-2px); box-shadow:var(--shadow-hover); }
        .cds-stat-icon { width:40px; height:40px; border-radius:10px; background:var(--icon-bg); display:flex; align-items:center; justify-content:center; font-size:18px; flex-shrink:0; }
        .cds-stat-num { font-family:'Poppins',sans-serif; font-weight:800; font-size:20px; line-height:1.1; display:inline-block; background:linear-gradient(110deg,#000 0%,#330a0a 28%,#6b1a1a 52%,#a84040 72%,#c9908a 90%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        [data-theme="dark"] .cds-stat-num { background:linear-gradient(110deg,#f0ebe8 0%,#e8c4bc 28%,#c9908a 52%,#a84040 72%,#330a0a 92%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .cds-stat-lbl { font-size:10.5px; font-weight:500; color:var(--text-muted); line-height:1.4; margin-top:2px; }

        .section-divider { position:relative; width:100%; height:2px; overflow:visible; }
        .section-divider::before { content:''; position:absolute; top:0; left:50%; transform:translateX(-50%); width:60%; height:1px; background:linear-gradient(90deg,transparent,#330a0a 20%,#a84040 50%,#330a0a 80%,transparent); animation:lineExpand 3s ease-in-out infinite; opacity:.5; }
        .section-divider::after { content:''; position:absolute; top:-3px; left:50%; transform:translateX(-50%); width:40%; height:7px; border-radius:99px; background:linear-gradient(90deg,transparent,rgba(168,64,64,.6) 35%,rgba(201,144,138,.9) 50%,rgba(168,64,64,.6) 65%,transparent); filter:blur(4px); animation:glowPulse 3s ease-in-out infinite; }
        @keyframes lineExpand{0%{width:0%;opacity:0}50%{width:75%;opacity:1}100%{width:0%;opacity:0}}
        @keyframes glowPulse{0%{width:0%;opacity:0}50%{width:50%;opacity:1}100%{width:0%;opacity:0}}

        .exp-section { width:100%; padding-top:80px; padding-bottom:0; }
        .exp-content-wrap { max-width:var(--mw); margin:0 auto; padding:0 var(--sp); margin-bottom:32px; }
        .exp-inner { background:var(--section-bg); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border:1px solid var(--card-border); border-radius:32px; padding:64px var(--sp) 52px; overflow:hidden; }
        .exp-header { text-align:center; margin-bottom:52px; }
        .exp-eyebrow { font-size:11px; font-weight:700; letter-spacing:4px; text-transform:uppercase; background:linear-gradient(110deg,#330a0a,#a84040 60%,#c9908a); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; margin-bottom:14px; }
        .exp-title { font-family:'Poppins',sans-serif; font-weight:900; font-size:clamp(26px,3vw,42px); color:var(--text-primary); line-height:1.1; }
        .exp-title-grad { background:linear-gradient(110deg,#330a0a,#6b1a1a 45%,#a84040 80%,#c9908a); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; }
        [data-theme="dark"] .exp-title-grad { background:linear-gradient(110deg,#e8c4bc,#c9908a 50%,#a84040); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .exp-cards { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
        .exp-card { background:var(--card-bg); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border:1px solid var(--card-border); border-radius:20px; padding:26px 22px; box-shadow:var(--shadow); transition:transform 0.28s,box-shadow 0.28s; }
        .exp-card:hover { transform:translateY(-5px); box-shadow:var(--shadow-hover); }
        .exp-card-icon { width:46px; height:46px; border-radius:13px; background:var(--icon-bg); display:flex; align-items:center; justify-content:center; font-size:21px; margin-bottom:16px; }
        .exp-card-title { font-family:'Poppins',sans-serif; font-weight:700; font-size:15px; color:var(--text-primary); margin-bottom:18px; }
        .exp-tool-row { margin-bottom:13px; } .exp-tool-row:last-child { margin-bottom:0; }
        .exp-tool-meta { display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; }
        .exp-tool-name-wrap { display:flex; align-items:center; gap:8px; }
        .tool-logo { width:16px; height:16px; object-fit:contain; flex-shrink:0; }
        .tool-emoji { font-size:15px; line-height:1; flex-shrink:0; }
        .exp-tool-name { font-size:12.5px; font-weight:500; color:var(--text-secondary); }
        .exp-tool-pct { font-size:12px; font-weight:700; background:linear-gradient(110deg,#330a0a,#a84040); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; flex-shrink:0; }
        [data-theme="dark"] .exp-tool-pct { background:linear-gradient(110deg,#e8c4bc,#c9908a); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .exp-bar-track { height:5px; background:var(--bar-bg); border-radius:99px; overflow:hidden; }
        .exp-bar-fill { height:100%; border-radius:99px; background:linear-gradient(90deg,var(--bar-fill-start),var(--bar-fill-end)); transform-origin:left; animation:barGrow 1.2s cubic-bezier(0.4,0,0.2,1) forwards; transform:scaleX(0); }
        @keyframes barGrow{from{transform:scaleX(0)}to{transform:scaleX(1)}}

        .exp-marquee-wrap { width:100%; overflow:hidden; padding:28px 0; }
        .exp-marquee-track { display:flex; gap:10px; width:max-content; animation:marqueeScroll 30s linear infinite; }
        .exp-marquee-wrap:hover .exp-marquee-track { animation-play-state:paused; }
        @keyframes marqueeScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .exp-marquee-pill { display:flex; align-items:center; gap:8px; padding:8px 16px; background:var(--card-bg); border:1px solid var(--card-border); border-radius:40px; white-space:nowrap; font-size:12.5px; font-weight:600; color:var(--text-secondary); box-shadow:var(--shadow); flex-shrink:0; margin-left:10px; transition:transform 0.2s; }
        .exp-marquee-pill:hover { transform:scale(1.05); }
        .marquee-logo { width:15px; height:15px; object-fit:contain; flex-shrink:0; }

        .proj-section { padding:80px 0 100px; }
        .proj-section-header { max-width:var(--mw); margin:0 auto 48px; padding:0 var(--sp); text-align:center; }
        .proj-section-title { font-family:'Poppins',sans-serif; font-weight:900; font-size:clamp(28px,3.2vw,44px); color:var(--text-primary); line-height:1.1; }
        .proj-section-title-grad { background:linear-gradient(110deg,#330a0a,#6b1a1a 45%,#a84040 80%,#c9908a); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; }
        [data-theme="dark"] .proj-section-title-grad { background:linear-gradient(110deg,#e8c4bc,#c9908a 50%,#a84040); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .proj-group { margin-bottom:64px; } .proj-group:last-child { margin-bottom:0; }
        .proj-inner { max-width:var(--mw); margin:0 auto; padding:0 var(--sp); }
        .proj-group-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; }
        .proj-group-label { display:flex; align-items:center; gap:10px; }
        .proj-group-icon { width:36px; height:36px; border-radius:10px; background:var(--icon-bg); display:flex; align-items:center; justify-content:center; font-size:17px; flex-shrink:0; }
        .proj-group-name { font-family:'Poppins',sans-serif; font-weight:700; font-size:17px; color:var(--text-primary); }
        .proj-group-arrows { display:flex; gap:8px; }
        .proj-arrow { width:38px; height:38px; border-radius:10px; border:1.5px solid var(--card-border); background:var(--card-bg); cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:16px; transition:all 0.22s; color:var(--text-primary); }
        .proj-arrow:hover:not(:disabled) { background:var(--btn-bg); color:var(--btn-text); border-color:var(--btn-bg); transform:scale(1.06); box-shadow:0 4px 16px rgba(51,10,10,.25); }
        .proj-arrow:disabled { opacity:.22; cursor:not-allowed; }
        .row-wrap { max-width:var(--mw); margin:0 auto; padding:0 var(--sp); overflow:hidden; }
        .row-track { display:flex; gap:20px; overflow-x:auto; overflow-y:hidden; scroll-snap-type:x mandatory; padding:10px 0 24px; scrollbar-width:none; -ms-overflow-style:none; }
        .row-track::-webkit-scrollbar { display:none; }
        .proj-card { flex:0 0 calc((100% - 40px) / 3); scroll-snap-align:start; background:var(--card-bg); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border:1px solid var(--card-border); border-radius:20px; overflow:hidden; box-shadow:var(--shadow); transition:transform 0.3s,box-shadow 0.3s,border-color 0.2s; display:flex; flex-direction:column; cursor:pointer; min-width:0; }
        .proj-card:hover { transform:translateY(-5px); box-shadow:var(--shadow-hover); border-color:rgba(168,64,64,.35); }
        .proj-thumb { height:180px; position:relative; overflow:hidden; flex-shrink:0; background:linear-gradient(135deg,#1a0808,#330a0a 50%,#5a1a1a); }
        .proj-thumb img { width:100%; height:100%; object-fit:cover; object-position:top center; display:block; transition:transform 0.4s; }
        .proj-card:hover .proj-thumb img { transform:scale(1.04); }
        .proj-thumb-overlay { position:absolute; bottom:0; left:0; right:0; height:50%; background:linear-gradient(to top,var(--card-bg),transparent); z-index:1; pointer-events:none; }
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
        .sol-inner { background:var(--section-bg); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border:1px solid var(--card-border); border-radius:32px; padding:64px var(--sp) 56px; }
        .sol-header { text-align:center; margin-bottom:60px; }
        .sol-eyebrow { font-size:11px; font-weight:700; letter-spacing:4px; text-transform:uppercase; background:linear-gradient(110deg,#330a0a,#a84040 60%,#c9908a); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; margin-bottom:14px; }
        .sol-title { font-family:'Poppins',sans-serif; font-weight:900; font-size:clamp(28px,3.2vw,44px); color:var(--text-primary); line-height:1.1; margin-bottom:14px; }
        .sol-title-grad { background:linear-gradient(110deg,#330a0a,#6b1a1a 45%,#a84040 80%,#c9908a); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; display:inline-block; }
        [data-theme="dark"] .sol-title-grad { background:linear-gradient(110deg,#e8c4bc,#c9908a 50%,#a84040); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .sol-subtitle { font-size:15px; color:var(--text-muted); max-width:520px; margin:0 auto; line-height:1.7; }
        .sol-steps { position:relative; display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:56px; }
        .sol-line-track { position:absolute; top:36px; left:calc(10% + 4px); right:calc(10% + 4px); height:2px; background:linear-gradient(90deg,transparent,rgba(168,64,64,0.25) 20%,rgba(168,64,64,0.35) 50%,rgba(168,64,64,0.25) 80%,transparent); z-index:0; border-radius:99px; overflow:visible; }
        .sol-dot { position:absolute; top:50%; transform:translate(-50%,-50%); width:12px; height:12px; border-radius:50%; background:linear-gradient(135deg,#330a0a,#a84040); box-shadow:0 0 10px rgba(168,64,64,0.8),0 0 24px rgba(168,64,64,0.4); animation:dotTravel 5s ease-in-out infinite; z-index:2; }
        @keyframes dotTravel {
          0%   { left:0%;   opacity:1; }
          8%   { left:0%;   }
          22%  { left:25%;  }
          30%  { left:25%;  }
          44%  { left:50%;  }
          52%  { left:50%;  }
          66%  { left:75%;  }
          74%  { left:75%;  }
          90%  { left:100%; }
          96%  { left:100%; opacity:1; }
          99%  { left:100%; opacity:0; }
          100% { left:0%;   opacity:0; }
        }
        .sol-step { flex:1; display:flex; flex-direction:column; align-items:center; text-align:center; padding:0 10px; position:relative; z-index:1; }
        .sol-step-icon-wrap { position:relative; width:72px; height:72px; border-radius:20px; background:var(--card-bg); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border:1.5px solid var(--card-border); box-shadow:var(--shadow); display:flex; align-items:center; justify-content:center; font-size:26px; margin-bottom:18px; transition:transform 0.28s,box-shadow 0.28s; }
        .sol-step:hover .sol-step-icon-wrap { transform:translateY(-4px); box-shadow:var(--shadow-hover); border-color:rgba(168,64,64,0.35); }
        .sol-step-num { position:absolute; top:-9px; right:-9px; width:22px; height:22px; border-radius:50%; background:linear-gradient(135deg,#330a0a,#a84040); color:#efefef; font-size:10px; font-weight:800; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(51,10,10,0.35); border:1.5px solid var(--section-bg); }
        .sol-step-label { font-size:10px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:var(--text-muted); margin-bottom:6px; }
        .sol-step-title { font-family:'Poppins',sans-serif; font-weight:700; font-size:15px; color:var(--text-primary); margin-bottom:10px; line-height:1.3; }
        .sol-step-desc { font-size:12.5px; color:var(--text-muted); line-height:1.75; max-width:190px; }
        .sol-cta { display:flex; flex-direction:column; align-items:center; gap:10px; padding-top:8px; }
        .sol-btn { display:inline-flex; align-items:center; gap:10px; padding:15px 36px; background:var(--btn-bg); color:var(--btn-text); border-radius:50px; font-family:'Poppins',sans-serif; font-size:14.5px; font-weight:700; text-decoration:none; transition:all 0.25s; box-shadow:0 6px 24px rgba(51,10,10,0.28); }
        .sol-btn:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(51,10,10,0.35); opacity:0.9; }
        .sol-cta-sub { font-size:12px; color:var(--text-muted); }

        .modal-backdrop { position:fixed; inset:0; z-index:1000; background:rgba(0,0,0,.6); backdrop-filter:blur(8px); display:flex; align-items:center; justify-content:center; padding:24px; animation:fadeIn 0.25s; }
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .modal-box { background:var(--modal-bg); border:1px solid var(--card-border); border-radius:28px; max-width:760px; width:100%; max-height:88vh; overflow-y:auto; box-shadow:0 24px 80px rgba(0,0,0,.4); animation:scaleIn 0.28s cubic-bezier(0.34,1.56,0.64,1); scrollbar-width:thin; scrollbar-color:var(--card-border) transparent; }
        @keyframes scaleIn{from{opacity:0;transform:scale(0.92)}to{opacity:1;transform:scale(1)}}
        .modal-img { width:100%; height:260px; object-fit:cover; object-position:top center; border-radius:28px 28px 0 0; display:block; }
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

        @keyframes slideUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        @keyframes blink{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(34,197,94,.5)}50%{opacity:.7;box-shadow:0 0 0 5px rgba(34,197,94,0)}}

        @media(max-width:1200px){
          :root{ --sp:32px; --mw:100%; }
          .cds-nav{padding:0 24px} .cds-nav-links{display:none}
          .cds-photo-frame{width:240px;height:310px} .cds-stat-card{width:185px}
          .exp-cards{grid-template-columns:repeat(2,1fr)}
          .proj-card{flex:0 0 calc((100% - 20px) / 2)}
          .modal-body{padding:24px 28px 28px}
        }
        @media(max-width:900px){
          .sol-steps{flex-direction:column;align-items:center;gap:32px}
          .sol-line-track{display:none}
          .sol-step{flex-direction:row;text-align:left;width:100%;max-width:420px;gap:18px}
          .sol-step-icon-wrap{flex-shrink:0;margin-bottom:0}
          .sol-step-desc{max-width:100%}
        }
        @media(max-width:820px){
          :root{ --sp:20px; }
          .cds-heading{white-space:normal}
          .cds-hero{flex-direction:column;align-items:flex-start;gap:40px}
          .cds-hero-left{max-width:100%} .cds-hero-right{width:100%;justify-content:center;flex-wrap:wrap}
          .cds-photo-frame{width:220px;height:280px} .cds-stat-card{width:160px}
          .exp-inner{padding:36px var(--sp) 36px;border-radius:24px} .exp-cards{grid-template-columns:1fr}
          .proj-card{flex:0 0 80vw}
          .modal-box{border-radius:20px} .modal-img{height:200px;border-radius:20px 20px 0 0} .modal-body{padding:20px 22px 24px}
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="cds-nav">
        <a href="#" className="cds-logo">
          <Image src="/logo-new.png" alt="Charmed Digital Studio" width={140} height={44} style={{ objectFit:"contain" }} priority />
        </a>
        <div className="cds-nav-right">
          <ul className="cds-nav-links">
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="cds-btn-book-nav">📅 Book a Call</a>
          <button className="cds-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">{theme==="dark"?"☀️":"🌙"}</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="cds-hero">
        <div className="cds-hero-left">
          <p className="cds-eyebrow">Charm Castanos</p>
          <h1 className="cds-heading">HEY! I&apos;M <span className="grad-text">CHARM</span></h1>
          <div className="cds-subtitle-wrap">
            <span className="cds-subtitle">{typedText}</span>
            <span className="cds-cursor" />
          </div>
          <p className="cds-desc">I help businesses <strong>eliminate manual work</strong>, build powerful CRM systems, and automate their entire client journey — so you can focus on what actually grows your business.</p>
          <div className="cds-ctas">
            <a href="#contact" className="cds-btn-primary">📅 Book a Free Call</a>
            <a href="#projects" className="cds-btn-secondary">▷ &nbsp;See My Work</a>
          </div>
        </div>
        <div className="cds-hero-right">
          <div className="cds-photo-col">
            <div className="cds-photo-frame">
              <Image src="/profile.png" alt="Charm Castanos" fill style={{ objectFit:"cover", objectPosition:"top center" }} sizes="(max-width:820px) 220px,280px" priority />
            </div>
            <div className="cds-status-badge"><span className="cds-status-dot"></span>Available for Projects — Limited Slots</div>
          </div>
          <div className="cds-stats-col">
            {[{icon:"⚡",num:"10x",lbl:"Faster Workflows"},{icon:"⏱️",num:"500+",lbl:"Hours Saved per Client"},{icon:"⭐",num:"98%",lbl:"Client Satisfaction"},{icon:"💼",num:"3+",lbl:"Years Professional Experience"}].map(s=>(
              <div className="cds-stat-card" key={s.num}>
                <div className="cds-stat-icon">{s.icon}</div>
                <div><div className="cds-stat-num">{s.num}</div><div className="cds-stat-lbl">{s.lbl}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* EXPERTISE */}
      <section className="exp-section" id="expertise">
        <div className="exp-content-wrap">
          <div className="exp-inner">
            <div className="exp-header">
              <div className="exp-eyebrow">Expertise</div>
              <h2 className="exp-title">Skills &amp; Tools — <span className="exp-title-grad">What I Work With</span></h2>
            </div>
            <div className="exp-cards">
              {SKILLS.map(card=>(
                <div className="exp-card" key={card.title}>
                  <div className="exp-card-icon">{card.icon}</div>
                  <div className="exp-card-title">{card.title}</div>
                  {card.tools.map((tool,i)=>(
                    <div className="exp-tool-row" key={tool.name}>
                      <div className="exp-tool-meta">
                        <div className="exp-tool-name-wrap">
                          {"logo" in tool && tool.logo
                            ? <img src={tool.logo} alt={tool.name} className="tool-logo" style={{filter: tool.filter || undefined}} />
                            : <span className="tool-emoji">{"emoji" in tool ? tool.emoji : "🔧"}</span>
                          }
                          <span className="exp-tool-name">{tool.name}</span>
                        </div>
                        <span className="exp-tool-pct">{tool.pct}%</span>
                      </div>
                      <div className="exp-bar-track"><div className="exp-bar-fill" style={{width:`${tool.pct}%`,animationDelay:`${0.2+i*0.15}s`}}/></div>
                    </div>
                  ))}
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

      {/* PROJECTS */}
      <section className="proj-section" id="projects">
        <div className="proj-section-header">
          <h2 className="proj-section-title">Featured <span className="proj-section-title-grad">Projects</span></h2>
        </div>
        {PROJECT_GROUPS.map(group=>(
          <ProjectGroup key={group.id} group={group} onOpen={setActiveProject} />
        ))}
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
            <div className="sol-steps">
              <div className="sol-line-track">
                <div className="sol-dot" />
              </div>
              {STEPS.map((step, i) => (
                <div className="sol-step" key={step.title}>
                  <div className="sol-step-icon-wrap">
                    <div className="sol-step-num">{i + 1}</div>
                    <span>{step.icon}</span>
                  </div>
                  <div className="sol-step-label">Step 0{i + 1}</div>
                  <div className="sol-step-title">{step.title}</div>
                  <p className="sol-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="sol-cta">
              <a href="#contact" className="sol-btn">📅 Book Your Free Discovery Call →</a>
              <p className="sol-cta-sub">15 min · No obligations · 100% free</p>
            </div>
          </div>
        </div>
      </section>

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