import { faStar } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useProperty } from '../../../context/PropertyContext';

const CardsVenta = () => {
    const { propertysAll, _getPropertys } = useProperty();

    useEffect(() => {
        _getPropertys();
    }, []);

    return (
        <div className='container-img-main txt-black'>
            {propertysAll.map((property) => (
                <div to={'/property'} className='cursor-pointer'>
                    <NavLink to={`/property/${property.id}`} className='txt-black'>
                        <img key={property.id} src={property.images[0]} alt={property.images} />
                        <div className='container-details'>
                            <h3 >Prueba </h3>
                            <div className='container-price'>
                                <h5><FontAwesomeIcon icon={faStar} size='1x' /></h5>
                                <h3>{property.rating}</h3>
                            </div>
                        </div>
                        <p className='txt-description'>{property.description}</p>
                        <div className='container-price'>
                            <h3>$1.200.000 COP</h3>
                            <p>{property.size}</p>
                        </div>
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default CardsVenta
