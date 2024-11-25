import { Home, Book, Film, Code, Info } from 'lucide-react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar(){
    return(
      <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center text-primary fw-bold" href="/home">
          <Home size={24} className="me-2" />
          Recommendation Tool
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center px-3 text-dark" href="/bookRecommendation">
                <Book size={18} className="me-2" />
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center px-3 text-dark" href="/filmRecommendation">
                <Film size={18} className="me-2" />
                Films
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center px-3 text-dark" href="/engineerRecommendation">
                <Code size={18} className="me-2" />
                Engineers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center px-3 text-dark" href="/about">
                <Info size={18} className="me-2" />
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}