import React from 'react';
import { Table, Divider } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons'


const OrderContent = ({carrito: carritoOrig, deleteProducto}) => {

  const carrito = {
    ...carritoOrig,
    item: carritoOrig.item.map(i => ({
      ...i,
      
      item: i.item + ' ' + i.extras.filter(e => e.checked)
                                   .map(e => e.ingrediente)
                                   .join(', ')
    
    }))
  }
  console.log(carrito,'carritoO')
 
  
  const columns = [
    {
      title: 'Cant',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 50
    },
    {
      title: 'Descripción',
      dataIndex: 'item',
      key: 'item',
      width: 150
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
      width: 60
    },
    {
      title: 'Sub',
      key: 'subtotal',
      dataIndex:'subtotal',
      width: 60
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (id) =>{
        return <DeleteTwoTone onClick={() => deleteProducto(id)} />
      },
      width: 30
    },
  ];

    return ( 
        <div >
            <Divider />
              <Table className="contentTable" columns={columns} dataSource={carrito.item} size="middle" pagination={{ pageSize: 50 }} scroll={{ y: 300 }} />
            <Divider />
        </div>
     );
}
 
export default OrderContent;
