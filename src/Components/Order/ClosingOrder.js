import React from 'react';
import { Input, Select, Divider } from 'antd';
import Button from '../Button/Button';
import moment from 'moment';

const ClosingOrder = ({total, guardar, mesero, ordenSeleccionada, finishOrder, historial}) => {
    const { Option } = Select;

    if (ordenSeleccionada) {
        return (
            <div>
                <div className='btnOrder'>
                    <h4>Total: ${ordenSeleccionada.total}</h4>
                    <Button value ='Terminar' enter onClick={finishOrder}/>
                </div>
            <div>
                <Divider />
                <Input.Group compact>
                    <Select placeholder={ordenSeleccionada.mesero} disabled style={{ width: 175 }}></Select>
                    <Input style={{ width: '50%' }} disabled value={ordenSeleccionada.fecha}/>
                </Input.Group>
            </div>
        </div>
        )
    } else if (historial) {
        return (
            <div>
                <div>
                    <p>ok</p>
                </div>
            <div>
                <Divider />
                <Input.Group compact>
                    <Select placeholder={historial.mesero} disabled style={{ width: 175 }}></Select>
                    <Input style={{ width: '50%' }} disabled value={historial.fecha}/>
                </Input.Group>
            </div>
        </div>
        )
    } else {
        return (
            <div>
                <div className='btnOrder'>
                    <h4>Total: ${total}</h4>
                    <Button value ='Ordenar' enter onClick={guardar}/>
                </div>
            <div>
                <Divider />
                <Input.Group compact>
                    <Select placeholder="Mesero" style={{ width: 175 }} onChange={mesero}>
                        <Option value="Mesero1">Mesero 1</Option>
                        <Option value="Mesero2">Mesero 2</Option>
                    </Select>
                    <Input style={{ width: '50%' }} disabled value={moment().format('D, MMM, Y')}/>
                </Input.Group>
            </div>
        </div>
        )
    }
}
 
export default ClosingOrder