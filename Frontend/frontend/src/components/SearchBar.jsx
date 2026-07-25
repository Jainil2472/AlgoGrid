import { Search, X } from 'lucide-react'

/** Search control for filtering dashboard leads by name, email, or message. */
function SearchBar({ value, onChange, placeholder = 'Search leads...' }) {
  return (
    <div className="relative w-full sm:max-w-sm">
      <Search
        size={18}
        aria-hidden="true"
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
      />
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        aria-label="Search leads"
        className="h-10 w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-10 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        onChange={(event) => onChange(event.target.value)}
      />
      {value && (
        <button
          type="button"
          aria-label="Clear search"
          className="absolute right-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={() => onChange('')}
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}

export default SearchBar
