import './App.css'
import Navigation from './Components/Navigation';
import { Routes,Route } from 'react-router';
import About from './Pages/About';
import Home from './Pages/Home';
import Create from './Pages/Posts/Create';
import Update from './Pages/Posts/Update';
import View from './Pages/Posts/View';

function App() {
  return (
    <div className='w-3/5 mx-auto my-10'>
      <Navigation />
      <Routes>
        <Route path ="/" element = {<Home />}></Route>
        <Route path ="about" element= {<About />}></Route>
        <Route path ="posts/create" element={<Create />}></Route>
        <Route path ="posts/update/:id" element={<Update />}></Route>
        <Route path = "posts/:id" element={<View />} ></Route>
      </Routes>
    </div>
  );
}

export default App
