import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Header from './components/header';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { SpeedDial } from '@mui/material';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
