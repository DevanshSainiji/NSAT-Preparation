import '../../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About NSAT</h2>
        <p className="section-subtitle">
          The Newton Scholastic Aptitude Test (NSAT) is a competitive examination that assesses students' 
          analytical and problem-solving abilities.
        </p>
        
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="about-card-title">Exam Duration</h3>
            <p className="about-card-description">
              The NSAT examination is conducted over a duration of 3 hours with 80 multiple-choice questions.
              Students must manage their time efficiently to complete all sections.
            </p>
          </div>
          
          <div className="about-card">
            <div className="about-card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="about-card-title">Exam Pattern</h3>
            <p className="about-card-description">
              The test consists of three main sections: Mathematics (30 questions), 
              Logical Reasoning (30 questions), and English Aptitude (20 questions).
              Each section tests different cognitive abilities.
            </p>
          </div>
          
          <div className="about-card">
            <div className="about-card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="about-card-title">Eligibility</h3>
            <p className="about-card-description">
              Students from grade 12 and above are eligible to appear for the NSAT. 
            </p>
          </div>
          
          <div className="about-card">
            <div className="about-card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="about-card-title">Scoring</h3>
            <p className="about-card-description">
              Each correct answer earns 4 marks, while each incorrect answer results in a deduction of 1 mark.
              Unanswered questions receive no marks. Final scores determine scholarships and awards.
            </p>
          </div>
        </div>
        
        <div className="about-importance">
          <h3>Why NSAT Matters</h3>
          <p>
            The NSAT is an internationally recognized test that helps identify students with exceptional 
            aptitude. Top performers receive scholarships, recognition, and opportunities for advanced 
            academic programs. Preparation for NSAT enhances critical thinking skills beneficial for 
            academic and professional success.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;