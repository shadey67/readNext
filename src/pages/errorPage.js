import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faRefresh } from '@fortawesome/free-solid-svg-icons';

export default function ErrorPage({ message, onRetry }) {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="card shadow-lg border-0 rounded-3 bg-danger text-white">
            <div className="card-body p-5">
              <FontAwesomeIcon icon={faExclamationTriangle} size="3x" className="mb-4" />
              <h2 className="mb-3">Oops! Something Went Wrong</h2>
              <p className="mb-4">{message}</p>
              <button 
                className="btn btn-light btn-lg"
                onClick={onRetry}
              >
                <FontAwesomeIcon icon={faRefresh} className="me-2" />
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}