import { personalInfo } from '../data/siteData'
import profileImage from '../assets/profile.png'
import { ArrowDownRight, Mail } from 'lucide-react'
import { HiArrowLongDown } from 'react-icons/hi2'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 grid-bg overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-10 animate-pulse-glow"
          style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.3) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(ellipse, rgba(79,142,247,0.5) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl w-full mx-auto pt-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">

            {/* Mono label */}
            <div className="inline-flex items-center gap-2 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <span className="font-mono text-accent-cyan text-xs tracking-widest opacity-60">&gt;_ software engineer</span>
              <span className="inline-block w-1.5 h-3.5 bg-accent-cyan opacity-70 animate-pulse" />
            </div>

            {/* Name */}
            <h1
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-none mb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              {personalInfo.name.split(' ')[0]}
              <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #00d4ff 0%, #4f8ef7 100%)' }}>
                {personalInfo.name.split(' ')[1]}
              </span>
            </h1>

            {/* Headline */}
            <p
              className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-3 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
            >
              {personalInfo.headline}
            </p>

            

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 justify-center md:justify-start opacity-0 animate-fade-up"
              style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
            >
              <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                View Projects <ArrowDownRight size={14} />
              </a>
              <a href="#focus" className="btn-ghost inline-flex items-center gap-2">
                View Experience <ArrowDownRight size={14} />
              </a>
              <a href="#contact" className="btn-ghost inline-flex items-center gap-2">
                Contact <Mail size={14} />
              </a>
            </div>

          </div>

          {/* Profile image */}
          <div
            className="flex-shrink-0 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <div className="relative animate-float">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{
                  background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
                  transform: 'scale(1.3)',
                }}
              />
              {/* Border ring */}
              <div
                className="relative w-52 h-52 md:w-64 md:h-64 rounded-full p-0.5"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.4), rgba(79,142,247,0.2), transparent)',
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-bg-card">
                  <img
                    src={profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-bg-card border border-border-subtle rounded-full px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-text-secondary">Let's chat!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 md:mt-20 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <a href="#about" className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors">
            <HiArrowLongDown size={32} />
            <div className="w-px h-12 bg-gradient-to-b from-border-subtle to-transparent" />
          </a>
        </div>
      </div>
    </section>
  )
}
