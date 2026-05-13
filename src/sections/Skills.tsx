import { Braces, Cloud, Database, Layers3, LineChart, TestTube2 } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { skills } from '../data/siteData'
import { HiArrowLongDown } from 'react-icons/hi2'

const categories = [
  { key: 'backend', label: 'Backend', icon: Braces, color: '#00d4ff' },
  { key: 'architecture', label: 'Architecture', icon: Layers3, color: '#4f8ef7' },
  { key: 'cloud', label: 'Cloud & DevOps', icon: Cloud, color: '#8b5cf6' },
  { key: 'data', label: 'Database & Messaging', icon: Database, color: '#00d4ff' },
  { key: 'observability', label: 'Observability', icon: LineChart, color: '#4f8ef7' },
  { key: 'testing', label: 'Testing & Quality', icon: TestTube2, color: '#8b5cf6' },
] as const

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      label="// skills"
      title="Technical Stack"
      className="bg-bg-secondary"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => {
          const items = skills[cat.key] as string[]
          return (
            <div
              key={cat.key}
              className="bg-bg-primary border border-border-subtle rounded-xl p-5 glow-card group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-200"
                  style={{
                    background: `rgba(${cat.color === '#00d4ff' ? '0,212,255' : cat.color === '#4f8ef7' ? '79,142,247' : '139,92,246'}, 0.1)`,
                    border: `1px solid rgba(${cat.color === '#00d4ff' ? '0,212,255' : cat.color === '#4f8ef7' ? '79,142,247' : '139,92,246'}, 0.2)`,
                    color: cat.color,
                  }}
                >
                  <cat.icon size={18} />
                </div>
                <h3 className="font-mono text-xs tracking-widest text-text-muted uppercase">
                  {cat.label}
                </h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded-md transition-all duration-200"
                    style={{
                      background: `rgba(${cat.color === '#00d4ff' ? '0,212,255' : cat.color === '#4f8ef7' ? '79,142,247' : '139,92,246'}, 0.06)`,
                      border: `1px solid rgba(${cat.color === '#00d4ff' ? '0,212,255' : cat.color === '#4f8ef7' ? '79,142,247' : '139,92,246'}, 0.12)`,
                      color: '#8892a4',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-16 md:mt-20 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
        <a href="#focus" className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors">
          <HiArrowLongDown size={32} />
          <div className="w-px h-12 bg-gradient-to-b from-border-subtle to-transparent" />
        </a>
      </div>
    </SectionWrapper>
  )
}
