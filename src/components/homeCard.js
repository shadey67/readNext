import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


export default function HomeCard({url, buttonText, icon, text}) {
    return(
        <Link 
        to={url} 
        className="card mb-3 w-100 hover-lift transition-all text-decoration-none" 
        style={{ maxWidth: '400px' }}
      >
        <div className="card-body d-flex align-items-center">
          <div className="me-4 text-primary">
            {icon}
          </div>
          <div>
            <h5 className="card-title text-dark mb-0">{buttonText}</h5>
            <p className="text-muted small mb-0">{text}</p>
          </div>
        </div>
      </Link>
    )
}


