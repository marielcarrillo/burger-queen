import React, {useState, useEffect} from 'react';
import { Row } from 'antd'
import Header from '../Header/Header';
import Pendings from './Pendings';
import './Kitchen.scss';
import {db} from '../../firebase';
import Order from '../Order/Order';

const KitchenSection = () =>{
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
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
    const [ordenSeleccionada, setOrdenSeleccionada] = useState ({})
    const getSelectedOrder = (id) => {
    let getDocument = db.collection('orders').doc(id);
    getDocument.get().then((doc) => doc.exists ? setOrdenSeleccionada({...doc.data()}) : console.log('no se encuentra el documento'))
    }
    

    return(
        <Row className= 'content' justify='space-around'>
            <Header/>
            <Pendings orders={orders} getSelectedOrder={getSelectedOrder} />
            <Order ordenSeleccionada={ordenSeleccionada} />
        </Row>
    )
}

export default KitchenSection