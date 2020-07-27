import React from 'react'
import '../IndexApp/IndexApp.scss'; 
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { useHistory } from "react-router-dom";



function IndexApp () {
    let history = useHistory()

    function handleClickOrden() {

        history.push('/orden')
    }
    function handleClickCocina() {

        history.push('/cocina')
    }
    return (
        <Fragment><Header />
        <div className="container">
            <div className = 'logo'>
                <Logo big/> 
            </div>       
            <nav>
                <ul>
                        <li><Button value = 'Orden' pink onClick={handleClickOrden} /></li>
                        <li><Button value = 'Cocina' onClick={handleClickCocina}/></li>
                </ul>
            </nav>
            <div className='auth'>
                <div>Inicia Sesión</div>
                <div>Cierra Sesión</div>
            </div> 
            
        </div>
        </Fragment>
      );
}

export default IndexApp
