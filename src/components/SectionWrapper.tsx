import { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface SectionWrapperProps {
  id: string
  label: string
  title: string
  children: ReactNode
  className?: string
}

export default function SectionWrapper({
  id,
  label,
  title,
  children,
  className = '',
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 px-6 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="section-label">{label}</span>
            <div className="flex-1 h-px bg-border-subtle max-w-[60px]" />
          </div>
          <h2 className="section-title text-3xl md:text-4xl mb-12">{title}</h2>
        </div>
        <div
          className={`transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
