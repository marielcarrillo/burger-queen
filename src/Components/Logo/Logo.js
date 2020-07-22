import React from 'react';
import logoSmall from '../../Assets/logoSmall.png'
import logo from '../../Assets/logoPrim.png'

const Logo = ({ small = false, big = false}) => {
    let src = logo
    let alt =logo
    if(big){
        src = logo
        alt= logo
    }else if(small){
        src = logoSmall
        alt= logoSmall
    }
   
    return(
            <img src= {src} alt={alt}></img>
    )
  
}

export default Logo;


