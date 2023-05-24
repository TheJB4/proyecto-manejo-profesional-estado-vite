/* eslint-disable react/prop-types */
import React from 'react'

// import { Link } from "react-router-dom"
import { AppContext } from "../../context"


const Product = ({product}) => {
  let {addToCart,addDisabledBtb} = React.useContext(AppContext)

  return (
    <div className='Products-item'>
        {product.onDisabledBtn && <div className='isInCart'>✔</div>}
        <img src={product.image} alt={product.title} />
        <div className="Product-item-info">
            <h2>{product.title} <span>${product.price}</span> </h2>
            <p>{product.description}</p>
        </div>
        {/* <Link to="/checkout">
          <button type="button" onClick={()=>addToCart(product)}>Comprar</button>
        </Link> */}
        <button 
          type="button" 
          onClick={()=>{
            addDisabledBtb(product)
            addToCart(product)
          }}
          disabled={product.onDisabledBtn}
        >
          Comprar
        </button>
    </div>
  )
}

export default Product