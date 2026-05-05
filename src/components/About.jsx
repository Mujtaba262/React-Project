import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Banner Section */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop')`
        }}
      >
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia velit a
            feugiat finibus. Morbi laculis diam id tellus lacuils, eu pretium metus fermentum
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-content">
              <h4 className="stat-label">Years Experience</h4>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }}></div>
              </div>
              <p className="stat-value">85%</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <h4 className="stat-label">Your Offer</h4>
              <p className="stat-price">$1,378.90</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <h4 className="stat-label">Success Rate</h4>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '92%' }}></div>
              </div>
              <p className="stat-value">92%</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content-section">
        <div className="about-content-wrapper">
          <div className="about-text">
            <h2>Why Choose Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <ul className="about-list">
              <li>Premium Quality Service</li>
              <li>24/7 Customer Support</li>
              <li>Professional Team</li>
              <li>Affordable Pricing</li>
              <li>Fast & Reliable</li>
            </ul>
          </div>

          <div className="about-features">
            <div className="feature-box">
              <div className="feature-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To deliver exceptional value and service to our clients worldwide.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>To be the leading innovator in our industry with sustainable growth.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">💎</div>
              <h3>Our Values</h3>
              <p>Integrity, excellence, and customer satisfaction in everything we do.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}