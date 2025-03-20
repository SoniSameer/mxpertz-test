import { useState } from 'react';
import './storyadventure.css';

export default function StoryAdventure({ storyData }) {
  const { Storytitle, content } = storyData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSection = content[currentIndex];

  const handleNext = () => {
    if (currentIndex < content.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className='story-container'>
      <h2>{Storytitle}</h2>
      <div className='story-section'>
        <div className='image-gallery'>
          {currentSection.Storyimage.map((image, index) => (
            <img
              key={index}
              src={`https://ik.imagekit.io/dev24/${image}`}
              alt={`Scene ${index + 1}`}
            />
          ))}
        </div>
        <div className='text-content'>
          {currentSection.Paragraph.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
      <button className='next-btn' onClick={handleNext}>
        {currentIndex < content.length - 1 ? 'Next' : 'Restart Story'}
      </button>
    </div>
  );
}
