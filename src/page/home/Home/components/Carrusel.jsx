import React from 'react'


const Carrusel = () => {
    const Imagen = '/Unplash2.jpg';
    const N = 10
    const imagenRepetir = Array(N).fill(Imagen)
    return (
        <div className='carrusel'>
            <div className='container-img-carrusel'>
                {imagenRepetir.map((imagenRepetida, i) => (
                    <img key={i} src={imagenRepetida} alt={`Imagen ${i}`} />
                ))}
            </div>
        </div>
    )
}

export default Carrusel
