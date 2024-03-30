import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrusel.css";

const Carrusel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="CarouselContainer">
                <div className="container-img-carrusel cursor-pointer">
                    <Slider {...settings}>
                        <div className="imagenHover">
                            <p>Cabaña</p>
                            <img src="/img/casa-1.png" alt="carrusel"/>
                        </div>
                        <div className="imagenHover">
                            <p>Mansion</p>
                            <img src="/img/mansion-1.png" alt="carrusel" />
                        </div>
                        <div className="imagenHover">
                            <p>Apartamento</p>
                            <img src="/img/apartamento.png" alt="carrusel" />
                        </div>
                        <div className="imagenHover">
                            <p>Piscina</p>
                            <img src="/img/Lago.png" alt="carrusel" />
                        </div>
                        <div className="imagenHover">
                            <p>Lote</p>
                            <img src="/img/Unplash1.jpg" alt="carrusel" />
                        </div>
                        <div className="imagenHover">
                            <p>Motel</p>
                            <img src="/img/Unplash1.jpg" alt="carrusel" />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Carrusel;
