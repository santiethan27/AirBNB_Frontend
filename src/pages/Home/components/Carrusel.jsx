import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrusel.css";

const Carrusel = () => {
<<<<<<< HEAD
=======
    const effectHover = [
        {
            texto: "Hoteles",
        },
        {
            texto: "Cabañas",
        },
        {
            texto: "Fincas",
        },
    ];

>>>>>>> 808572b7b83db6401f75107399f73ebabbf613ab
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
<<<<<<< HEAD
        speed: 3000,
=======
        speed: 2000,
>>>>>>> 808572b7b83db6401f75107399f73ebabbf613ab
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="CarouselContainer">
                <div className="container-img-carrusel cursor-pointer">
                    <Slider {...settings}>
<<<<<<< HEAD
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
=======
                        <div>
                            <img src="/img/Unplash1.jpg" alt="carrusel" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, accusamus quo. Mollitia quaerat neque libero. Dicta tempore sunt aut aliquam eos iste impedit quos similique.</p>
                        </div>
                        <div>
                            <img src="/img/Unplash1.jpg" alt="carrusel" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, accusamus quo. Mollitia quaerat neque libero. Dicta tempore sunt aut aliquam eos iste impedit quos similique.</p>
                        </div>
                        <div>
                            <img src="/img/Unplash1.jpg" alt="carrusel" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, accusamus quo. Mollitia quaerat neque libero. Dicta tempore sunt aut aliquam eos iste impedit quos similique.</p>
                        </div>
                        <div>
                            <img src="/img/Unplash1.jpg" alt="carrusel" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, accusamus quo. Mollitia quaerat neque libero. Dicta tempore sunt aut aliquam eos iste impedit quos similique.</p>
                        </div>
                        <div>
                            <img src="/img/Unplash1.jpg" alt="carrusel" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, accusamus quo. Mollitia quaerat neque libero. Dicta tempore sunt aut aliquam eos iste impedit quos similique.</p>
                        </div>
                        <div>
                            <img src="/img/Unplash1.jpg" alt="carrusel" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, accusamus quo. Mollitia quaerat neque libero. Dicta tempore sunt aut aliquam eos iste impedit quos similique.</p>
>>>>>>> 808572b7b83db6401f75107399f73ebabbf613ab
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Carrusel;
