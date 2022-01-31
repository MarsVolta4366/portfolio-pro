// Reference portfolio https://coryhughart.com/
import './App.css';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Profile from './Components/Home/Profile';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div id="home">
        <Profile />
        <About />
      </div>
      <Education />
    </div>
  );
}

export default App;
