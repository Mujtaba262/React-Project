import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1535752385016-16aa049b6a8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW50YXJjdGljYXxlbnwwfHwwfHx8MA%3D%3D')`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Antarctica</h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="card-header">
              <div className="card-icon">■</div>
              <h3>Integer tincidunt. Cras dapibus</h3>
            </div>
            <p className="card-description">
              honcus, sem quam semper libero, sit ametadipiscing sem neque sed ipsum. sem
              quam semper libero, sit amet adipiscing
            </p>
          </div>

          <div className="feature-card">
            <div className="card-header">
              <div className="card-icon">■</div>
              <h3>Integer tincidunt. Cras dapibus</h3>
            </div>
            <p className="card-description">
              honcus, sem quam semper libero, sit ametadipiscing sem neque sed ipsum. sem
              quam semper libero, sit amet adipiscing
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}