import {Routes, Route, Link} from 'react-router-dom';
import './index.css'
import './App.css'
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
import Yellow from './components/Yellow';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import RouterComponent from './components/RouterComponent';


function App() {


  return (
    <>
      <div id='container'>
        <Navbar />
        <RouterComponent />
        <Footer />
      </div>
    </>
  )
}

export default App
