import 'bootstrap/dist/css/bootstrap.css';
import { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ErrorPage from './errorPage';
import Loading from '../components/loading';

export default function RecommendationCompenent({ 
  title, 
  placeholder, 
  apiEndpoint, 
  buildRecommendedItems,
  itemType 
}) {
  const [finishedItem, setFinishedItem] = useState('');
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestRec = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          [itemType]: finishedItem
        })
      });

      if (!response.ok) {
        throw new Error('Internal Server Error')
      }

      const data = await response.json();
      setRecommendedItems(data);
      setHasSubmitted(true);
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }, [finishedItem, apiEndpoint, itemType]);

  const handleGoBack = () => {
    setFinishedItem('');
    setRecommendedItems([]);
    setHasSubmitted(false);
    setError(null);
  };

  if (error) {
    return <ErrorPage message={error} onRetry={handleGoBack} />;
  }

  return (
    <div className="App min-vh-100 bg-light py-5">
      <div className="container">
        <header className="App-header">
          {!hasSubmitted ? (
            !loading ? (
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                  <div className="card shadow-lg border-0 rounded-3">
                    <div className="card-body p-4 p-md-5">
                      <h2 className="text-center mb-4 fw-bold text-primary">
                        {title}
                      </h2>
                      <div className="px-md-4">
                        <form className="w-100" onSubmit={requestRec}>
                          <div className="input-group input-group-lg">
                            <input
                              className="form-control border-2"
                              type="text"
                              placeholder={placeholder}
                              value={finishedItem}
                              onChange={(e) => setFinishedItem(e.target.value)}
                              required
                            />
                            <button 
                              className="btn btn-primary px-4" 
                              type="submit"
                              aria-label="Submit title"
                            >
                              <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Loading />
            )
          ) : (
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card shadow-lg border-0 rounded-3">
                  <div className="card-body p-4 p-md-5 text-center">
                    <h2 className="fw-bold text-primary mb-2">If you liked {finishedItem},</h2>
                    <h3 className="text-muted mb-4">we'd recommend:</h3>
                    <div className="recommendations-container">
                      {recommendedItems.map((item) => buildRecommendedItems(item))}
                    </div>
                    <button 
                      className="btn btn-outline-primary btn-lg mt-4 px-4" 
                      onClick={handleGoBack}
                    >
                      Search Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );  
}