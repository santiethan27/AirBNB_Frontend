import React, { useState } from 'react'
import Register from './Components/Register';
import Login from './Components/Login';

function RegisterPage() {
    const [showLogin, setShowLogin] = useState(false);
    
    const handleToggle = () => {
        console.log("hola");
        setShowLogin(!showLogin);
    }
  return (
    <div className="body-auth">
    <div className="container">
    <div className={`form ${showLogin ? 'login' : ''}`}>
        {showLogin ? <Login handleToggle={handleToggle}/> : <Register handleToggle={handleToggle}/>}
    </div>
    <img src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    </div>
  )
}

export default RegisterPage
