import { faStar } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom';

const CardsVenta = () => {
    const Imagen = '/img/Unplash1.jpg';
    const N = 10
    const imagenRepetir = Array(N).fill(Imagen)

    const details = {
        tittle: "Medellin, Colombia",
        points: 4.5,
        price: '400.000',
        description: 'Apartamento, con hermosas vistas...',
        time: 'noche.',
    }

    return (
        <div className='container-img-main txt-black'>
            {imagenRepetir.map((imagenRepetida, i) => (
                <div to={'/property'} className='cursor-pointer'>
                    <NavLink to={'/property'} className='txt-black'>
                        <img key={i} src={imagenRepetida} alt={`Imagen ${i}`} />
                        <div className='container-details'>
                            <h3 >{details.tittle} </h3>
                            <div className='container-price'>
                                <h5><FontAwesomeIcon icon={faStar} size='1x' /></h5>
                                <h3>{details.points}</h3>
                            </div>
                        </div>
                        <p className='txt-description'>{details.description}</p>
                        <div className='container-price'>
                            <h3>${details.price}COP</h3>
                            <p>{details.time}</p>
                        </div>
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default CardsVenta
