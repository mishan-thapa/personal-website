import './App.css';
import './index';
import Home from './routes/Home'
import Travel from './routes/Travel'
import Projects from './routes/Projects'
import AboutMe from './routes/AboutMe'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
