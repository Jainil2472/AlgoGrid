import { useEffect, useState } from 'react'
import { CheckCircle2, Inbox, MessageSquareText, UsersRound } from 'lucide-react'
import toast from 'react-hot-toast'
import LeadTable from '../components/LeadTable'
import SearchBar from '../components/SearchBar'
import { getApiError } from '../services/api'
import { getLeads, updateLeadStatus } from '../services/leadService'

const statConfig = [
  { label: 'New leads', status: 'New', icon: Inbox, iconClass: 'bg-blue-50 text-blue-700' },
  { label: 'Contacted', status: 'Contacted', icon: MessageSquareText, iconClass: 'bg-amber-50 text-amber-700' },
  { label: 'Closed', status: 'Closed', icon: CheckCircle2, iconClass: 'bg-emerald-50 text-emerald-700' },
]

function formatStatus(status) {
  return status.charAt(0) + status.slice(1).toLowerCase()
}

function formatLead(lead) {
  return {
    ...lead,
    budget: lead.budgetRange,
    status: formatStatus(lead.status),
    createdAt: new Date(lead.createdAt).toLocaleString(),
  }
}

function DashboardPage() {
  const [leads, setLeads] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isCurrent = true

    const loadLeads = async () => {
      setIsLoading(true)
      try {
        const response = await getLeads(searchQuery)
        if (isCurrent) setLeads(response.map(formatLead))
      } catch (error) {
        if (isCurrent) toast.error(getApiError(error, 'Unable to load leads.'))
      } finally {
        if (isCurrent) setIsLoading(false)
      }
    }

    loadLeads()
    return () => {
      isCurrent = false
    }
  }, [searchQuery])

  const handleStatusChange = async (leadId, status) => {
    try {
      const updatedLead = await updateLeadStatus(leadId, status.toUpperCase())
      setLeads((currentLeads) => currentLeads.map((lead) => (
        lead.id === leadId ? formatLead(updatedLead) : lead
      )))
      toast.success('Lead status updated.')
    } catch (error) {
      toast.error(getApiError(error, 'Unable to update lead status.'))
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-700">Lead management</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">Your dashboard</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">Review new enquiries and keep every opportunity moving.</p>
        </div>
        <div className="inline-flex items-center gap-2 text-sm text-slate-500">
          <UsersRound size={17} className="text-blue-600" /> {leads.length} total leads
        </div>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-3" aria-label="Lead statistics">
        {statConfig.map(({ label, status, icon: Icon, iconClass }) => {
          const count = leads.filter((lead) => lead.status === status).length
          return (
            <article key={status} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
              <div className="flex items-start justify-between">
                <span className={`grid size-10 place-items-center rounded-lg ${iconClass}`}><Icon size={19} /></span>
                <span className="text-2xl font-semibold tracking-tight text-slate-950">{count}</span>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-600">{label}</p>
            </article>
          )
        })}
      </section>

      <section className="mt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-950">All leads</h2>
            <p className="mt-1 text-sm text-slate-500">{isLoading ? 'Loading leads...' : `${leads.length} ${leads.length === 1 ? 'result' : 'results'}`}</p>
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        <div className="mt-4"><LeadTable leads={leads} onStatusChange={handleStatusChange} /></div>
      </section>
    </div>
  )
}

export default DashboardPage
