import { Link } from 'react-router-dom';

export default function BlogCard({id, title, excerpt}){
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="neon-text">{title}</h5>
          <p className="text-secondary small">{excerpt}</p>
          <Link to={`/blogs/${id}`} className="btn btn-sm btn-outline-info">Leer más</Link>
        </div>
      </div>
    </div>
  );
}