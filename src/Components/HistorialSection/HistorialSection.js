import React, {useState, useEffect} from 'react';
import { Row } from 'antd';
import {db} from '../../firebase';
import Header from '../Header/Header';
import Pendings from '../KitchenSection/Pendings';
import Order from '../Order/Order';

const HistorialSection = () =>{
    const [finishedOrders, setFinishedOrders] = useState([]);
    const getFinishedOrders = async () => {
        let orders = db.collection('orders').where("status", "==", true);
        orders.onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setFinishedOrders(docs);
        });
    }

    useEffect(() => {
        getFinishedOrders();
    }, [])
    
    console.log(finishedOrders)
    const [ordenSeleccionada, setOrdenSeleccionada] = useState ({})

    const getSelectedOrder = (id) => {
    let getDocument = db.collection('orders').doc(id);
    getDocument.get().then((doc) => doc.exists ? setOrdenSeleccionada({...doc.data(), id: doc.id}) : console.log('no se encuentra el documento'))
    }
    console.log(ordenSeleccionada);

    return(
        <Row className= 'content' justify='space-around'>
            <Header/>
            <Pendings historial orders={finishedOrders} getSelectedOrder={getSelectedOrder} />
            <Order historial={ordenSeleccionada}  />
        </Row>
    )
}

export default HistorialSection