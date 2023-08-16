
import React from 'react';
import PasteleriaImage from '../NavBar/assets/PASTELERIA.png' 
import "./Header.css"
import {  BrowserRouter, Link, NavLink, Route, Routes, } from 'react-router-dom';
import Main from '../Main/Main';
import PagProducts from '../PagProducts/PagPRoducts';
import PagContacto from '../PagContacto/PagContacto';
import CartWdget from '../CartWidget/CartWidget';


function Header() {
    return (
        <div className='NavHeader'>
            <div className='ImgLog'>
                <Link to='/'>
                    <img  width="150px" src={PasteleriaImage} alt="logo"  />
                </Link>
            </div>
            <div className="Nav">
                <Link to='/' element={<Main/>} className='btn'> Inicio   </Link>  
                <Link to='/Productos' element={<PagProducts/>} className='btn'>Productos  </Link>  
                <Link to='/Contacto' element={<PagContacto/>} className='btn'> Contacto  </Link>      
            </div> 
            <div className='Nav'>
                <CartWdget className="btn1"/>
            </div>
        </div>
    );
}

export default Header;



