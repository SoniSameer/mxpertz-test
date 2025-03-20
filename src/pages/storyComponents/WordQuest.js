import { useState } from 'react';
import './wordquest.css';

export default function WordQuest({ words }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentWord = words[currentIndex];

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Restart at the beginning
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(words.length - 1); // Go to last item
    }
  };

  return (
    <div className='word-container'>
      <h2>{currentWord.Noun}</h2>
      <span className='word-type'>noun</span>

      <div className='image-container'>
        <img
          src={`https://ik.imagekit.io/dev24/${currentWord.Storyimage[0]}`}
          alt={currentWord.Storytitle}
        />
      </div>

      <p className='description'>{currentWord.Storyitext}</p>

      <div className='synonyms-antonyms'>
        <p>
          <strong>Synonyms:</strong> {currentWord.Synonyms || 'N/A'}
        </p>
        <p>
          <strong>Antonyms:</strong> {currentWord.Antonyms || 'N/A'}
        </p>
      </div>

      <div className='navigation'>
        <button onClick={handlePrevious}>{'<<'} Previous</button>
        <button onClick={handleNext}>Next {'>>'}</button>
      </div>
    </div>
  );
}
