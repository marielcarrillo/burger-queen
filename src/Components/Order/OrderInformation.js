import React from 'react';
import { Input, Select } from 'antd';

const OrderInformation = ({carrito, clientName, handleChange, ordenSeleccionada}) => {
    const { Option } = Select;
    console.log(carrito)

    return ( 
        <div>
            {
                ordenSeleccionada ?  (<Select placeholder={ordenSeleccionada.mesa} disabled style={{ width: 175 }}></Select>) : (<Select placeholder="Mesa" style={{ width: 175 }} onChange={handleChange}>
                <Option value="Mesa1">Mesa 1</Option>
                <Option value="Mesa2">Mesa 2</Option>
                <Option value="Mesa3" >Mesa 3</Option>
                <Option value="Mesa4">Mesa 4</Option>
            </Select>)
            }
            {
                ordenSeleccionada ? (<><Input placeholder="Orden" disabled style={{ width: 175 }} value={'Orden: ' + ordenSeleccionada.orden} />
                <Input placeholder={ordenSeleccionada.nombreCliente} disabled /></>) : (<><Input placeholder="Orden" disabled style={{ width: 175 }} value={'Orden: ' + carrito.orden} />
            <Input placeholder="Nombre" onChange={clientName} /></>)
            }
        </div>
     );
}
 
export default OrderInformation;
