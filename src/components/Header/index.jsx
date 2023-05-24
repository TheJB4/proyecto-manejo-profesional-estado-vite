import React from 'react'
// import PropTypes from 'prop-types'

import '../Header/Header.css'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import {AppContext} from '../../context/index'


const Header = props => {
  let {cart} = React.useContext(AppContext).state
  return (
    <div className="Header">
        <Link to='/'>
          <h1 className="Header-title">E-Milenio</h1>
        </Link>
        <Link to='/checkout'>
          <div className="Header-checkout">
            <ShoppingCartIcon className="h-6 w-6 text-black-500" />
          </div>
          {cart.length > 0 && <p>{cart.length}</p>}
        </Link>
    </div>
  )
}

Header.propTypes = {}

export default Header