import { Cloud, Database, Hexagon, Zap } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { engineeringFocus } from '../data/siteData'
import { LuChartArea, LuMonitorCog } from 'react-icons/lu'
import { IconType } from 'react-icons'
import { HiArrowLongDown } from 'react-icons/hi2'

const iconMap: Record<string, IconType> = {
  api: Hexagon,
  event: Zap,
  cloud: Cloud,
  legacy: LuMonitorCog,
  observability: LuChartArea,
  database: Database
}

export default function EngineeringFocus() {
  return (
    <SectionWrapper id="focus" label="// experience" title="What I Work With">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {engineeringFocus.map((item, index) => (
          <div
            key={item.id}
            className="relative bg-bg-card border border-border-subtle rounded-xl p-6 glow-card group overflow-hidden"
            style={{ animationDelay: `${index * 0.07}s` }}
          >
            {/* Subtle corner gradient */}
            <div
              className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: 'radial-gradient(circle at top right, rgba(0,212,255,0.07), transparent)' }}
            />

            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-bg-hover border border-border-subtle flex items-center justify-center text-accent-cyan text-lg mb-4 group-hover:border-border-accent transition-colors duration-200">
              {(() => {
                const IconComponent = iconMap[item.icon] 
                return <IconComponent size={18} />
              })()}
            </div>

            {/* Content */}
            <h3 className="font-display font-semibold text-text-primary text-base mb-2">
              {item.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Context note */}
      <div className="mt-8 p-4 rounded-xl border border-border-subtle bg-bg-card/50 flex items-start gap-3">
        <span className="font-mono text-accent-cyan text-xs mt-0.5">ℹ</span>
        <p className="text-text-muted text-sm">
          Currently working for one of Brazil's largest banking institutions,
          building distributed systems in regulated financial environments.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-16 md:mt-20 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
        <a href="#projects" className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors">
          <HiArrowLongDown size={32} />
          <div className="w-px h-12 bg-gradient-to-b from-border-subtle to-transparent" />
        </a>
      </div>
    </SectionWrapper>
  )
}
