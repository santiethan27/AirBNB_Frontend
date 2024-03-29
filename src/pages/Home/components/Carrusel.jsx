import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrusel.css";

const Carrusel = () => {
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

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="CarouselContainer">
                <div className="container-img-carrusel cursor-pointer">
                    <Slider {...settings}>
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
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Carrusel;
