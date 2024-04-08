import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { faCircle, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('.user')) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='bg-white'>
            <Link className='cursor-pointer logo' to={'/'}>
                <img src="/img/hogar.png" alt="Imagen logo AIRBNB" className='cursor-pointer' />
                <h2 className='txt-primary'>airbnb</h2>
            </Link>
            <div>
                <ul>
                    <NavLink to={'/'} className={'cursor-pointer'}> <FontAwesomeIcon className='' icon={faCircle} /> Rentar</NavLink>
                    <NavLink to={'/comprar'} className={'cursor-pointer'}> <FontAwesomeIcon icon={faCircle} /> Comprar</NavLink>
                    <NavLink to={'/blog'} className={'cursor-pointer'}> <FontAwesomeIcon icon={faCircle} /> Blog</NavLink>
                </ul>
            </div>
            <div className="user" onClick={toggleMenu}>
                <label htmlFor="menu-toggle" className="icon">
                    <FontAwesomeIcon icon={faCircleUser} size='2x' className='cursor-pointer txt-black' />
                </label>
                <div className={`menu bg-white ${menuOpen ? 'open' : 'closed'}`}>
                    <NavLink to={'/auth/login'} className={'cursor-pointer txt-black'}>Inicio de Sesion</NavLink>
                    <NavLink to={'/auth'} className={'cursor-pointer txt-black'}>Registrarse</NavLink>
                    <NavLink to={'/auth'} className={'cursor-pointer txt-black'}>Cerrar sesion</NavLink>
                    <NavLink to={'/edit_profile'} className={'cursor-pointer txt-black'}>Mi perfil</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
