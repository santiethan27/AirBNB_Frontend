import React from 'react'
import { useForm } from 'react-hook-form';
import './Edit_Profile.css'

function Edit_Profile() {
    const { handleSubmit, formState: { errors }, register } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    return (
        <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="txt-primary">Modifica tus datos personales</h1>
            <div className="image-container">
                <label htmlFor="imageUpload">
                    <img src="./img/profile.png" alt="Profile" className="profile-image"/></label>
                <input id="imageUpload"type="file"accept="image/*"onChange={handleImageChange} />
            </div>
            
            <div className="f-input">
                <input type="name" placeholder="Nombre"{...register('text', { required: true })}
                />{errors.name && (<p className="error-message">Este  campo es requerido</p>)}
            </div>
            <div className="f-input">
                    <input type="text" placeholder="Apellido"{...register('lastname', { required: true })}
                    />{errors.lastname && (<p className="error-message">Este es campo es requerido</p>)}
             </div>
             <div className="f-input">
                    <input type="text" placeholder="Telefono"{...register('phone', { required: true })}
                    />{errors.phone && (<p className="error-message">Este es campo es requerido</p>)}
                </div>
                <div className="f-input">
                    <input type="text" placeholder="Rol"{...register('phone', { required: true })}
                    />{errors.text && (<p className="error-message">Este es campo es requerido</p>)}
                </div>
                <div className="f-input">
                    <input type="text" placeholder="Estado"{...register('phone', { required: true })}
                    />{errors.text && (<p className="error-message">Este es campo es requerido</p>)}
                </div>
                <div className="f-input">
                    <input type="text" placeholder="Descripcion"{...register('phone', { required: true })}
                    />{errors.text && (<p className="error-message">Este es campo es requerido</p>)}
                </div>
                <div className="m-input">
                <input type="text" placeholder="Calle"{...register('text', { required: true })}
                />{errors.text && (<p className="error-message">Este  campo es requerido</p>)}

                <select {...register('city', { required: true })}>
                    <option value="">Seleccione la ciudad</option>
                    <option value="Ciudad de México">Ciudad de México</option>
                    <option value="Guadalajara">Guadalajara</option>
                    <option value="Monterrey">Monterrey</option>
                    <option value="Puebla">Puebla</option>
                </select>
                {errors.city && (<p className="error-message">Este campo es requerido</p>)}
                <input type="number" placeholder="Codigo postal"{...register('number', { required: true })}
                />{errors.number && (<p className="error-message">Este  campo es requerido</p>)}
            </div>
                

            <div className="button-container">
                <button className="bg-primary" type="submit">Guardar Cambios</button>
            </div>

        </form>


    );
}
export default Edit_Profile