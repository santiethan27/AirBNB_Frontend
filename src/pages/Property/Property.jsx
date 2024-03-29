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
    "/img/images_property.jpg",
    "/img/images_property.jpg",
    "/img/images_property.jpg",
    "/img/images_property.jpg",
    "/img/images_property.jpg",
    "/img/images_property.jpg",
  ];

  return (
    <div className='container_property'>
        <h1 className='txt-black'>Apartamentos con  hermosas vistas al bosques.</h1>
        <div className='Img'>
            <img src="/img/images_property.jpg" className='img-firts' alt="Frist images"/>
            <div className='img_F'>
                <img src="/img/images_property.jpg" className='Second_images' alt="Second images"/>
                <img src="/img/images_property.jpg" className='Third_images' alt="Third_images"/>
                <img src="/img/images_property.jpg" alt="Fourth images" />
                <img src="/img/images_property.jpg" alt="Fifth images" onClick={handleLastImageClick} 
                className="last-image"
                />
            </div> 
        </div>
        {showImageList && (
          <div className="img_F">
            <h2 className='txt-black'>Otras imágenes</h2>
            <div className="item">
              {imageUrls.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
              ))}
            </div>
          </div>
        )}
        <div className='title_two'>
            <h2 className="txt-primary">Medellin, Colombia</h2>
        </div>
        <div className='start'>
            <FontAwesomeIcon icon={faStar} size='2x' className='cursor-pointer txt-black' />
            <p className='txt-black'>4.5 (54 RESEÑAS)</p>
        </div>
        <div className='userPhone'>
            <img src="/img/userPhone.jpg" alt="Imagen de usuario" className='userP'/>
                <div className='sas'>
                <p className='txt-black'>Izuwashere</p>
                <p className='txt-black'>PROPIETARIO</p>
                </div>
        </div>
        <div className='Comentari'>
            <p className='txt-black'>El apartamento tiene espacios muy acogedores, todo esta bien distribuido.
                    Los ambientes y actividades que hay para hacer también son muy divertidas.
                    Saquemen del front no quiero, esto es peor que ser amigo de un chamo.
            </p>
        </div>
        <div className='servi'>
            <h2 className='txt-black'>Servicios</h2>
            <p className='txt-black'>Television, wifi, lavadora, cocina, aire acondicionado, lavadora</p>
        </div>
        <div className='options'>
            <div className='Reserva'>
                <h1 className="txt-primary">Haz tu reserva</h1>
                <Calendar
                  onChange={onChange}
                  value={date}
                  className="custom_calendar"
                />
            </div>
            <div className='commit'>
                <p className="txt-primary">$400.000 COP|noche</p>
                <div>
                <p className='txt-black'>2 DE ENERO AL 20 Marzo</p>
                <p className='txt-black'>TOTAL: $1.500.000</p>
                </div>
                <p className='txt-black'>¿ALGUN DETALLE PARA El PROPIETARIO?</p>
                <input type="text" id="" name="" className='txt-black'/>
                <div>
                <button type='submit'>ENVIAR RESERVA</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Property;

