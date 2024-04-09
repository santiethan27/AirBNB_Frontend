import React from 'react';
import './Account.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faLock, faSignInAlt, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

function Account() {
    return (
        <div className='account'>
            <h1 className="txt-primary">Cuenta </h1>
            <div className="account-container">

                <a href="/edit-profile" className="card-link">
                    <div className="card">
                        <div className="card-header">
                            <FontAwesomeIcon icon={faUserEdit} className="icon-blue" />
                            <h3 className="txt-primary">Perfil</h3>
                        </div>
                        <div className="card-body">
                            <p>Modifica tus datos personales</p>
                        </div>
                    </div>
                </a>
                <a href="/inicio-sesion" className="card-link">
                    <div className="card">
                        <div className="card-header">
                            <FontAwesomeIcon icon={faLock} className="icon-blue" />
                            <h3 className="txt-primary">Inicio de Sesión y Seguridad</h3>
                        </div>
                        <div className="card-body">
                            <p>Descripción de inicio de sesión y seguridad</p>
                        </div>
                    </div>
                </a>
                <a href="/you-reservation" className="card-link">
                    <div className="card">
                        <div className="card-header">
                            <FontAwesomeIcon icon={faCalendarPlus} className="icon-blue" />
                            <h3 className="txt-primary">Reservas</h3>
                        </div>
                        <div className="card-body">
                            <p>Podrás conocer tus reservas y en qué estado se encuentran</p>
                        </div>
                    </div>
                </a>
                <a href="/form-property" className="card-link">
                    <div className="card">
                        <div className="card-header">
                            <FontAwesomeIcon icon={faSignInAlt} className="icon-blue" />
                            <h3 className="txt-primary">Registrar Propiedad</h3>
                        </div>
                        <div className="card-body">
                            <p>Podrás registrar tus propiedades</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Account;
