import React,{Fragment} from 'react'
import { Link } from 'react-router-dom';
import '../IndexApp/IndexApp.scss'; 
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Header from '../Header/Header'


function IndexApp () {
    return (
        <Fragment><Header />
        <div className="container">
            <div className = 'logo'>
                <Logo big/> 
            </div>       
            <nav>
                <ul>
                    <Link to ='/orden'>
                        <li><Button value = 'Orden' pink /></li>
                    </Link>
                    <Link to = '/cocina'>
                        <li><Button value = 'Cocina'/></li>
                    </Link>
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
