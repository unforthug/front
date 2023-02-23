
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Nav_bar from './Components/Nav_bar';
import B_S from './Pages/B_S';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import News from './Pages/News';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav_bar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/buy&sell' element={<B_S/>}/>
        <Route path='/movies' element={<Movies/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
