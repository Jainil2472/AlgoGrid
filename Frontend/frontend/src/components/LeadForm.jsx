import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import toast from 'react-hot-toast'
import Button from './Button'
import Input from './Input'
import { getApiError } from '../services/api'
import { createLead } from '../services/leadService'

const initialFormData = {
  name: '',
  email: '',
  budget: '',
  message: '',
}

function validateForm(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.budget) errors.budget = 'Please select a budget range.'
  if (!values.message.trim()) errors.message = 'Tell us a little about your project.'

  return errors
}

function LeadForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))

    if (errors[name]) {
      setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validateForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    try {
      await createLead({
        name: formData.name,
        email: formData.email,
        budgetRange: formData.budget,
        message: formData.message,
      })
    } catch (error) {
      const apiErrors = error.response?.data?.errors
      if (apiErrors && typeof apiErrors === 'object') {
        setErrors(apiErrors)
      } else {
        toast.error(getApiError(error, 'Unable to send your enquiry. Please try again.'))
      }
      setIsSubmitting(false)
      return
    }

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData(initialFormData)
    toast.success('Thanks — your enquiry has been received.')
  }

  if (isSubmitted) {
    return (
      <div className="flex min-h-[430px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 text-center shadow-xl shadow-slate-200/40">
        <span className="grid size-12 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 size={26} strokeWidth={2.25} />
        </span>
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Message received</h3>
        <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
          Thanks for reaching out. Our team will be in touch shortly.
        </p>
        <Button variant="secondary" className="mt-6" onClick={() => setIsSubmitted(false)}>
          Send another enquiry
        </Button>
      </div>
    )
  }

  return (
    <form
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 sm:p-7"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <p className="text-sm font-semibold text-blue-700">Start a conversation</p>
        <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">Tell us about your project</h3>
        <p className="mt-1.5 text-sm leading-6 text-slate-500">We usually reply within one business day.</p>
      </div>

      <div className="space-y-4">
        <Input
          label="Name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          error={errors.name}
          required
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
          value={formData.email}
          error={errors.email}
          required
          onChange={handleChange}
        />

        <div className="space-y-1.5">
          <label htmlFor="budget" className="block text-sm font-medium text-slate-700">
            Budget range <span className="ml-1 text-rose-600">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? 'budget-error' : undefined}
            className={`block h-11 w-full appearance-none rounded-lg border bg-white px-3.5 text-sm text-slate-950 outline-none transition focus:ring-4 ${
              errors.budget
                ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-100'
                : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
            }`}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select an estimated budget
            </option>
            <option value="Under ₹25,000">Under ₹25,000</option>
            <option value="₹25,000 – ₹75,000">₹25,000 – ₹75,000</option>
            <option value="₹75,000 – ₹2,00,000">₹75,000 – ₹2,00,000</option>
            <option value="₹2,00,000+">₹2,00,000+</option>
          </select>
          {errors.budget && (
            <p id="budget-error" className="text-xs font-medium text-rose-600">
              {errors.budget}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">
            Message <span className="ml-1 text-rose-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="What would you like to build?"
            value={formData.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`block w-full resize-y rounded-lg border bg-white px-3.5 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
              errors.message
                ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-100'
                : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
            }`}
            onChange={handleChange}
          />
          {errors.message && (
            <p id="message-error" className="text-xs font-medium text-rose-600">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" size="lg" isLoading={isSubmitting} className="mt-6 w-full">
        {!isSubmitting && <Send size={17} />}
        Send enquiry
      </Button>
    </form>
  )
}

export default LeadForm
