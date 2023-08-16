import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PagProducts from './components/PagProducts/PagPRoducts';
import PagContacto from './components/PagContacto/PagContacto';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/productos' element={<PagProducts/>}  />   
        <Route path='/contacto' element={<PagContacto/>}  />   
        <Route path='/category/ :categoryId' element={<ItemListContainer/>}  />   
        <Route path='/item/ :itemId' element={<ItemDetailContainer/>}  /> 
        <Route path='*' element={<h1> 404 NOT FOUND</h1>}  />    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


