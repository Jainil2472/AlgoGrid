const footerLinks = [
  { label: 'Github', href: 'https://github.com/Jainil2472' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/jainilpate' },
  { label: 'Contact', href: 'tel:+919712220477' },
]

/** Simple public-site footer with project attribution. */
function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <a href="#home" className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-950">
            <span className="grid size-6 place-items-center rounded-md bg-blue-600 text-xs font-bold text-white">L</span>
            LeadDesk Mini
          </a>
          <p className="mt-2 text-sm text-slate-500">A simpler way to turn enquiries into conversations.</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 py-4 text-center sm:px-8 md:text-left lg:px-10">
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-500 transition-colors hover:text-blue-700 hover:underline"
          >
            Built for Digital Heroes Training Task
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
