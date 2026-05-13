import SectionWrapper from '../components/SectionWrapper'
import { certifications } from '../data/siteData'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" label="// certifications" title="AWS Certified">
      <div className="grid sm:grid-cols-3 gap-5 max-w-2xl">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-bg-card border border-border-subtle rounded-xl p-5 glow-card group text-center"
          >
            {/* AWS Badge visual */}
            <div className="w-22 h-22 mx-auto rounded-xl overflow-hidden mb-4">
              <img src={cert.badge} alt={cert.alt} className="w-full h-full object-contain" />
            </div>

            <div
              className="inline-block font-mono text-xs px-2.5 py-0.5 rounded-full"
              style={{
                background: 'rgba(255, 153, 0, 0.08)',
                border: '1px solid rgba(255, 153, 0, 0.15)',
                color: '#FF9900',
              }}
            >
              {cert.year}
            </div>
          </div>
        ))}
      </div>

      {/* AWS progression note */}
      <div className="mt-8 flex items-center gap-3">
        <div className="flex gap-1">
          {certifications.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ background: `rgba(255, 153, 0, ${0.3 + i * 0.3})` }}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-text-muted">
          Comming Next: AWS Certified Solutions Architect - Professional
        </span>
      </div>
    </SectionWrapper>
  )
}
