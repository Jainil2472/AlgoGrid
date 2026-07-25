import { useState } from 'react'
import { ArrowLeft, LockKeyhole } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Button from '../components/Button'
import Input from '../components/Input'
import { useAuth } from '../context/AuthContext'
import { getApiError } from '../services/api'

function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [credentials, setCredentials] = useState({ email: '', password: '', rememberMe: false })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target
    setCredentials((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (!credentials.email.trim()) nextErrors.email = 'Please enter your email address.'
    else if (!/^\S+@\S+\.\S+$/.test(credentials.email)) nextErrors.email = 'Enter a valid email address.'
    if (!credentials.password) nextErrors.password = 'Please enter your password.'

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    setIsLoading(true)
    try {
      await login(credentials)
      toast.success('Welcome back to LeadDesk.')
      navigate('/dashboard')
    } catch (error) {
      toast.error(getApiError(error, 'Unable to sign in. Please try again.'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="grid min-h-screen bg-slate-50 px-5 py-8 sm:px-8 lg:grid-cols-2 lg:p-0">
      <section className="mx-auto flex w-full max-w-md flex-col justify-center lg:px-12 xl:px-20">
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-700"
        >
          <ArrowLeft size={16} /> Back to website
        </Link>

        <div className="mt-12">
          <span className="grid size-10 place-items-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-600/30">
            <LockKeyhole size={19} />
          </span>
          <p className="mt-7 text-sm font-semibold text-blue-700">Admin access</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">Welcome back</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">Sign in to review and manage your incoming leads.</p>
        </div>

        <form className="mt-8 space-y-5" noValidate onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="admin@company.com"
            value={credentials.email}
            error={errors.email}
            required
            onChange={handleChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            value={credentials.password}
            error={errors.password}
            required
            onChange={handleChange}
          />

          <div className="flex items-center justify-between gap-4 pt-0.5">
            <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                name="rememberMe"
                type="checkbox"
                checked={credentials.rememberMe}
                className="size-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                onChange={handleChange}
              />
              Remember me
            </label>
            <button type="button" className="text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800">
              Forgot password?
            </button>
          </div>

          <Button type="submit" size="lg" isLoading={isLoading} className="w-full">
            Sign in to dashboard
          </Button>
        </form>
      </section>

      <aside className="relative mt-12 hidden overflow-hidden bg-slate-950 lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(37,99,235,0.42),transparent_34%),radial-gradient(circle_at_30%_80%,rgba(30,64,175,0.35),transparent_28%)]" />
        <div className="relative mx-auto flex h-full max-w-xl flex-col justify-center px-16 text-white">
          <span className="grid size-10 place-items-center rounded-xl bg-white text-lg font-bold text-blue-600">L</span>
          <blockquote className="mt-14 text-3xl font-medium leading-tight tracking-[-0.04em]">
            “A clear pipeline gives every promising conversation the attention it deserves.”
          </blockquote>
          <div className="mt-8 h-px w-12 bg-blue-400" />
          <p className="mt-5 text-sm text-slate-400">LeadDesk Mini</p>
        </div>
      </aside>
    </main>
  )
}

export default LoginPage
