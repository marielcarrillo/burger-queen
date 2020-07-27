import React, {useState, useEffect} from 'react';
import { Col, Row, Button } from 'antd';
import {db} from '../../firebase';

const Pendings = () => {
    const [orders, setOrders] = useState([]);

    const getOrders = () => {
        db.collection('orders').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setOrders(docs);
        });
    }
    useEffect(() => {
        getOrders();
    }, [])
    console.log(orders)

    return ( 
        <Col className='order' size='large' span={14}>
            <div>
                <h3>Pendientes</h3>
            </div>
            <Row className='pendings'>
                {
                    orders.map(order => (
                        <Col className='pendingOrders' span={14}>
                            <Button type="primary" className='pendingOrderButton'>{order.orden} - {order.nombreCliente}</Button>
                        </Col>
                    )) 
                }
            </Row>
        </Col>
     );
}
 
export default Pendings;