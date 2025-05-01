import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../../styles/Hero.css';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    
    return () => {
      setLoaded(false);
    };
  }, []);
  
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
          <h1 className="hero-title">Crack NSAT with Confidence</h1>
          <p className="hero-description">
            Your one-stop destination for NSAT mock tests, quizzes, and learning resources.
            Prepare efficiently and ace the Newton Scholastic Aptitude Test with our
            comprehensive study materials.
          </p>
          <div className="hero-buttons">
            <Link
              to="mock-tests"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn btn-primary hero-btn"
            >
              Start Practice
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn btn-secondary hero-btn"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className={`hero-image ${loaded ? 'loaded' : ''}`}>
          <img 
            src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Student studying for NSAT" 
            className="hero-img"
          />
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#F9FAFB"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;