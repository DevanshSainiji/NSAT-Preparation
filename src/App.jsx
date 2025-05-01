import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import MockTests from './components/sections/MockTests';
import Quizzes from './components/sections/Quizzes';
import Videos from './components/sections/Videos';
import Feedback from './components/sections/Feedback';
import Footer from './components/layout/Footer';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'NSAT Preparation - Crack NSAT with Confidence';
    
    // Add a favicon if needed
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=16";
    }
    
    // Cleanup on component unmount
    return () => {
      // Restore default title
      document.title = 'Vite + React';
    };
  }, []);
  
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MockTests />
        <Quizzes />
        <Videos />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}

export default App;