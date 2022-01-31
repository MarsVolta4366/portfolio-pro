import './App.css';
import About from './Components/About/About';
import Profile from './Components/Home/Profile';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Profile />
      <About />
    </div>
  );
}

export default App;
