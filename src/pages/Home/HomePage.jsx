import React from 'react';
import ListBox from './components/ListBox';
import './HomePage.css';
import Carrusel from './components/Carrusel';
import CardsVenta from './components/CardsVenta';

const HomPage = () => {

    return (
        <div>
            <header className='bg-secundary'>
                <section className='txt-white'>
                    <h2>Encuentra tu próxima estancia</h2>
                    <h3>Busca ofertas en hoteles, casas y mucho más...</h3>
                    <div className='selector-option'>
                        <input type="text" />
                        <ListBox />
                    </div>
                </section>
                <section>
                    <img src="/img/HeaderHome.png" alt="Imagen del header relacionada con viaje" />
                </section>
            </header>
            <main>
                <div>
                    <Carrusel />
                </div>
                <CardsVenta />
            </main>
        </div>
    )
}

export default HomPage
