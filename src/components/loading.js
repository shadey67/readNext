import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Loader2 } from 'lucide-react';
import '../stylesheets/loading.css'; // Import custom CSS for animation

export default function Loading() {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-light">
            <div className="text-center p-5 rounded-4 shadow-lg bg-white">
                <Loader2 
                    className="mx-auto mb-4 text-primary spinner" // Updated class for spinning
                    size={64} 
                />
                <h2 className="display-6 mb-3 text-primary fw-bold">
                    Loading
                </h2>
                <p className="text-muted">
                    Please wait while we prepare your content...
                </p>
                <div className="progress mt-3" style={{height: '5px'}}>
                    <div 
                        className="progress-bar progress-bar-striped progress-bar-animated" 
                        role="progressbar" 
                        style={{width: '100%'}}
                    ></div>
                </div>
            </div>
        </div>
    );
}
