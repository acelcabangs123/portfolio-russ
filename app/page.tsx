'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, ExternalLink, Menu, X, Moon, Sun, Facebook, Linkedin, Github, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [selectedImage, setSelectedImage] = useState<{ title: string; image: string } | null>(null)
  const [showContactModal, setShowContactModal] = useState(false)
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    help: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: `${formData.help}\n\nBudget: ${formData.budget || 'Not specified'}\n\nAdditional Details: ${formData.message}`,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage('Inquiry sent successfully! I will get back to you soon.')
        setFormData({ name: '', email: '', company: '', help: '', budget: '', timeline: '', message: '' })
        setTimeout(() => {
          setShowContactModal(false)
          setSubmitMessage('')
        }, 2000)
      } else {
        setSubmitMessage(data.error || 'Failed to send inquiry. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitMessage('Unable to send your inquiry at the moment. You may contact me directly via Upwork, Facebook, Email, or Mobile. I’ll be happy to assist you.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const featureCards = [
    { 
      title: 'Dashboards', 
      subtitle: 'KPI & Reporting Systems',
      icon: '📊'
    },
    { 
      title: 'Next.js', 
      subtitle: 'Modern Web Development',
      icon: '💻'
    },
    { 
      title: 'CRM Tools', 
      subtitle: 'Airtable & GoHighLevel',
      icon: '📋'
    },
    { 
      title: 'Automation', 
      subtitle: 'Faster Workflows',
      icon: '⚡'
    },
  ]

  const projects = [
    {
      title: 'Paid Ads KPI Dashboard',
      description: 'Track ad spend, leads, calls, CPL, and campaign performance in real-time.',
      image: '/projects/kpi.png',
      color: 'from-purple-600 to-purple-900',
      url: 'https://marketingkpidashboard.vercel.app/',
    },
    {
      title: 'Lead Pipeline Dashboard',
      description: 'Manage leads from New Lead to Closed Won with revenue tracking.',
      image: '/projects/leadpipeline.png',
      color: 'from-orange-600 to-orange-900',
      url: 'https://leadpipeline-nu.vercel.app/',
    },
    {
      title: 'Appointment Setter Dashboard',
      description: 'Monitor booked calls, call duration, no-show rate, and setter performance.',
      image: '/projects/appointmentsetting.png',
      color: 'from-emerald-600 to-emerald-900',
      url: 'https://appointmentsetter-seven.vercel.app/',
    },
    {
      title: 'Executive Report Portal',
      description: 'Weekly executive summary with key metrics, insights and recommendations.',
      image: '/projects/executive.png',
      color: 'from-blue-600 to-blue-900',
      url: 'https://executivedashboard-seven.vercel.app/',
    },
  ]

  const skills = [
    { name: 'Next.js', icon: '▲' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Recharts', icon: '📈' },
    { name: 'Airtable', icon: '📦' },
    { name: 'Google Sheets', icon: '📊' },
    { name: 'Microsoft Excel', icon: '📋' },
    { name: 'SQL', icon: '🔍' },
    { name: 'Data Entry', icon: '✍️' },
    { name: 'Data Analysis', icon: '📊' },
    { name: 'CRM Software', icon: '👥' },
    { name: 'Lead Generation', icon: '🎯' },
    { name: 'Virtual Assistance', icon: '💼' },
    { name: 'Administrative Support', icon: '📌' },
  ]

  const benefits = [
    {
      title: 'Real experience',
      description: 'in marketing operations and appointment setting',
    },
    {
      title: 'Build dashboards',
      description: 'that are simple, fast and actionable',
    },
    {
      title: 'Clean, modern',
      description: 'and human-friendly systems',
    },
    {
      title: 'Committed to help',
      description: 'your business grow',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-700">
  <Image
    src="/projects/1x1.jpg"
    alt="Russell Cabang"
    width={40}
    height={40}
    className="w-full h-full object-cover"
    priority
  />
</div>
              <div>
                <p className="font-semibold text-sm">Russell Cabang</p>
                <p className="text-xs text-slate-400">Frontend Web Developer | Dashboards, CRM & Automation</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 text-sm">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-slate-400 hover:text-white transition">
                Home
              </button>
              <a href="#projects" className="text-slate-400 hover:text-white transition">
                Projects
              </a>
              <a href="#skills" className="text-slate-400 hover:text-white transition">
                Skills
              </a>
              <a href="#about" className="text-slate-400 hover:text-white transition">
                About
              </a>
              <button onClick={() => setShowContactInfo(true)} className="text-slate-400 hover:text-white transition">
                Contact
              </button>
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button onClick={() => setShowContactModal(true)} className="hidden sm:inline-flex bg-purple-600 hover:bg-purple-700 text-white gap-2">
                Let&apos;s Work Together
                <ChevronRight className="w-4 h-4" />
              </Button>
              <button className="md:hidden text-slate-400 hover:text-white">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/50 border border-purple-700 text-purple-300">
                Front End Web Developer & Marketing Operations
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              I turn data into <span className="text-purple-400">clarity</span> and help businesses <span className="text-purple-400">grow</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed">
              I build dashboards, KPI systems, and automated reports that help agencies and businesses track performance, improve operations, and make faster decisions.
            </p>

            <div className="flex gap-4 pt-4">
              <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
                View My Projects
                <ChevronRight className="w-4 h-4" />
              </Button>
              <a href="https://www.upwork.com/freelancers/~017edb9e1e27310487" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-900">
                  Hire Me on Upwork
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {featureCards.map((card, i) => (
              <div key={i} className="p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition flex flex-col items-center text-center">
                <div className="text-4xl mb-3">{card.icon}</div>
                <p className="font-semibold text-white mb-1">{card.title}</p>
                <p className="text-xs text-slate-400">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Sample Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border border-slate-800 hover:border-purple-500/50 transition bg-slate-900/50 hover:bg-slate-900/80"
              >
                {/* Project image or placeholder */}
                <button
                  onClick={() => project.image && setSelectedImage({ title: project.title, image: project.image })}
                  className={`bg-gradient-to-br ${project.color} h-40 flex items-center justify-center text-5xl relative overflow-hidden w-full cursor-pointer hover:opacity-80 transition`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    project.image
                  )}
                </button>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-2 group-hover:text-purple-400 transition">{project.title}</h3>
                  <p className="text-xs text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 text-xs font-medium flex items-center gap-1">
                    View Project
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills & Technologies</h2>

          <div className="marquee-container">
            <div className="marquee">
              {/* First set of skills */}
              {skills.map((skill, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-4 flex-shrink-0">
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-sm text-slate-400 whitespace-nowrap">{skill.name}</p>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {skills.map((skill, i) => (
                <div key={`duplicate-${i}`} className="flex flex-col items-center gap-2 p-4 flex-shrink-0">
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-sm text-slate-400 whitespace-nowrap">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header and Description */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why Work With Me?</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                I combine real experience, clean systems, and data-driven solutions to help your business grow.
              </p>

              {/* Benefits Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-5 w-5 rounded-full bg-purple-600 border border-purple-500">
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{benefit.title}</h3>
                        <p className="text-sm text-slate-400">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Laptop Image */}
            <div className="flex justify-center items-start">
              <div className="w-full max-w-md">
                <Image
                  src="projects/dashboardlaptop.png"
                  alt="Dashboard on Laptop"
                  width={600}
                  height={400}
                  className="w-full rounded-xl border border-slate-700 shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Stat 1 */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <p className="text-3xl font-bold text-white">100%</p>
                    <p className="text-xs text-slate-400">Job Success on Upwork</p>
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">👑</div>
                  <div>
                    <p className="text-3xl font-bold text-white">Top</p>
                    <p className="text-xs text-slate-400 sm:text-left text-center">Top Rated on Upwork</p>
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">💰</div>
                  <div>
                    <p className="text-3xl font-bold text-white">$3K+</p>
                    <p className="text-xs text-slate-400">Total Earnings on Upwork</p>
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">⏱️</div>
                  <div>
                    <p className="text-3xl font-bold text-white">1,000+</p>
                    <p className="text-xs text-slate-400">Hours Worked Across Projects</p>
                  </div>
                </div>
              </div>

              {/* Stat 5 */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">🛠️</div>
                  <div>
                    <p className="text-3xl font-bold text-white">Custom Systems</p>
                    <p className="text-xs text-slate-400">Built for Business</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Statement */}
            <div className="mt-8 pt-8 border-t border-slate-700 flex items-center justify-center gap-3">
              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-purple-600 flex-shrink-0">
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-slate-300 text-center sm:text-left">Trusted by clients. Focused on results. Committed to your growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-purple-950/60 via-slate-900/40 to-purple-950/40 border border-purple-800/50 rounded-2xl p-8 sm:p-16 text-center overflow-hidden">
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-purple-500/50 flex items-center justify-center bg-purple-950/50">
                  <div className="text-3xl">🚀</div>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Let’s Build Digital Systems That Help Your Business Grow
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                From websites and mobile apps to dashboards, automation, and custom tools — I create solutions that save time, improve operations, and support smarter decisions
              </p>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <div className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800/50 flex items-center gap-2">
                  <span className="text-lg">📊</span>
                  <span className="text-sm text-slate-300">Custom Dashboards</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800/50 flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <span className="text-sm text-slate-300">Better Reporting</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800/50 flex items-center gap-2">
                  <span className="text-lg">📈</span>
                  <span className="text-sm text-slate-300">Business Growth</span>
                </div>
              </div>
              
              <a href="https://www.upwork.com/freelancers/~017edb9e1e27310487" target="_blank" rel="noopener noreferrer">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2 px-8 py-3 text-base rounded-full">
                  Hire Me on Upwork
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-slate-300 transition z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex-1 relative rounded-lg overflow-hidden">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white text-center mt-4 text-lg font-semibold">{selectedImage.title}</p>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide">
            {/* Modal Header */}
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900">
              <h2 className="text-2xl font-bold">Let&apos;s Work Together</h2>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-slate-400 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-4"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-purple-500 transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-purple-500 transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-purple-500 transition"
                  placeholder="Your company"
                />
              </div>

              {/* What do you need help with? */}
              <div>
                <label className="block text-sm font-medium mb-2">What do you need help with?</label>
                <textarea
                  required
                  value={formData.help}
                  onChange={(e) => setFormData({ ...formData, help: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-purple-500 transition"
                  placeholder="Tell me about your project..."
                  rows={3}
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium mb-2">Budget <span className="text-slate-400">(optional)</span></label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-purple-500 transition"
                  placeholder="e.g. $100 - $1,000"
                />
              </div>

              {/* Timeline
              <div>
                <label className="block text-sm font-medium mb-2">Timeline</label>
                <select
                  required
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-purple-500 transition"
                >
                  <option value="">Select a timeline...</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3+ months">3+ months</option>
                </select>
              </div> */}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-purple-500 transition"
                  placeholder="Any additional details..."
                  rows={3}
                />
              </div>

              {/* Success/Error Message */}
              {submitMessage && (
                <div className={`p-4 rounded-lg text-sm font-medium ${
                  submitMessage.includes('successfully') 
                    ? 'bg-green-950/50 border border-green-700/50 text-green-300' 
                    : 'bg-red-950/50 border border-red-700/50 text-red-300'
                }`}>
                  {submitMessage}
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 pt-6">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800"
                  onClick={() => window.open('https://www.upwork.com/freelancers/~017edb9e1e27310487', '_blank')}
                >
                  Book a Call
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contact Info Modal */}
      {showContactInfo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-lg max-w-md w-full">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-800">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <button
                onClick={() => setShowContactInfo(false)}
                className="text-slate-400 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {/* Email */}
              <a href="mailto:russell.cabang@gmail.com" className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition group">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition">russell.cabang@gmail.com</p>
                </div>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/russcabang" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition group">
                <div className="flex-shrink-0">
                  <Facebook className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-400">Facebook</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition">Russell Cabang</p>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/acelcabangs123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition group">
                <div className="flex-shrink-0">
                  <Github className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition">acelcabangs123</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:09957439001" className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition group">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition">09957439001</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>© 2026 Russell Cabang. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/russcabang" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              <a href="https://www.linkedin.com/in/russell-cabang-471141292/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="https://github.com/acelcabangs123" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
