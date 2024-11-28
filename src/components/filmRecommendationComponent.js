import buildRecommendedFilms from '../components/recommendedFilms';
import RecommendationCompenent from '../pages/recommendationComponent';

export default function FilmRecommendationCompenent() {
  return (
    <RecommendationCompenent 
      title="What Film Did You Just Watch?"
      placeholder="Enter film title..."
      apiEndpoint={process.env.REACT_APP_FILM_ENDPOINT}
      buildRecommendedItems={buildRecommendedFilms}
      itemType="film"
    />
  );
}