import { forwardRef } from 'react'

/**
 * A labelled text input used across the public lead form and admin login.
 * Pass `error` when validation fails; the component handles its visual state.
 */
const Input = forwardRef(function Input(
  {
    label,
    id,
    error,
    hint,
    className = '',
    containerClassName = '',
    required = false,
    ...props
  },
  ref,
) {
  const inputId = id || props.name
  const helperId = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined

  return (
    <div className={`space-y-1.5 ${containerClassName}`}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-700">
          {label}
          {required && <span className="ml-1 text-rose-600">*</span>}
        </label>
      )}

      <input
        ref={ref}
        id={inputId}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={helperId}
        className={`block h-11 w-full rounded-lg border bg-white px-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-4 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 ${
          error
            ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-100'
            : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
        } ${className}`}
        {...props}
      />

      {error ? (
        <p id={`${inputId}-error`} className="text-xs font-medium text-rose-600">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${inputId}-hint`} className="text-xs text-slate-500">
            {hint}
          </p>
        )
      )}
    </div>
  )
})

export default Input
