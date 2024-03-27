import React, { useState } from 'react';
import './Property.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Property() {
  const [date, setDate] = useState(new Date());
  const [showImageList, setShowImageList] = useState(false);

  const onChange = date => {
    setDate(date);
  };

  const handleLastImageClick = () => {
    setShowImageList(!showImageList); 
  };

  
  const imageUrls = [
    "/public/img/images_property.jpg",
    "/public/img/images_property.jpg",
    "/public/img/images_property.jpg",
    "/public/img/images_property.jpg",
    "/public/img/images_property.jpg",
    "/public/img/images_property.jpg",
  ];

  return (
    <div className='container'>
        <h1>Apartamentos con  hermosas vistas al bosques.</h1>
        <div className='Img'>
            <img src="/public/img/images_property.jpg" className='img-firts' alt="Frist images"/>
            <div className='img_F'>
                <img src="/public/img/images_property.jpg" className='Second_images' alt="Second images"/>
                <img src="/public/img/images_property.jpg" className='Third_images' alt="Third_images"/>
                <img src="/public/img/images_property.jpg" alt="Fourth images" />
                <img src="/public/img/images_property.jpg" alt="Fifth images" onClick={handleLastImageClick} 
                className="last-image"
                />
            </div> 
        </div>
        {showImageList && (
          <div className="img_F">
            <h2>Otras imágenes</h2>
            <div className="item">
              {imageUrls.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
              ))}
            </div>
          </div>
        )}
        <div>
            <h2>Medellin, Colombia</h2>
        </div>
        <div className='start'>
            <FontAwesomeIcon icon={faStar} size='2x' className='cursor-pointer txt-black'/>
            <p>4.5 (54 RESEÑAS)</p>
        </div>
        <div className='userPhone'>
            <img src="/public/img/userPhone.jpg" alt="Imagen de usuario" className='userP' />
            <p className='nameU'>Izuwashere</p>
            <p className='roL'>PROPIETARIO</p>
        </div>
        <div className='Comentari'>
            <p className='comentari'>El apartamento tiene espacios muy acogedores, todo esta bien distribuido.
                    Los ambientes y actividades que hay para hacer también son muy divertidas.
                    Me quiero comprar la casa de lo linda que es.
            </p>
        </div>
        <div className='servi'>
            <h2>Servicios</h2>
            <p className='se'>Television, wifi, lavadora, cocina, aire acondicionado, lavadora</p>
        </div>
        <div className='options'>
            <div className='Reserva'>
                <h1>Haz tu reserva</h1>
                <Calendar
                  onChange={onChange}
                  value={date}
                  className="custom_calendar"
                />
            </div>
            <div className='commit'>
                <p className='change'>$400.000 COP|noche</p>
                <div>
                <p>2 DE ENERO AL 20 Marzo</p>
                <p>TOTAL: $1.500.000</p>
                </div>
                <p>¿ALGUN DETALLE PARA El PROPIETARIO?</p>
                <input type="text" id="" name=""/>
                <div className='button'>
                <button type='submit'>ENVIAR RESERVA</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Property;

