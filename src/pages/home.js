import 'bootstrap/dist/css/bootstrap.css';
import HomeCard from '../components/homeCard';
import { Book, Film, Code } from 'lucide-react'; 

export default function Home() {
    return(
        <div className="container py-5">
      <div className="d-flex flex-column align-items-center">
        <HomeCard 
          url="/bookRecommendation" 
          buttonText="Book Recommendation" 
          icon={<Book size={32} />}
          text="Find your next great read!" 
        />
        <HomeCard 
          url="/filmRecommendation" 
          buttonText="Film Recommendation" 
          icon={<Film size={32} />}
          text="Looking for a new film?" 
        />
        <HomeCard 
          url="/engineerRecommendation" 
          buttonText="Engineer Recommendation" 
          icon={<Code size={32} />}
          text="Hire the best talent for your project." 
        />
      </div>
    </div>
    )
}


