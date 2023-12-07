import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
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
