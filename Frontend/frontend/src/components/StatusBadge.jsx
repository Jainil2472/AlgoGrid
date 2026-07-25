const statusStyles = {
  New: 'bg-blue-50 text-blue-700 ring-blue-600/10',
  Contacted: 'bg-amber-50 text-amber-700 ring-amber-600/10',
  Closed: 'bg-emerald-50 text-emerald-700 ring-emerald-600/10',
}

/** Displays a lead status with restrained, meaningful colour. */
function StatusBadge({ status }) {
  const style = statusStyles[status] || 'bg-slate-100 text-slate-700 ring-slate-500/10'

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${style}`}>
      {status}
    </span>
  )
}

export default StatusBadge
