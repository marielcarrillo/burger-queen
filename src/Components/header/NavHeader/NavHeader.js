import React from 'react';
import '../NavHeader/NavHeader.scss'
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

const NavHeader = () => (
    <div role="navigation" className='navHeader'>
        <Link to ='/orden'>
            <Button value ='Orden' green />
        </Link>
        <Link to ='/cocina'>
           <Button value ='Cocina' green /> 
        </Link>
        <Link to='/historial'>
            <Button value ='Historial' green /> 
        </Link>
    </div>
);

export default NavHeader;