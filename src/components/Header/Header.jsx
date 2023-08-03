
import React from 'react';
import { Link } from 'react-router-dom';
import PasteleriaImage from '../NavBar/assets/PASTELERIA.png' 
import NavBar from '../NavBar/NavBar';
import "./Header.css"


function Header(props) {
    return (
        <div className='NavHeader'>
            <div className='ImgLog'>
                <Link to='/'>
                    <img  width="200px" src={PasteleriaImage} alt="logo"  />
                </Link>
            </div>
            <div className='NavBar'>
                <NavBar/>
            </div>

        </div>
    );
}

export default Header;



