import { HiArrowLongDown } from 'react-icons/hi2'
import SectionWrapper from '../components/SectionWrapper'
import { personalInfo, education, languages } from '../data/siteData'

const highlights = [
  { value: '5+', label: 'Years Experience' },
  { value: '3×', label: 'AWS Certified' },
  { value: personalInfo.location, label: 'Current Location' },
]

export default function About() {
  return (
    <SectionWrapper id="about" label="// about" title="Who I Am">
      <div className="grid md:grid-cols-[1fr_320px] gap-12">

        {/* Bio text */}
        <div>
          <div className="space-y-4">
            {personalInfo.about.split('\n\n').map((para, i) => (
              <p key={i} className="text-text-secondary leading-relaxed text-base">
                {para}
              </p>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-bg-card border border-border-subtle rounded-lg p-4 glow-card text-center"
              >
                <div className="font-display font-bold text-xl text-accent-cyan">{h.value}</div>
                <div className="font-mono text-xs text-text-muted mt-1">{h.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Education sidebar */}
        <div className="space-y-4">

          {/* Education */}
          <div className="bg-bg-card border border-border-subtle rounded-xl p-5">
            <h3 className="font-mono text-xs tracking-widest text-text-muted uppercase mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-border-accent pl-3">
                  <div className="font-display font-semibold text-sm text-text-primary leading-snug">
                    {edu.degree}
                  </div>
                  <div className="text-text-secondary text-xs mt-0.5">{edu.school}</div>
                  <div className="font-mono text-xs text-text-muted mt-0.5">{edu.period}</div>
                  {edu.note && (
                    <div className="font-mono text-xs text-accent-cyan opacity-70 mt-1">↳ {edu.note}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-bg-card border border-border-subtle rounded-xl p-5">
            <h3 className="font-mono text-xs tracking-widest text-text-muted uppercase mb-4">Languages</h3>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">{lang.name}</span>
                  <span className="tag">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-16 md:mt-20 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
        <a href="#skills" className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors">
          <HiArrowLongDown size={32} />
          <div className="w-px h-12 bg-gradient-to-b from-border-subtle to-transparent" />
        </a>
      </div>
    </SectionWrapper>
  )
}
