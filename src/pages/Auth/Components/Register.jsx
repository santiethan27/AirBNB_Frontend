import React, { useState } from "react";
import {useForm} from "react-hook-form";
import './Register.css';

function Register ({handleToggle}) {
    const {handleSubmit, formState: {errors}, register } = useForm();
    const [showLogin, setShowLogin] = useState();

    const onSubmit = (data) =>{
        console.log(data);
    }


    return(
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="logo-form">
                        <img src="../../public/hogar.png" className='cursor-pointer' />
                        <h2 className='txt-black'>AIRBNB</h2>
                    </div>
                    <h1 className="txt-primary">Registrarse</h1>
                <div className="g-input">
                    <input type="email" placeholder="Email"{...register('email', {required: true})}
                    />{errors.email && (<p className="error-message">Este es campo es requerido</p>)}
                </div>
                <div className="g-input">
                    <input type="password" placeholder="Contraseña"{...register('password', {required:true})}
                    />{errors.password && (<p className="error-message">Este es campo es requerido</p>)}
                </div>
                <div className="nested">
                    <div className="g-input">
                    <input type="text" placeholder="Nombre"{...register('name', {required: true})}
                    />{errors.name && (<p className="error-message">Este es campo es requerido</p>)}
                    </div>
                    <div className="g-input">
                    <input type="text" placeholder="Apellido"{...register('lastname', {required: true})}
                    />{errors.lastname && (<p className="error-message">Este es campo es requerido</p>)}
                    </div>
                </div>
                <div className="nested">
                    <div className="g-input">
                    <input type="text" placeholder="Telefono"{...register('phone', {required: true})}
                    />{errors.phone && (<p className="error-message">Este es campo es requerido</p>)}
                    </div>
                    <div className="g-input">
                    <input type="date" placeholder="Fecha de nacimiento"{...register('birthdate', {required: true})}
                    />{errors.birthdate && (<p className="error-message">Este es campo es requerido</p>)}
                    </div>
                </div>
                <div className="options">
                    <a href="#" className="txt-primary" onClick={handleToggle}>¿Ya tienes cuenta?</a><a href="" className="txt-primary">¿Olvidaste tu contraseña?</a>
                </div>
                    <button className="bg-primary" type="submit">Registrarse</button>
                </form>
    )
}
export default Register