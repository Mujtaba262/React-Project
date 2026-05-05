import '../styles/Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Form Section */}
        <div className="contact-form-section">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone #"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                placeholder="Write your message"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <p className="info-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestias, magnam!
          </p>

          <div className="info-items">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <p>M.MUJTABA KHAN</p>
                <p>Hill, NY 11419</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <p>+92 308 2175192</p>
            </div>

            <div className="info-item">
              <span className="info-icon">✉️</span>
              <p>https://mujtaba262.github.io/Portfolio-MMK/</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}