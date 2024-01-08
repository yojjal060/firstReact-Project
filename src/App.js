
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import contact from './components/contact';
import blogs from './components/blogs';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' Component={home}></Route>
        <Route path='/about' Component={about}></Route>
        <Route path='/contact' Component={contact}></Route>
        <Route path='/blogs' Component={blogs}></Route>
      </Routes>
    </div>
  );
}

export default App;
