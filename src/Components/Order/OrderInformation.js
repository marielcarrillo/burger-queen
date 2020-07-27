import React from 'react';
import { Input, Select } from 'antd';

const OrderInformation = ({carrito, clientName, handleChange}) => {
    const { Option } = Select;
    console.log(carrito)
    
    const clientName = (e) => {
        let name = e.target.value;
        setCarrito({...carrito, nombreCliente: name})
    }
    function handleChange(value) {
        setCarrito({...carrito,mesa: value})
        console.log(`selected ${value}`);
    }
    return ( 
        <div>
            <Select placeholder="Mesa" style={{ width: 175 }} onChange={handleChange}>
                <Option value="Mesa1">Mesa 1</Option>
                <Option value="Mesa2">Mesa 2</Option>
                <Option value="Mesa3" >Mesa 3</Option>
                <Option value="Mesa4">Mesa 4</Option>
            </Select>
            <Input placeholder="Orden" disabled style={{ width: 175 }} value={'Orden: ' + carrito.orden} />
            <Input placeholder="Nombre" onChange={clientName} />
        </div>
     );
}
 
export default OrderInformation;
