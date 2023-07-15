import './App.css';
import './index';
import AboutMe from './routes/AboutMe';
import Home from './routes/Home'
import Travel from './routes/Travel'
import Projects from './routes/Projects'
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Home />
      <AboutMe />
      <Projects />
      <Travel />
    </div>
    </Router>

  );
}

export default App;

/*
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
*/