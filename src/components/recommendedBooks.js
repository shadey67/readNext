export default function BuildRecommendedBooks(item){
    const baseURL = 'https://www.waterstones.com/books/search/term/';
    return (
      <div className="col mb-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h4 className="card-title text-primary">{item.title}</h4>
              <p className="card-text text-muted">by {item.author}</p>
            </div>
            <div className="mt-3">
              <a 
                href={`${baseURL}${encodeURIComponent(item.title)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                Waterstones
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}