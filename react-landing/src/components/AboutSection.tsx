import { motion } from 'framer-motion'
import WhyChooseSection from './WhyChooseSection'


// VALUES removed (moved to WhyChooseSection)

export default function AboutSection() {
  return (
<section id="about" className="relative z-10 py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-1.5 text-sm font-semibold text-electric">
            About Us
          </span>
<h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            About <span className="text-gradient-blue">BlueBrains Software</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 dark:text-slate-300">
            At BlueBrains Software, we create modern, reliable, and user-focused digital solutions that help businesses grow.
          </p>
        </motion.div>

        {/* Who We Are + Founder */}
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
className="rounded-[24px] border border-slate-200 bg-white/90 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-white/10 dark:bg-navy/80"
          >
            <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Who We Are</h3>
            <p className="mb-4 text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-200">
              BlueBrains Software is a software development company dedicated to transforming ideas into innovative digital solutions.
            </p>
            <p className="text-[0.95rem] leading-relaxed text-slate-500 dark:text-slate-300">
              We work with startups, small businesses, and organizations to create secure, scalable, and high-quality software that improves efficiency and delivers real business value. Whether it's a professional website, a mobile application, or a custom business system, we combine creativity with technical expertise to deliver products that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="rounded-[24px] bg-gradient-to-br from-electric/90 to-[#1565C0]/90 p-8 text-white shadow-[0_20px_60px_rgba(30,136,229,0.3)] backdrop-blur-sm"
          >
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-[2px] text-white/80">
              Our Founder
            </h3>
            <p className="mb-4 text-2xl font-bold text-white">Samnkelisiwe Mpiyonke</p>
            <p className="text-[0.95rem] leading-relaxed text-white/95">
              Founded by Samnkelisiwe Mpiyonke, BlueBrains Software is driven by a passion for creating practical, high-quality software solutions that empower businesses and individuals.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {[
            { icon: '🎯', title: 'Our Mission', desc: 'Our mission is to empower businesses through technology by delivering innovative, reliable, and user-friendly software solutions that solve real-world challenges and support long-term growth.' },
            { icon: '🚀', title: 'Our Vision', desc: 'To become a trusted technology partner recognized for delivering impactful software solutions that help businesses succeed in the digital world.' },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              className="rounded-[20px] border border-slate-200 bg-gradient-to-br from-slate-50/90 to-slate-100/90 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric/50 hover:shadow-[0_20px_40px_rgba(30,136,229,0.1)] dark:border-white/10 dark:from-navy/80 dark:to-navy-2/80"
            >
              <div className="mb-4 text-5xl">{card.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-slate-500 dark:text-slate-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <WhyChooseSection />

        {/* Core Values removed per request */}
      </div>
    </section>
  )
}