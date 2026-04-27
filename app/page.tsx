'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, ExternalLink, Menu, X, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const stats = [
    { label: 'Projects Completed', value: '4+' },
    { label: 'Client Satisfaction', value: '100%' },
    { label: 'Turnaround', value: 'Fast' },
    { label: 'Support', value: 'Ongoing' },
  ]

  const projects = [
    {
      title: 'Paid Ads KPI Dashboard',
      description: 'Track ad spend, leads, calls, CPL, and campaign performance in real-time.',
      image: '/projects/kpi.png',
      color: 'from-purple-600 to-purple-900',
    },
    {
      title: 'Lead Pipeline Dashboard',
      description: 'Manage leads from New Lead to Closed Won with revenue tracking.',
      image: '/projects/leadpipeline.png',
      color: 'from-orange-600 to-orange-900',
    },
    {
      title: 'Appointment Setter Dashboard',
      description: 'Monitor booked calls, call duration, no-show rate, and setter performance.',
      image: '/projects/appointmentsetting.png',
      color: 'from-emerald-600 to-emerald-900',
    },
    {
      title: 'Executive Report Portal',
      description: 'Weekly executive summary with key metrics, insights and recommendations.',
      image: '/projects/executive.png',
      color: 'from-blue-600 to-blue-900',
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
    { name: 'Supabase', icon: '🗄️' },
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
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold">
                RC
              </div>
              <div>
                <p className="font-semibold text-sm">Your Name</p>
                <p className="text-xs text-slate-400">Frontend Web Developer | Dashboards, CRM & Automation</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 text-sm">
              {['Home', 'Projects', 'Skills', 'About', 'Services', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition">
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button className="hidden sm:inline-flex bg-purple-600 hover:bg-purple-700 text-white gap-2">
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
                Marketing Operations & Front End Web Developer
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              I turn data into <span className="text-purple-400">clarity</span> and help businesses <span className="text-purple-400">grow</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed">
              I build dashboards, KPI systems, and automated reports that help agencies and businesses track performance, improve operations, and make faster decisions.
            </p>

            <div className="flex gap-4 pt-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
                View My Projects
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-900">
                Hire Me on Upwork
              </Button>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition">
                <p className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <a href="#" className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm">
              View All Projects
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border border-slate-800 hover:border-purple-500/50 transition bg-slate-900/50 hover:bg-slate-900/80"
              >
                {/* Project image or placeholder */}
                <div className={`bg-gradient-to-br ${project.color} h-40 flex items-center justify-center text-5xl relative overflow-hidden`}>
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
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-2 group-hover:text-purple-400 transition">{project.title}</h3>
                  <p className="text-xs text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                  <a href="#" className="text-purple-400 hover:text-purple-300 text-xs font-medium flex items-center gap-1">
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

          <div className="flex flex-wrap gap-6 justify-center">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4">
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-sm text-slate-400">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Why Work With Me?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - Benefits */}
            <div className="space-y-6">
              {benefits.slice(0, 2).map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-900/50 border border-purple-700">
                      <svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">{benefit.title}</p>
                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column - Benefits */}
            <div className="space-y-6">
              {benefits.slice(2).map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-900/50 border border-purple-700">
                      <svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">{benefit.title}</p>
                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration Placeholder */}
          <div className="mt-12 rounded-lg bg-gradient-to-br from-purple-900/30 to-slate-900/30 border border-slate-800 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">📊</div>
              <p className="text-slate-400">Analytics Illustration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/40 to-purple-900/20 border border-purple-800/50 rounded-lg p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="text-4xl">🚀</div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Let&apos;s Build Your Dashboard or Reporting System
            </h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s talk about how I can help your business with custom dashboards and systems that drive clarity, performance, and growth.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
              Hire Me on Upwork
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>© 2024 Your Name. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
