import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills  from './components/Skills';
import Project from './components/Project'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;