import React from 'react';
import { Input, Select, DatePicker, Divider } from 'antd';
import Button from '../Button/Button';
import {db} from '../../firebase'

const ClosingOrder = ({carrito, setCarrito}) => {
    const suma = () => {
        let costs = carrito.item.map(item => item.subtotal);
        let result = costs.reduce((acc, el) => acc + el, 0);
        // setCarrito({...carrito, total: result})
        return result;
      }

    const guardar = async () => {
        await setCarrito({...carrito, total: suma()});
        await db.collection('orders').doc().set(carrito);
        console.log('added')
    }

    const { Option } = Select;

    const mesero = (value) => {
        setCarrito({...carrito, mesero: value})
        console.log(`selected ${value}`);
    }

    return ( 
        <div>
            <div className='btnOrder'>
                <h4>Total: ${suma()}</h4>
                <Button value ='Ordenar' enter onClick={guardar}/>
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