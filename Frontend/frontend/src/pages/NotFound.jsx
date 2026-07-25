import { ArrowLeft, SearchX } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

/** Friendly fallback for routes that do not exist. */
function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-5 py-12 text-center">
      <div className="max-w-md">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-blue-50 text-blue-700">
          <SearchX size={27} />
        </span>
        <p className="mt-7 text-sm font-semibold text-blue-700">Error 404</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-slate-950">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">The page you&apos;re looking for may have moved, or the address may be incorrect.</p>
        <Link to="/" className="mt-8 inline-block">
          <Button size="lg"><ArrowLeft size={17} /> Back to home</Button>
        </Link>
      </div>
    </main>
  )
}

export default NotFound
