import { ArrowRight, BadgeCheck, BarChart3, LockKeyhole, Sparkles, UsersRound } from 'lucide-react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'
import Navbar from '../components/Navbar'

const features = [
  {
    icon: UsersRound,
    title: 'Easy lead collection',
    description: 'Capture project enquiries with a focused, polished form that works on every screen.',
  },
  {
    icon: LockKeyhole,
    title: 'Secure dashboard',
    description: 'Keep your pipeline organised in one private workspace built for your team.',
  },
  {
    icon: BarChart3,
    title: 'Manage lead status',
    description: 'Move each opportunity forward with clear statuses and a searchable lead list.',
  },
]

function DashboardPreview() {
  return (
    <div className="relative mx-auto max-w-[560px] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-blue-950/10 sm:p-4">
      <div className="flex items-center gap-1.5 border-b border-slate-100 pb-3">
        <span className="size-2 rounded-full bg-rose-300" />
        <span className="size-2 rounded-full bg-amber-300" />
        <span className="size-2 rounded-full bg-emerald-300" />
        <span className="ml-3 h-5 w-28 rounded bg-slate-100" />
      </div>
      <div className="mt-4 grid grid-cols-[72px_1fr] gap-3 sm:grid-cols-[96px_1fr]">
        <div className="rounded-lg bg-slate-950 p-2.5">
          <div className="h-2 w-11 rounded bg-blue-400" />
          <div className="mt-6 space-y-3">
            <div className="h-1.5 w-full rounded bg-slate-700" />
            <div className="h-1.5 w-4/5 rounded bg-slate-700" />
            <div className="h-1.5 w-3/5 rounded bg-slate-700" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 w-20 rounded bg-slate-800" />
              <div className="mt-2 h-1.5 w-28 rounded bg-slate-100" />
            </div>
            <div className="size-6 rounded-full bg-blue-100" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[['24', 'New'], ['18', 'Contacted'], ['8', 'Closed']].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-slate-100 p-2 sm:p-3">
                <div className="text-sm font-semibold text-slate-900 sm:text-base">{value}</div>
                <div className="mt-0.5 text-[8px] text-slate-400 sm:text-[10px]">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 overflow-hidden rounded-lg border border-slate-100">
            <div className="grid grid-cols-[1.4fr_1fr_0.7fr] gap-2 bg-slate-50 px-2 py-2 text-[8px] font-medium uppercase tracking-wide text-slate-400 sm:px-3 sm:text-[10px]">
              <span>Lead</span><span>Budget</span><span>Status</span>
            </div>
            {['Aarav Mehta', 'Nisha Kapoor', 'Marcus Lee'].map((lead, index) => (
              <div key={lead} className="grid grid-cols-[1.4fr_1fr_0.7fr] items-center gap-2 border-t border-slate-100 px-2 py-2 sm:px-3">
                <span className="text-[8px] font-medium text-slate-700 sm:text-[10px]">{lead}</span>
                <span className="text-[8px] text-slate-400 sm:text-[10px]">₹75k+</span>
                <span className={`w-fit rounded-full px-1.5 py-0.5 text-[7px] font-medium sm:text-[9px] ${index === 0 ? 'bg-blue-50 text-blue-700' : index === 1 ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>
                  {index === 0 ? 'New' : index === 1 ? 'Active' : 'Closed'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/** The public SaaS landing page. */
function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />

      <main id="home">
        <section className="relative overflow-hidden px-5 pb-[72px] pt-16 sm:px-8 sm:pt-24 lg:px-10 lg:pb-24">
          <div className="absolute inset-x-0 top-0 -z-0 mx-auto h-80 max-w-5xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/70 via-slate-50 to-transparent blur-2xl" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                <Sparkles size={14} />
                A calmer way to manage leads
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Turn every enquiry into your next opportunity.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                LeadDesk Mini helps growing teams collect, organise, and follow up on sales leads without the clutter.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#contact">
                  <Button size="lg" variant="primary" className=" sm:w-auto">
                    Start collecting leads <ArrowRight size={17} />
                  </Button>
                </a>
                <span className="inline-flex items-center justify-center gap-1.5 text-sm text-slate-500 sm:justify-start">
                  <BadgeCheck size={16} className="text-emerald-600" /> No setup required
                </span>
              </div>
            </div>
            <DashboardPreview />
          </div>
        </section>

        <section id="features" className="border-y border-slate-200 bg-white px-5 py-[72px] sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-blue-700">Everything you need</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Less admin. More momentum.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {features.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-slate-200/60">
                  <span className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700"><Icon size={20} /></span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-[72px] sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="pt-3">
              <p className="text-sm font-semibold text-blue-700">Let&apos;s work together</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">A good conversation starts here.</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-slate-600">Share a few details about your goals. We&apos;ll help you take the next step with confidence.</p>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage
