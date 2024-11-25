import React from 'react';
import { Briefcase, GraduationCap, MessageSquare } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 rounded-3 h-100">
              <div className="card-body p-4 p-lg-5">
                <div className="mb-4">
                  <h5 className="text-muted mb-3">This tool helps you discover new books, films and more based on your current interests.</h5>
                  <div className="border-start border-4 border-primary ps-4 mb-4">
                    <p>
                    The application is hooked up to a Bedrock instace on AWS, which in turn is linked to a Llama agent.
                    </p>
                    <p>
                    When you ask us for a recommendation, we hit our API gateway instance which then calls the appropriate
                    Lambda function.
                    </p>
                    <p>
                    In just a few short seconds we can have three recommendations back to you, along with the option
                    to buy the book on Waterstones - or visit the film on IMDb.
                    </p>
                  </div>
                  <h6 className="text-muted mb-3">Please feel free to reach out with any feedback!</h6>
                  <div className="d-flex gap-3">
                    <a 
                      href="https://www.linkedin.com/in/owen-shade-a82019209/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-primary"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                      LinkedIn
                    </a>
                    <a 
                      href="mailto:owenshade4@gmail.com" 
                      className="btn btn-outline-primary"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm border-0 rounded-3">
              <div className="card-body p-4">
                <h2 className="h3 fw-bold text-primary mb-4">About Me</h2>
               
                <div className="d-flex align-items-start mb-4">
                  <div className="me-3">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Full Stack Software Engineer</h5>
                    <p className="text-muted">
                      Currently working at Barclays UK, building side projects to explore new technologies.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <div className="me-3">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Education</h5>
                    <p className="text-muted">
                      Computer Science graduate from The University of Glasgow, Class of 2022.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="me-3">
                    <MessageSquare className="text-primary" size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Let's Connect</h5>
                    <p className="text-muted mb-0">
                      Have questions or want to discuss the project? Feel free to reach out on LinkedIn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}