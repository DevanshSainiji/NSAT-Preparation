import { useState } from 'react';
import '../../styles/MockTests.css';
import { mockTestData } from '../../data/mockTestData';

function MockTests() {
  const [activeTab, setActiveTab] = useState('all');
  
  const filterTests = (tests) => {
    if (activeTab === 'all') {
      return tests;
    }
    return tests.filter(test => test.category === activeTab);
  };
  
  const filteredTests = filterTests(mockTestData);
  
  return (
    <section id="mock-tests" className="mock-tests-section">
      <div className="container">
        <h2 className="section-title">Mock Test Papers</h2>
        <p className="section-subtitle">
          Practice with our carefully designed mock tests to familiarize yourself with the NSAT exam pattern 
          and improve your performance.
        </p>
        
        <div className="mock-tests-tabs">
          <button 
            className={`mock-tests-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Tests
          </button>
          <button 
            className={`mock-tests-tab ${activeTab === 'math' ? 'active' : ''}`}
            onClick={() => setActiveTab('math')}
          >
            Mathematics
          </button>
          <button 
            className={`mock-tests-tab ${activeTab === 'reasoning' ? 'active' : ''}`}
            onClick={() => setActiveTab('reasoning')}
          >
            Reasoning
          </button>
          <button 
            className={`mock-tests-tab ${activeTab === 'english' ? 'active' : ''}`}
            onClick={() => setActiveTab('english')}
          >
            English
          </button>
        </div>
        
        <div className="mock-tests-grid">
          {filteredTests.map((test, index) => (
            <div className="mock-test-card" key={index}>
              <div className={`mock-test-card-tag ${test.category}`}>
                {test.category === 'math' && 'Mathematics'}
                {test.category === 'reasoning' && 'Reasoning'}
                {test.category === 'english' && 'English'}
                {test.category === 'full' && 'Full Test'}
              </div>
              <h3 className="mock-test-title">{test.title}</h3>
              <div className="mock-test-meta">
                <span className="mock-test-duration">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {test.duration} mins
                </span>
                <span className="mock-test-questions">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 6H15.5M8.5 9H15.5M8.5 12H12M6 3C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V5C20 3.89543 19.1046 3 18 3H6Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {test.questions} Questions
                </span>
              </div>
              <p className="mock-test-description">{test.description}</p>
              <div className="mock-test-actions">
                <a href={test.pdfLink} className="btn btn-primary" target="_blank" rel="noopener">
                  Download PDF
                </a>
                <a href={test.onlineLink} className="btn btn-secondary" target="_blank" rel="noopener">
                  Take Online
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MockTests;