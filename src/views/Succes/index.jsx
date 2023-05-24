// import React from 'react'
// import PropTypes from 'prop-types'

import './Success.css'
import Map from '../../components/Map'
import { useContext, useEffect, useState } from 'react';
import {AppContext} from '../../context/index'
import axios from 'axios';

const Success = props => {
  let buyer = JSON.parse(localStorage.getItem("buyer"))
  

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{buyer?.name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
}

Success.propTypes = {}

export default Success