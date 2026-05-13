import { HiArrowLongDown } from 'react-icons/hi2'
import SectionWrapper from '../components/SectionWrapper'
import { projects, personalInfo } from '../data/siteData'

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      label="// projects"
      title="Selected Work"
      className="bg-bg-secondary"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-bg-primary border border-border-subtle rounded-xl overflow-hidden glow-card flex flex-col"
          >
            {/* Card header */}
            <div className="p-5 border-b border-border-subtle">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-bg-hover border border-border-subtle flex items-center justify-center text-accent-cyan text-sm">
                  ⬡
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && !project.githubUrl.includes('[') && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-cyan transition-colors text-xs"
                      title="View on GitHub"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-cyan transition-colors text-xs"
                      title="Live Demo"
                    >
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display font-semibold text-text-primary text-base mb-2">
                {project.name}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Card body */}
            <div className="p-5 flex flex-col gap-3 flex-1">
              {/* Architecture */}
              <div>
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">Architecture</span>
                <p className="text-text-secondary text-xs mt-1">{project.architecture}</p>
              </div>

              {/* Highlights */}
              <div>
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">Highlights</span>
                <p className="text-text-secondary text-xs mt-1">{project.highlights}</p>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag text-xs">{tech}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Context note */}
      <div className="mt-8 p-4 rounded-xl border border-border-subtle bg-bg-card/50 flex items-start gap-3">
        <span className="font-mono text-accent-cyan text-xs mt-0.5">ℹ</span>
        <p className="text-text-muted text-sm">
          Currently reworking my project portfolio to better showcase my recent work, since most of my projects are private due to corporate policies. So bear with me, more updates <code className="text-accent-cyan opacity-70">coming soon</code> !
        </p>
      </div>

      {/* GitHub CTA */}
      <div className="mt-8 text-center">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost inline-flex items-center gap-2"
        >
          View GitHub Profile ↗
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-16 md:mt-20 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
        <a href="#certifications" className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors">
          <HiArrowLongDown size={32} />
          <div className="w-px h-12 bg-gradient-to-b from-border-subtle to-transparent" />
        </a>
      </div>
    </SectionWrapper>
  )
}
