import { useState, useRef } from 'react';
import '../../styles/Quizzes.css';
import { quizData } from '../../data/quizData';

function Quizzes() {
  const [activeSubject, setActiveSubject] = useState('all');
  const scrollContainerRef = useRef(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  const filteredQuizzes = activeSubject === 'all' 
    ? quizData 
    : quizData.filter(quiz => quiz.subject === activeSubject);
  
  return (
    <section id="quizzes" className="quizzes-section">
      <div className="container">
        <h2 className="section-title">Topic-wise Quizzes</h2>
        <p className="section-subtitle">
          Test your knowledge with our specialized quizzes designed to help you practice specific topics.
        </p>
        
        <div className="quiz-filters">
          <button 
            className={`quiz-filter-btn ${activeSubject === 'all' ? 'active' : ''}`}
            onClick={() => setActiveSubject('all')}
          >
            All Topics
          </button>
          <button 
            className={`quiz-filter-btn ${activeSubject === 'math' ? 'active' : ''}`}
            onClick={() => setActiveSubject('math')}
          >
            Mathematics
          </button>
          <button 
            className={`quiz-filter-btn ${activeSubject === 'reasoning' ? 'active' : ''}`}
            onClick={() => setActiveSubject('reasoning')}
          >
            Reasoning
          </button>
          <button 
            className={`quiz-filter-btn ${activeSubject === 'english' ? 'active' : ''}`}
            onClick={() => setActiveSubject('english')}
          >
            English
          </button>
        </div>
        
        <div className="quiz-carousel-container">
          <button className="quiz-carousel-arrow quiz-carousel-prev" onClick={scrollLeft}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="quiz-carousel" ref={scrollContainerRef}>
            {filteredQuizzes.map((quiz, index) => (
              <div className={`quiz-card ${quiz.subject}`} key={index}>
                <div className="quiz-card-header">
                  <span className="quiz-difficulty" data-level={quiz.difficulty}>
                    {quiz.difficulty}
                  </span>
                  <span className="quiz-questions">{quiz.questions} Questions</span>
                </div>
                <h3 className="quiz-title">{quiz.title}</h3>
                <p className="quiz-description">{quiz.description}</p>
                <div className="quiz-footer">
                  <span className="quiz-time">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {quiz.time} mins
                  </span>
                  <a href={quiz.link} className="btn btn-primary quiz-btn" target="_blank" rel="noopener">
                    Start Quiz
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <button className="quiz-carousel-arrow quiz-carousel-next" onClick={scrollRight}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="quiz-benefits">
          <div className="quiz-benefit-item">
            <div className="quiz-benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="quiz-benefit-content">
              <h4>Instant Feedback</h4>
              <p>Get immediate results and detailed explanations for each question to understand concepts better.</p>
            </div>
          </div>
          
          <div className="quiz-benefit-item">
            <div className="quiz-benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="quiz-benefit-content">
              <h4>Progress Tracking</h4>
              <p>Monitor your improvement over time with our detailed analytics and performance metrics.</p>
            </div>
          </div>
          
          <div className="quiz-benefit-item">
            <div className="quiz-benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="quiz-benefit-content">
              <h4>Targeted Practice</h4>
              <p>Focus on specific topics or subjects to strengthen your weak areas and boost your overall score.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quizzes;