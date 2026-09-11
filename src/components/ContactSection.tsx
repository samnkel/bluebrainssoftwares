import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import emailjs from 'emailjs-com'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'samnkelisiwempiyonke@gmail.com',
    href: 'mailto:samnkelisiwempiyonke@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '066 038 2775',
    href: 'tel:0660382775',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: '10122 Liwa street, Cape Town, WP',
  },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setSent(false)
    setError(false)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          message: form.message,
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setSent(true)
      setForm({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      console.error('EmailJS Error:', err)
      setError(true)
      setTimeout(() => setError(false), 5000)
    } finally {
      setSending(false)
    }
  }

  return (
<section id="contact" className="relative z-10 py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-1.5 text-sm font-semibold text-electric">
            Get In Touch
          </span>
<h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Let's Start a <span className="text-gradient-blue">Conversation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 dark:text-slate-300">
            Have a project in mind? We would love to hear about it.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
<h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">Let us Start a Conversation</h3>
            <p className="mb-8 text-[0.95rem] leading-relaxed text-slate-500 dark:text-slate-300">
              Whether you have a clear vision or just a rough idea, we are here to help.
            </p>

            <div className="space-y-6">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon
                const content = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-electric/20 bg-electric/5 text-electric">
                      <Icon size={20} />
                    </span>
<div>
                      <strong className="block text-slate-900 dark:text-white">{item.label}</strong>
                      <span className="text-[0.9rem] text-slate-500 dark:text-slate-300">{item.value}</span>
                    </div>
                  </>
                )
                return item.href ? (
                  <a key={item.label} href={item.href} className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-4">
                    {content}
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-navy/80"
          >
            <form className="flex flex-col gap-5" onSubmit={submit}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Your name"
                  required
className="rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-[0.95rem] text-slate-900 outline-none transition-colors focus:border-electric dark:border-white/10 dark:bg-navy-2 dark:text-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email</label>
                <input
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  type="email"
                  placeholder="your@email.com"
                  required
className="rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-[0.95rem] text-slate-900 outline-none transition-colors focus:border-electric dark:border-white/10 dark:bg-navy-2 dark:text-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Phone (Optional)</label>
                <input
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  type="tel"
                  placeholder="Your phone number"
                  className="rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-[0.95rem] text-slate-900 outline-none transition-colors focus:border-electric dark:border-white/10 dark:bg-navy-2 dark:text-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
className="resize-none rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-[0.95rem] text-slate-900 outline-none transition-colors focus:border-electric dark:border-white/10 dark:bg-navy-2 dark:text-white"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex items-center justify-center gap-2.5 rounded-[14px] bg-gradient-to-br from-electric via-[#0a6fd8] to-neon-cyan px-7 py-4 text-[0.98rem] font-semibold text-white shadow-btn-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-btn-blue-hover disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending...' : 'Send Message'}
                <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              {sent && (
                <div className="rounded-[10px] bg-emerald-500/10 px-4 py-3 text-center text-sm font-medium text-emerald-600">
                  Thank you! We will get back to you within 24 hours.
                </div>
              )}
              {error && (
                <div className="rounded-[10px] bg-red-500/10 px-4 py-3 text-center text-sm font-medium text-red-600">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}