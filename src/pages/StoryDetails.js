import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../storydetail.css';
import WordQuest from './storyComponents/WordQuest';
import BrainQ from './storyComponents/BrainQ';
import StoryAdventure from './storyComponents/StoryAdventure';

export default function StoryDetails() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [activeTab, setActiveTab] = useState('Word Explorer');

  useEffect(() => {
    fetch(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`)
      .then((res) => res.json())
      .then((data) => setStory(data))
      .catch((err) => console.error('Error fetching story:', err));
  }, [id]);

  if (!story) return <p>Loading...</p>;

  let { Wordexplore, Storyadvenure, Brainquest } = story;

  return (
    <div className='story-details-container'>
      <header className='header'>
        <h1>{story.Title}</h1>
      </header>

      <div className='tabs'>
        <button
          className={activeTab == 'Word Explorer' ? 'active' : ''}
          onClick={() => setActiveTab('Word Explorer')}
        >
          Word Explorer
        </button>
        <button
          className={activeTab == 'Story Adventure' ? 'active' : ''}
          onClick={() => setActiveTab('Story Adventure')}
        >
          Story Adventure
        </button>
        <button
          className={activeTab == 'Brain Quest' ? 'active' : ''}
          onClick={() => setActiveTab('Brain Quest')}
        >
          Brain Quest
        </button>
      </div>

      {activeTab === 'Word Explorer' && <WordQuest words={Wordexplore} />}
      {activeTab === 'Story Adventure' && (
        <StoryAdventure storyData={Storyadvenure} />
      )}
      {activeTab === 'Brain Quest' && <BrainQ questions={Brainquest} />}
    </div>
  );
}
