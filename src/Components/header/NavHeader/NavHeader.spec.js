import React from 'react';
import { render } from '@testing-library/react';
import NavHeader from '../NavHeader/NavHeader';
import "@testing-library/jest-dom/extend-expect"


describe(('NavHeader'), ()=>{
    test(('should be a navigatiom'), () =>{
        const {getByRole, debug} = render(<NavHeader/>)
        debug();
        expect(getByRole('navigation')).toBeInTheDocument
    })
   
})