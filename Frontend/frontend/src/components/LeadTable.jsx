import { Mail, MoreHorizontal } from 'lucide-react'
import StatusBadge from './StatusBadge'

const statuses = ['New', 'Contacted', 'Closed']

function StatusSelect({ lead, onStatusChange }) {
  return (
    <select
      value={lead.status}
      aria-label={`Change status for ${lead.name}`}
      className="h-8 rounded-md border border-slate-200 bg-white px-2 text-xs font-medium text-slate-700 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      onChange={(event) => onStatusChange(lead.id, event.target.value)}
    >
      {statuses.map((status) => <option key={status}>{status}</option>)}
    </select>
  )
}

/** Responsive lead list. The parent owns the data and handles status updates. */
function LeadTable({ leads, onStatusChange }) {
  if (!leads.length) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
        <p className="font-medium text-slate-800">No leads found</p>
        <p className="mt-1 text-sm text-slate-500">Try a different search term.</p>
      </div>
    )
  }

  return (
    <>
      <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] text-left">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="px-5 py-3.5">Name</th>
                <th className="px-5 py-3.5">Email</th>
                <th className="px-5 py-3.5">Budget</th>
                <th className="max-w-[240px] px-5 py-3.5">Message</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Created</th>
                <th className="px-5 py-3.5"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.map((lead) => (
                <tr key={lead.id} className="transition-colors hover:bg-slate-50/80">
                  <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-slate-900">{lead.name}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{lead.email}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{lead.budget}</td>
                  <td className="max-w-[240px] truncate px-5 py-4 text-sm text-slate-600" title={lead.message}>{lead.message}</td>
                  <td className="px-5 py-4"><StatusBadge status={lead.status} /></td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">{lead.createdAt}</td>
                  <td className="whitespace-nowrap px-5 py-4">
                    <div className="flex items-center gap-2">
                      <StatusSelect lead={lead} onStatusChange={onStatusChange} />
                      <button type="button" aria-label={`More actions for ${lead.name}`} className="grid size-8 place-items-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700">
                        <MoreHorizontal size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3 md:hidden">
        {leads.map((lead) => (
          <article key={lead.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/40">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-slate-950">{lead.name}</h3>
                <a href={`mailto:${lead.email}`} className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-700"><Mail size={14} />{lead.email}</a>
              </div>
              <StatusBadge status={lead.status} />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{lead.message}</p>
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
              <div className="text-xs text-slate-500"><span className="font-medium text-slate-700">{lead.budget}</span> · {lead.createdAt}</div>
              <StatusSelect lead={lead} onStatusChange={onStatusChange} />
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

export default LeadTable
