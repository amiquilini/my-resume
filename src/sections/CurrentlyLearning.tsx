import { HiArrowLongDown } from 'react-icons/hi2'
import { currentlyLearning } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CurrentlyLearning() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`max-w-6xl mx-auto px-6 pb-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-accent-cyan tracking-widest">// currently_learning</span>
          <div className="flex-1 h-px bg-border-subtle" />
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>

        <div className="flex flex-wrap gap-3">
          {currentlyLearning.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-bg-hover border border-border-subtle rounded-lg px-4 py-2"
            >
              <span className="font-mono text-xs text-accent-cyan">→</span>
              <div>
                <span className="font-mono text-xs text-text-primary">{item.label}</span>
                {item.note && (
                  <span className="font-mono text-xs text-text-muted ml-2">// {item.note}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono text-xs text-text-muted mt-3">
          We're all on a continuous learning journey. <code className="text-accent-cyan opacity-70">:)</code>
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-16 md:mt-20 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
        <a href="#contact" className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors">
          <HiArrowLongDown size={32} />
          <div className="w-px h-12 bg-gradient-to-b from-border-subtle to-transparent" />
        </a>
      </div>
    </div>
  )
}
