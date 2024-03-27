import React from 'react';
import { NavLink } from 'react-router-dom';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='bg-white'>
            <div className='cursor-pointer' to={'/'}>
                <img src="../../public/hogar.png" alt="Imagen logo AIRBNB" className='cursor-pointer' />
                <h2 className='txt-black'>AIRBNB</h2>
            </div>
            <div>
                <ul>
                    <NavLink to={'/rentar'} className={'cursor-pointer txt-black'} activeclassname='color-Oxford_Blue'>Rentar</NavLink>
                    <NavLink to={'/comprar'} className={'cursor-pointer txt-black'} activeclassname='color-Oxford_Blue'>Comprar</NavLink>
                    <NavLink to={'/blog'} className={'cursor-pointer txt-black'} activeclassname='color-Oxford_Blue'>Blog</NavLink>
                    <NavLink to={'/Property'} className={'cursor-pointer txt-black'} activeclassname='color-Oxford_Blue'>Propiedad</NavLink>
                </ul>
            </div>
            
                <div className='user'>
                    <FontAwesomeIcon icon={faCircleUser} size='2x' className='cursor-pointer txt-black' />
                    <div className="menu">
                        <NavLink to={'/auth'} className={'cursor-pointer txt-black'} activeclassname='color-Oxford_Blue'>Registrarse</NavLink>  
                    </div>
                </div>
            
            
        </nav>
    )
}

export default Navbar;
