import RecommendationCompenent from '../pages/recommendationComponent';
import BuildRecommendedBooks from '../components/recommendedBooks';

export default function BookRecommendationCompenent() {
  return (
    <RecommendationCompenent 
      title="What Book Did You Just Read?"
      placeholder="Enter book title..."
      apiEndpoint={process.env.REACT_APP_BOOK_ENDPOINT}
      buildRecommendedItems={BuildRecommendedBooks}
      itemType="book"
    />
  );
}