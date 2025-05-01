import { useState, useRef } from 'react';
import '../../styles/Feedback.css';

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset the form submission state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    } else {
      // Focus the first field with an error
      const firstErrorField = Object.keys(errors)[0];
      if (formRef.current && formRef.current[firstErrorField]) {
        formRef.current[firstErrorField].focus();
      }
    }
  };
  
  return (
    <section id="feedback" className="feedback-section">
      <div className="container">
        <h2 className="section-title">Give Feedback</h2>
        <p className="section-subtitle">
          We value your feedback! Share your thoughts, suggestions, or questions to help us improve your NSAT preparation experience.
        </p>
        
        <div className="feedback-container">
          <div className="feedback-content">
            <div className="feedback-card">
              <div className="feedback-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Share Your Experience</h3>
              <p>Tell us about your preparation journey and how our resources have helped you.</p>
            </div>
            
            <div className="feedback-card">
              <div className="feedback-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17H6C4.34315 17 3 15.6569 3 14V8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V14C21 15.6569 19.6569 17 18 17H14.337M9.663 17L6.2 20.4C6.08872 20.5113 6 20.652 6 20.8V21M9.663 17H14.337M14.337 17L17.8 20.4C17.9113 20.5113 18 20.652 18 20.8V21M12 11H12.01M8 11H8.01M16 11H16.01" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Request New Resources</h3>
              <p>Let us know what additional study materials or features would be helpful for your preparation.</p>
            </div>
            
            <div className="feedback-card">
              <div className="feedback-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.25 11.25L11.25 7.5C11.25 7.0858 11.5858 6.75 12 6.75C12.4142 6.75 12.75 7.0858 12.75 7.5V11.25H16.5C16.9142 11.25 17.25 11.5858 17.25 12C17.25 12.4142 16.9142 12.75 16.5 12.75H12.75V16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5V12.75H7.5C7.0858 12.75 6.75 12.4142 6.75 12C6.75 11.5858 7.0858 11.25 7.5 11.25H11.25ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Report Issues</h3>
              <p>Found an error or issue with any of our materials? Let us know so we can fix it promptly.</p>
            </div>
          </div>
          
          <div className="feedback-form-container">
            {isSubmitted ? (
              <div className="feedback-success">
                <div className="feedback-success-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Thank You!</h3>
                <p>Your feedback has been submitted successfully. We appreciate your input and will review it shortly.</p>
              </div>
            ) : (
              <form className="feedback-form" onSubmit={handleSubmit} ref={formRef}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${formErrors.name ? 'error' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                  {formErrors.name && <div className="form-error">{formErrors.name}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${formErrors.email ? 'error' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                  />
                  {formErrors.email && <div className="form-error">{formErrors.email}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`form-input ${formErrors.subject ? 'error' : ''}`}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Feedback subject"
                  />
                  {formErrors.subject && <div className="form-error">{formErrors.subject}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-textarea ${formErrors.message ? 'error' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message or feedback"
                    rows="5"
                  ></textarea>
                  {formErrors.message && <div className="form-error">{formErrors.message}</div>}
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="submit-loading">
                      <svg className="spinner" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none" strokeWidth="4" />
                      </svg>
                      Submitting...
                    </span>
                  ) : 'Submit Feedback'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;