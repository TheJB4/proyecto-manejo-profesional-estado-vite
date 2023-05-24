// import React from 'react'
// import PropTypes from 'prop-types'

import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css'

import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context';

let postData = (data) => {
  let newData = data.map(product => (
    {
      title: product.title,
      category:product.category,
      description:product.description,
      image:product.image,
      unit_price:product.price,
      quantity:product.quantity
    }
  ))

  return newData
}


const Payment = () => {
  let location = useLocation()
  let navigate = useNavigate()
  let state = useContext(AppContext)

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div>
          <h4>Productos</h4>
          <div>
            {location.state.products.map(product => (
              <div key={product.id}>
                  <p>{product.title}</p>
                  <p>Cantidad:{product.quantity}</p>
              </div>
            ))}
            <p>Total: {location.state.totalPrice}</p>
          </div>
        </div>
        <div>
          <h4>Datos del comprador:</h4>
          <div>
            <p>Nombre : {location.state.buyer.name} </p>
            <p>Direccion : {location.state.buyer.city}</p>
            <p>Telefono : {location.state.buyer.phone}</p>
            <p>City : {location.state.buyer.city}</p>
          </div>
        </div>
        <div 
          className="Payment-button"
          onClick={()=>{
            axios.post('http://localhost:3001/payment',postData(location.state.products))
            .then(res => {
              console.log(res.data.body)
              localStorage.setItem("buyer",JSON.stringify(location.state.buyer))
              window.location.href =res.data.body.init_point
              // window.open(`${res.data.body.init_point},'_blank'`)window.open(`${res.data.body.init_point},'_blank'`)
              navigate('/checkout/success')
            })
            .catch(error => console.log(error))
          }}
          >Pagar</div>
      </div>
    </div>
  );
}

Payment.propTypes = {}

export default Payment