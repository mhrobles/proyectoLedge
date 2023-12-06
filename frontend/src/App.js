import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import VideoPlayer from './components/VideoPlayer';
import VideosGrid from './components/VideosGrid';
import Select from './views/select';
import ShowVideo from './views/ShowVideo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Select />} />
          <Route path="/:id" element={<ShowVideo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
