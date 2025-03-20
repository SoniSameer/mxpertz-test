import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://mxpertztestapi.onrender.com/api/sciencefiction')
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className='container'>
      <h1>Science Fiction Stories</h1>
      <div className='grid'>
        {stories.slice(0, 4).map((story) => (
          <Link key={story._id} to={`/story/${story._id}`} className='card'>
            <h2>{story.Title}</h2>
            <img
              src={`https://ik.imagekit.io/dev24/${story?.Image?.[0]}`}
              alt={story.Title}
              className='card-image'
            />
            <p>{story?.Storyadvenure?.Storytitle || ''}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
