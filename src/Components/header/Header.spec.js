import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Header from '../Header/Header'
import "@testing-library/jest-dom/extend-expect"


describe(('Header'), ()=>{
    test.only(('should render without crashing'), () =>{
        const div = document.createElement('marquee')
        ReactDOM.render(<Header/>, div)
    })
   
})
