import { useState, useEffect } from 'react'
import { useActiveSection } from '../hooks/useScrollReveal'
import { personalInfo } from '../data/siteData'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#focus', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

const sectionIds = ['about', 'skills', 'focus', 'projects', 'certifications', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-mono text-accent-cyan text-sm opacity-70 group-hover:opacity-100 transition-opacity">&gt;_</span>
          <span className="font-display font-semibold text-sm text-text-primary tracking-wide">
            {personalInfo.username}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-accent-cyan bg-accent-glow'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/4'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

      {/* Social icons */}
        <div className="flex items-center gap-3 ml-6 pl-6 border-l border-border-subtle">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-cyan transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-cyan transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-text-secondary transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-px bg-text-secondary transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-text-secondary transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-border-subtle px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-text-secondary hover:text-accent-cyan font-mono text-sm py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
