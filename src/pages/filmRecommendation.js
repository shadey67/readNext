import 'bootstrap/dist/css/bootstrap.css';
import { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import buildRecommendedFilms from '../components/recommendedFilms';
import ErrorPage from './errorPage';
import Loading from '../components/loading';

export default function FilmRecommendation() {
  const [finishedFilm, setFinishedFilm] = useState('');
  const [recommendedFilms, setRecommendedFilms] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_ENDPOINT = process.env.REACT_APP_FILM_ENDPOINT;

  const requestRec = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        film: finishedFilm
      })
    });

    if(!response.ok){
      throw new Error('Internal Server Error')
    }

    const data = await response.json();
    setRecommendedFilms(data);
    setHasSubmitted(true);
  } catch(error){
    setError(error.message);
  }finally{
    setLoading(false);
  }
  }, [finishedFilm]);

  const handleGoBack = () => {
    setFinishedFilm('');
    setRecommendedFilms([]);
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
                      <h2 className="text-center mb-4 fw-bold text-primary">What Film Did You Just Watch?</h2>
                      <div className="px-md-4">
                        <form className="w-100" onSubmit={requestRec}>
                          <div className="input-group input-group-lg">
                            <input
                              className="form-control border-2"
                              type="text"
                              placeholder="Enter film title..."
                              value={finishedFilm}
                              onChange={(e) => setFinishedFilm(e.target.value)}
                              required
                            />
                            <button className="btn btn-primary px-4" type="submit">
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
                    <h2 className="fw-bold text-primary mb-2">If you liked {finishedFilm},</h2>
                    <h3 className="text-muted mb-4">we'd recommend:</h3>
                    <div className="recommendations-container">
                      {recommendedFilms.map((item) => buildRecommendedFilms(item))}
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


