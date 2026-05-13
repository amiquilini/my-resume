import { personalInfo } from "../data/siteData"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-1 gap-8 mb-8">
          
          {/* Built with */}
          <div className="text-right">
            <h4 className="font-mono text-xs tracking-widest text-text-muted uppercase mb-3">Built with</h4>
            <div className="flex flex-wrap justify-end gap-2">
              {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                <span key={tech} className="font-mono text-xs px-2 py-0.5 rounded bg-bg-card border border-border-subtle text-text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-subtle pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-text-muted">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-muted italic opacity-50">
            "The net is vast and infinite."
          </p>
        </div>
      </div>
    </footer>
  )
}
