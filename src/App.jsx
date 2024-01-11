import {Routes, Route, Link} from 'react-router-dom';
import './index.css'
import './App.css'
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
import Yellow from './components/Yellow';
import Navbar from './components/Navbar';


function App() {


  return (
    <>
      <div id='container'>
       
        <Navbar />
        <div id='main-section'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blue' element={<Blue />}></Route>
            <Route path='/red' element={<Red />}></Route>
            <Route path='/yellow' element={<Yellow />}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
