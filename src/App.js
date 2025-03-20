import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import StoryDetail from './pages/StoryDetail';
import Home from './pages/Home';
import StoryDetails from './pages/StoryDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/story/:id' element={<StoryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
