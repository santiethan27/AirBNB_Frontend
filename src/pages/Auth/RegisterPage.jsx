import React, { useState } from 'react'
import Register from './Components/Register';
import Login from './Components/Login';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [showLogin, setShowLogin] = useState(false);

  const handleToggle = () => {
    console.log("hola");
    setShowLogin(!showLogin);
  }
  return (
    <div className="body-auth bg-secundary">
      <div className="container-register">
        <div className={`form ${showLogin ? 'login' : ''}`}>
          <Link to={'/'} className="logo-form">
            <img src="../../public/hogar.png" alt="Imagen logo AIRBNB" className='cursor-pointer' />
            <h2 className='txt-black'>AIRBNB</h2>
          </Link>
          {showLogin ? <Login handleToggle={handleToggle} /> : <Register handleToggle={handleToggle} />}
        </div>
        <img src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default RegisterPage
