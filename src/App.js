import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PagProducts from './components/PagProducts/PagPRoducts';
import PagContacto from './components/PagContacto/PagContacto';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Header/>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/productos' element={<PagProducts/>}  />   
              <Route path='/contacto' element={<PagContacto/>}  />   
              <Route path='/category/:categoryId' element={<ItemListContainer/>}  />   
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}  /> 
              <Route path='*' element={<h1> 404 NOT FOUND</h1>}  />    
              <Route path='/cart' element={<Cart/>}  /> 
              <Route path='/checkout' element={<Checkout/>}  />  
            </Routes>
          </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


