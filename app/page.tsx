'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'

const imageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-Y4raC7nY1TbRbGNDBoBzfHYDR7sUYd.jpg'

const experience = [
  { period: 'Nov 2023 — Present', role: 'Site Cybersecurity & Digital Leader', company: 'Schneider Electric · Gyöngyös, Hungary', copy: 'Leading the site digital transformation and Smart Factory roadmap, connecting production priorities to practical systems, dashboards, training, and resilient IT/OT operations.' },
  { period: 'Jan 2022 — Nov 2023', role: 'Deployment & Transformation Leader', company: 'Schneider Electric · Cavite, Philippines', copy: 'Supported global Smart Factory solution deployments, structured user support, service improvements, training, and adoption across sites.' },
  { period: 'Jan 2021 — Dec 2021', role: 'NPM / PCBA Section Manager', company: 'Sercomm Philippines Inc. · Laguna, Philippines', copy: 'Led PCBA operations across production, quality, materials, schedules, section KPIs, 5S, and shift-level performance.' },
  { period: 'Oct 2019 — Dec 2020', role: 'Industrial Performance Leader', company: 'Schneider Electric · Cavite, Philippines', copy: 'Diagnosed capability gaps and implemented Schneider Performance System principles to improve productivity and operating discipline.' },
  { period: 'Jun 2017 — Sep 2019', role: 'Methods Engineer', company: 'Schneider Electric · Cavite, Philippines', copy: 'Delivered Lean diagnostic projects, line design, FMEA, time studies, balancing, capacity analysis, VSM, and digital performance packages.' },
  { period: 'Mar 2017 — Jun 2017', role: 'Quality Engineer', company: 'Schneider Electric · Cavite, Philippines', copy: 'Established quality systems, root-cause problem solving, process control, and a disciplined foundation in manufacturing excellence.' },
  { period: 'Nov 2014 — Mar 2017', role: 'Continuous Improvement Leader / Production Supervisor', company: 'Schneider Electric · Cavite, Philippines', copy: 'Led daily shop-floor execution and cross-functional Lean improvement across manpower, machines, materials, methods, and measurement. Managed staffing, cross-training, performance, materials, yields, efficiency, and production constraints while delivering safety, quality, delivery, and productivity targets.' },
]

const skills = [
  { name: 'Industrial engineering', detail: 'Designing efficient systems, workflows, capacity plans, and methods that connect people, process, and performance.' },
  { name: 'Lean & Six Sigma', detail: 'Using structured problem solving, VSM, FMEA, time studies, and continuous improvement to remove waste.' },
  { name: 'Cybersecurity & IT/OT', detail: 'Building practical cyber resilience across connected manufacturing environments, digital systems, and site operations.' },
  { name: 'Production management', detail: 'Leading daily production execution, PCBA operations, quality, materials, staffing, KPIs, and shift performance.' },
  { name: 'Project management', detail: 'Translating complex transformation goals into roadmaps, milestones, stakeholder alignment, and delivered outcomes.' },
  { name: 'Smart Factory', detail: 'Driving digital transformation through connected solutions, adoption, training, dashboards, and scalable deployment.' },
  { name: 'Tableau & SQL', detail: 'Turning operational data into clear dashboards, useful insights, and decisions teams can act on.' },
  { name: 'Manufacturing systems', detail: 'Bridging shop-floor reality with resilient systems, standard work, performance management, and user support.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('about')
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-30% 0px -55% 0px' })
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#about" onClick={closeMenu}>JHD<span>.</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {['about', 'expertise', 'experience', 'development', 'contact'].map((item) => <a key={item} className={active === item ? 'active' : ''} href={`#${item}`} onClick={closeMenu}>{item}</a>)}
        </nav>
        <a className="availability" href="mailto:johnharleydeleon@gmail.com"><i /> Available for conversations</a>
      </header>

      <section id="about" className="hero section-pad">
        <div className="hero-copy reveal">
          <p className="eyebrow">Industrial engineer · digital transformation leader</p>
          <h1>Making complex operations<br /><em>work beautifully.</em></h1>
          <p className="intro">I turn manufacturing challenges into measurable performance — through better methods, smarter systems, and the people who make them real.</p>
          <div className="hero-actions"><a className="button button-dark" href="#experience">Explore my work <ArrowUpRight /></a><a className="text-link" href="mailto:johnharleydeleon@gmail.com">Let&apos;s connect <span>↗</span></a></div>
        </div>
        <div className="portrait-wrap reveal">
          <div className="portrait-frame"><img src={imageUrl} alt="John Harley De Leon in a dark suit in a modern office" /></div>
          <p className="portrait-caption">John Harley De Leon <span>·</span> Gyöngyös, Hungary</p>
        </div>
        <div className="hero-index">01 <span>—</span> 06</div>
      </section>

      <section id="expertise" className="expertise section-pad"><div className="section-heading"><p className="eyebrow">What I bring</p><h2>Systems thinking.<br /><em>Practical impact.</em></h2></div><div className="skills-grid">{skills.map((skill, index) => { const isExpanded = expandedSkill === skill.name; return <div className={`skill ${isExpanded ? 'is-expanded' : ''}`} key={skill.name}><button type="button" aria-expanded={isExpanded} onClick={() => setExpandedSkill(isExpanded ? null : skill.name)}><span>0{index + 1}</span><strong>{skill.name}</strong><ChevronDown /></button>{isExpanded && <p>{skill.detail}</p>}</div> })}</div></section>

      <section id="experience" className="experience section-pad"><div className="section-heading"><p className="eyebrow">Selected experience</p><h2>The path so far.</h2></div><div className="timeline">{experience.map((item, index) => <article className={`timeline-item ${index === 0 ? 'current' : ''}`} key={item.role}><div className="timeline-meta"><span>{item.period}</span><b>{index === 0 ? 'Current' : `0${experience.length - index}`}</b></div><div><h3>{item.role}</h3><p className="company">{item.company}</p><p className="role-copy">{item.copy}</p></div></article>)}</div></section>

      <section id="development" className="education section-pad"><div><p className="eyebrow">Foundation</p><h2>Built on the<br /><em>shop floor.</em></h2></div><div className="education-details"><p className="eyebrow">Education</p><h3>Bachelor of Science<br />in Industrial Engineering</h3><p>De La Salle, Lipa City<br />Philippines</p><div className="certs"><p className="eyebrow">Certifications & development</p><div className="cert-list"><span>Certified Project Management Specialist</span><span>Certified Lean Six Sigma Green Belt</span><span>Certified Lean Six Sigma Yellow Belt</span><span>Cybersecurity Fundamentals</span><span>Cybersecurity Foundation</span><span>Claroty Cybersecurity Analyst</span><span>School of Data Science</span><span>RPA Business Analyst Fundamentals</span><span>Tableau</span><span>Advanced Lean</span><span>Lean Fundamentals</span><span>Excel Master Class</span><span>Methods-Time Measurement</span><span>Ergonomics</span><span>AutoCAD — TESDA</span></div></div></div></section>

      <section id="contact" className="contact section-pad">
  <p className="eyebrow">Start a conversation</p>
  <h2>Let&apos;s make the<br /><em>next system better.</em></h2>
  <a className="contact-email" href="mailto:johnharleydeleon@gmail.com">
    johnharleydeleon@gmail.com <ArrowUpRight />
  </a>
  <a className="contact-phone" href="Phone:+36 30 613 8167">
  </a>
  <div className="contact-footer">
    <span>John Harley De Leon</span>
    <span>Industrial Engineer / Digital Leader</span>
    <span>© 2026</span>
  </div>
</section>
    </main>
  )
}
