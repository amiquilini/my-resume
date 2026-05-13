import { useState, type FormEvent } from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import SectionWrapper from '../components/SectionWrapper'
import { personalInfo } from '../data/siteData'
import { FiGithub, FiMail, FiSend } from 'react-icons/fi'

const contactLinks = [
  {
    label: 'LinkedIn',
    value: personalInfo.linkedinUsername,
    href: personalInfo.linkedin,
    icon: FaLinkedinIn,
    description: 'Professional network & career updates',
    color: '#0077b5',
  },
  {
    label: 'GitHub',
    value: personalInfo.githubUsername,
    href: personalInfo.github,
    icon: FiGithub,
    description: 'Open source work & repositories',
    color: '#00d4ff',
  },
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: FiMail,
    description: 'For professional inquiries',
    color: '#4f8ef7',
  },
]

export default function Contact() {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `${message}`,
    )}`
    window.location.href = mailtoLink
  }

  return (
    <SectionWrapper id="contact" label="// contact" title="Let's Connect" className="bg-bg-secondary">
      <div className="grid md:grid-cols-[1fr_380px] gap-12">

        {/* Left: Message */}
        <div>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            I'm always open to interesting conversation! Feel free to reach out, 
            whether you want to discuss technical challenges or new opportunities.
          </p>

          {/* Contact cards */}
          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-bg-card border border-border-subtle rounded-xl p-4 glow-card group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 transition-all duration-200"
                  style={{
                    background: `rgba(${link.color === '#0077b5' ? '0,119,181' : link.color === '#00d4ff' ? '0,212,255' : '79,142,247'}, 0.1)`,
                    border: `1px solid rgba(${link.color === '#0077b5' ? '0,119,181' : link.color === '#00d4ff' ? '0,212,255' : '79,142,247'}, 0.2)`,
                    color: link.color,
                  }}
                >
                  <link.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display font-semibold text-text-primary text-sm">
                      {link.label}
                    </span>
                    <span className="text-text-muted group-hover:text-accent-cyan transition-colors text-xs">↗</span>
                  </div>
                  <div className="text-text-muted text-xs mt-0.5 truncate">{link.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Terminal-style message form hint */}
        <div>
          <div className="bg-bg-primary border border-border-subtle rounded-xl overflow-hidden h-full flex flex-col">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>
              <span className="font-mono text-xs text-text-muted ml-2">reach_out.sh</span>
            </div>

            {/* Terminal body */}
            <form className="p-5 font-mono text-sm space-y-3" onSubmit={handleSubmit}>

                <div className="space-y-3 pl-4">
                  <div>
                    <div className="text-text-muted text-xs mb-1">subject:</div>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="[your subject]"
                      className="w-full bg-bg-hover border border-border-subtle rounded px-3 py-2 text-text-secondary text-xs outline-none focus:border-accent-cyan"
                      required
                    />
                  </div>
                  <div>
                    <div className="text-text-muted text-xs mb-1">message:</div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="[your message]"
                      className="w-full min-h-[100px] bg-bg-hover border border-border-subtle rounded px-3 py-2 text-text-secondary text-xs outline-none focus:border-accent-cyan resize-none"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-cyan/80 transition-colors"
                  >
                    <FiSend size={18} />
                    <span>Send</span>
                  </button>                  
                </div>

              </form>
            </div>
          </div>
        </div>
    </SectionWrapper>
  )
}
