import React from "react";
import './Register.css';
import {useForm} from "react-hook-form";

function Login ({handleToggle}){
    const {handleSubmit, formState: {errors}, register} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }

    return(
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Iniciar sesion</h1>
                    <div className="g-input">
                    <input type="email" placeholder="Email"{...register('email', {required: true})}
                    />{errors.email && (<p className="error-message">Este es campo es requerido</p>)}
                </div>
                <div className="g-input">
                    <input type="password" placeholder="Contraseña"{...register('password', {required:true})}
                    />{errors.password && (<p className="error-message">Este es campo es requerido</p>)}
                </div>
                <div className="options">
                    <a href="#" onClick={handleToggle}>¿Ya tienes cuenta?</a><a href="">¿Olvidaste tu contraseña?</a>
                </div>
                    <button className="bg-primary" type="submit">Iniciar sesion</button>  
                </form>
    )

}

export default Login

