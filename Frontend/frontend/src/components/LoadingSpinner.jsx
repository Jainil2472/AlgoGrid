/** Accessible loading indicator with optional full-container positioning. */
function LoadingSpinner({ label = 'Loading', fullScreen = false }) {
  const spinner = (
    <div className="flex items-center gap-3 text-sm font-medium text-slate-500" role="status" aria-live="polite">
      <span className="size-5 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )

  if (fullScreen) {
    return <div className="grid min-h-screen place-items-center bg-slate-50">{spinner}</div>
  }

  return spinner
}

export default LoadingSpinner
