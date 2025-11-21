import Head from 'next/head';

const features = [
  {
    title: 'Smart Hydration Control',
    description: 'Adaptive flow technology automatically adjusts pressure based on demand, conserving energy and extending pump life.'
  },
  {
    title: 'Industrial-Grade Durability',
    description: 'Sealed IP68-rated housing resists corrosion, debris, and harsh weather for uninterrupted performance.'
  },
  {
    title: 'Rapid Install Kit',
    description: 'Tool-free mounting hardware, quick-connect fittings, and guided onboarding get you operational in under 30 minutes.'
  }
];

const specs = [
  { label: 'Flow Rate', value: '4200 L/h' },
  { label: 'Head Height', value: '48 m' },
  { label: 'Power Consumption', value: '0.8 kWh' },
  { label: 'Noise Level', value: '30 dB whisper mode' }
];

const testimonials = [
  {
    quote: 'Our farm relies on FlowPulse 480 every day. It reduced our energy bill by 27% in the first season.',
    name: 'Maya Jensen',
    role: 'Operations Director, BlueValley Agriculture'
  },
  {
    quote: 'Installation was effortless and support is top notch. We finally have a reliable system we can monitor remotely.',
    name: 'Terrence Cole',
    role: 'Facilities Manager, HydroCore Labs'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>FlowPulse 480 | Precision Water Pump</title>
        <meta
          name="description"
          content="FlowPulse 480 delivers energy-efficient, intelligent water pumping for agriculture, industry, and smart infrastructure."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="page">
        <header className="hero">
          <nav className="nav">
            <div className="logo">FlowPulse</div>
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#specs">Specs</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#cta" className="btn ghost">Request Demo</a>
            </div>
          </nav>
          <div className="hero-content">
            <div className="hero-copy">
              <p className="badge">New • FlowPulse 480</p>
              <h1>Precision pumping for every terrain.</h1>
              <p className="subtitle">
                Engineered for remote monitoring, predictive maintenance, and energy efficiency. FlowPulse 480 keeps water moving
                wherever reliability is non-negotiable.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#cta">Book a Consultation</a>
                <a className="btn secondary" href="#specs">Download Specs</a>
              </div>
              <div className="hero-stats">
                <div>
                  <span className="stat">27%</span>
                  <span className="label">Average energy savings</span>
                </div>
                <div>
                  <span className="stat">45+</span>
                  <span className="label">Deployments worldwide</span>
                </div>
                <div>
                  <span className="stat">24/7</span>
                  <span className="label">Predictive monitoring</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="pump-card">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
                <div className="pump">
                  <div className="pump-head"></div>
                  <div className="pump-body">
                    <div className="glow"></div>
                  </div>
                  <div className="pump-base"></div>
                </div>
                <div className="status">
                  <span className="dot" /> Operational · 98.7% uptime
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="section" id="features">
          <h2>Why teams pick FlowPulse 480</h2>
          <p className="section-subtitle">Reliability in the field backed by built-in intelligence.</p>
          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section alt" id="specs">
          <div className="specs-content">
            <div>
              <h2>Technical performance</h2>
              <p className="section-subtitle">
                Designed to keep pressure stable and maintenance predictable, with a self-calibrating feedback loop that learns your
                environment over time.
              </p>
              <ul className="spec-list">
                {specs.map((spec) => (
                  <li key={spec.label}>
                    <span>{spec.label}</span>
                    <strong>{spec.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card metrics">
              <h3>Smart console highlights</h3>
              <ul>
                <li>
                  <strong>Predictive alerts</strong>
                  <span>Receive mobile notifications 72 hours before service thresholds.</span>
                </li>
                <li>
                  <strong>Remote overrides</strong>
                  <span>Adjust pressure and scheduling from any device with secure MFA.</span>
                </li>
                <li>
                  <strong>Usage analytics</strong>
                  <span>Real-time dashboards with export to CSV, API or Modbus.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="testimonials">
          <h2>Loved by resilient infrastructure teams</h2>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote className="testimonial" key={item.name}>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section cta" id="cta">
          <div className="cta-card">
            <div>
              <h2>Ready to modernize your water infrastructure?</h2>
              <p>
                Schedule a personalized consultation with our engineers to map FlowPulse 480 to your site requirements and see a live
                console demo.
              </p>
            </div>
            <form className="cta-form">
              <label>
                Name
                <input type="text" name="name" placeholder="Alex Rivera" required />
              </label>
              <label>
                Work email
                <input type="email" name="email" placeholder="alex@company.com" required />
              </label>
              <label>
                Project scope
                <select name="scope" defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="agriculture">Agriculture irrigation</option>
                  <option value="industrial">Industrial facility</option>
                  <option value="municipal">Municipal utility</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <button type="submit" className="btn primary">Request Consultation</button>
            </form>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <div>
              <span className="logo">FlowPulse</span>
              <p>High-efficiency water pump systems engineered for critical infrastructure.</p>
            </div>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#specs">Specs</a>
              <a href="#testimonials">Customers</a>
              <a href="#cta">Contact</a>
            </div>
            <div className="footer-meta">
              <span>Support: support@flowpulse.io</span>
              <span>© {new Date().getFullYear()} FlowPulse. All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
