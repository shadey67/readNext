import React from 'react';
import { Award } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function EngineerRecommendation() {
    return (
        <div className="App min-vh-100 bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                            <div className="card-header bg-primary text-white text-center py-4">
                                <Award size={48} className="mx-auto mb-3" />
                                <h2 className="h3 fw-bold">Engineer Recommendation</h2>
                            </div>
                            <div className="card-body p-4 p-md-5">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h4 className="mb-1 fw-bold">Owen Shade</h4>
                                        <p className="text-muted mb-2">Full Stack Software Engineer</p>
                                    </div>
                                    <a 
                                    href="https://www.linkedin.com/in/owen-shade-a82019209/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-outline-primary"
                                    >
                                    <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                                    LinkedIn
                                    </a>
                                </div>
                                <hr className="my-4" />
                                <p className="text-muted">
                                    A top-tier full stack engineer with over two years experience working within the financial services industry.
                                    <br></br>Proven expertise in delivering high-quality software solutions using a vast array of different technological skills and disciplines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}