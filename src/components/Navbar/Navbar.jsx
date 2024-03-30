import React from 'react';
import { NavLink } from 'react-router-dom';
import { faCircle, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='bg-white'>
            <div className='cursor-pointer' to={'/'}>
                <img src="/img/hogar.png" alt="Imagen logo AIRBNB" className='cursor-pointer' />
                <h2 className='txt-black'>AIRBNB</h2>
            </div>
            <div>
                <ul>
                    <NavLink to={'/'} className={'cursor-pointer txt-black'}> <FontAwesomeIcon className='' icon={faCircle} /> Rentar</NavLink>
                    <NavLink to={'/comprar'} className={'cursor-pointer txt-black'}> <FontAwesomeIcon icon={faCircle} /> Comprar</NavLink>
                    <NavLink to={'/blog'} className={'cursor-pointer txt-black'}> <FontAwesomeIcon icon={faCircle} /> Blog</NavLink>
                </ul>
            </div>
            <div className="user">
                <input type="checkbox" id="menu-toggle" className="hidden" />
                <label htmlFor="menu-toggle" className="icon">
                    <FontAwesomeIcon icon={faCircleUser} size='2x' className='cursor-pointer txt-black' />
                </label>
                <div class="menu bg-white">
                    <NavLink to={'/auth/login'} className={'cursor-pointer txt-black'}>Inicio de Sesion</NavLink>
                    <NavLink to={'/auth'} className={'cursor-pointer txt-black'}>Registrarse</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
