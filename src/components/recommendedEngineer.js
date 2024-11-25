import React from 'react';
import { Award, Star } from 'lucide-react';

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
                                    <Star size={24} className="text-warning" />
                                </div>
                                <hr className="my-4" />
                                <p className="text-muted">
                                    A top-tier engineer with exceptional skills and proven expertise in delivering high-quality software solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}