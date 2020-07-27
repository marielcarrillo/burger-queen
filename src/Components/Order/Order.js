import React from 'react'
import './Order.scss'; 
import { Col } from 'antd';
import OrderInformation from './OrderInformation'
import OrderContent from './OrderContent'
import ClosingOrder from './ClosingOrder'

const Order = ({carrito, setCarrito, deleteProducto, total, guardar, clientName, handleChange, nuevoCarrito}) => {
    const mesero = (value) => {
        setCarrito({...carrito, mesero: value})
    }

 return ( 
        <Col className='order' size='large' span={9} >
            <OrderInformation carrito={carrito} clientName={clientName} handleChange={handleChange}/>
            <OrderContent carrito={carrito} deleteProducto={deleteProducto} nuevoCarrito={nuevoCarrito} />
            <ClosingOrder total={total} guardar={guardar} mesero={mesero}/>
        </Col>
     );
}
 
export default Order;