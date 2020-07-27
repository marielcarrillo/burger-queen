import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import Pendings from './Pendings';
import './Kitchen.scss';
import Order from '../Order/Order';
import {db} from '../../firebase';

const KitchenSection = () =>{
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

    return(
        <>
            <Header/>
            <Pendings />
            {/* <Order carrito={orders} deleteProducto={orders} guardar={orders} /> */}
        </>
    )
}

export default KitchenSection