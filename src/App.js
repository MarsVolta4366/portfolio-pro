import './App.css';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Profile from './Components/Home/Profile';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div id="home">
        <Profile />
        <About />
      </div>
      <span id="education"></span>
      <Education />
      <span id="projects"></span>
      <Projects />
    </div>
  );
}

export default App;
