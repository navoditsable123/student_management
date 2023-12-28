
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Addstudent from './Pages/Addstudent';
import Showstudent from './Pages/Showstudent';
import Error from './Pages/error';
import Editstudent from './Pages/Editstudent';
import Deletdata from './Pages/Deletdata'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/add' element={<Addstudent />}></Route>
        <Route path='/show' element={<Showstudent />}></Route>
        <Route path='/student/update/:studentID' element={<Editstudent />}></Route>
        <Route path='/student/delete/:studentID' element={<Deletdata />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>

    </div>
  );
}

export default App;
