import React from 'react';
import { Input, Select, DatePicker, Divider } from 'antd';
import Button from '../Button/Button';
// import firebaseConfig from '../../firebase'
// import 'firebase/firestore'



const ClosingOrder = ({carrito, setCarrito}) => {
    // const db = firebaseConfig.firestore()
    // const docRef = db.collection('ordenes');

    const suma = () => {
        let costs = carrito.item.map(item => item.subtotal);
        let result = costs.reduce((acc, el) => acc + el, 0);
        // setCarrito({...carrito, total: result})
        return result;
      }
    
    const { Option } = Select;

    const mesero = (value) => {
        setCarrito({...carrito, mesero: value})
        console.log(`selected ${value}`);
    }

    // const addToFirebase = docRef.add({
    //     item: carrito.item,
    //     mesa: carrito.mesa,
    //     mesero: carrito.mesero,
    //     nombreCliente:  carrito.nombreCliente,
    //     orden: carrito.orden,
    //     pay: carrito.pay,
    //     status: carrito.status,
    //     total: carrito.total
    // })

    return ( 
        <div>
            <div className='btnOrder'>
                <h4>Total: ${suma()}</h4>
                <Button value ='Ordenar' enter onClick={()=>setCarrito({...carrito, total: suma()}) }/>
            </div>
            <div>
                <Divider />
                <Input.Group compact>
                    <Select placeholder="Mesero" style={{ width: 175 }} onChange={mesero}>
                        <Option value="Mesero1">Mesero 1</Option>
                        <Option value="Mesero2">Mesero 2</Option>
                    </Select>
                    <DatePicker style={{ width: '50%' }} />
                </Input.Group>
            </div>
        </div>
     );
}
 
export default ClosingOrder
