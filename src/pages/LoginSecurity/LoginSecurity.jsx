import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import './LoginSecurity.css';

function LoginSecurity() {
    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const { handleSubmit, formState: { errors }, register } = useForm();

    const handleModifyClick = () => {
        setShowPasswordFields(!showPasswordFields);
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="login-container">
            <h2 className="txt-primary">Inicio de Sesión</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="password-container">
                    <div className="password-content">
                        <label htmlFor="password" className="label-password">Contraseña:</label>
                        <input type="password" id="password" name="password" className="input-password" placeholder="Contraseña modificada hace 18 horas" {...register('password', { required: true })} />
                        {errors.password && <p className="error-message">Este campo es requerido</p>}
                    </div>
                 
                </div>
                {showPasswordFields && (
                    <div className="password-fields">
                        <label htmlFor="currentPassword" className="label-password">Contraseña Actual:</label>
                        <input type="password" id="currentPassword" name="currentPassword" className="input-password" {...register('currentPassword', { required: true })} />
                        {errors.currentPassword && <p className="error-message">Este campo es requerido</p>}
                        <label htmlFor="newPassword" className="label-password">Nueva Contraseña:</label>
                        <input type="password" id="newPassword" name="newPassword" className="input-password" {...register('newPassword', { required: true })} />
                        {errors.newPassword && <p className="error-message">Este campo es requerido</p>}
                        <label htmlFor="confirmPassword" className="label-password">Confirmar Contraseña:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="input-password" {...register('confirmPassword', { required: true })} />
                        {errors.confirmPassword && <p className="error-message">Este campo es requerido</p>}
                        <div className="button-container">
                            <button className="bg-primary" type="submit" >Guardar Cambios</button>
                        </div>
                    </div>

                )}

            </form>
        </div>
    );
}

export default LoginSecurity;
