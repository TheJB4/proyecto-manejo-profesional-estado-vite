// import React from 'react'

import products from '../../data/initialState.js'
import Products from '../../components/Products/index.jsx'

const Home = () => {
  return (
    <div>
      <Products products={products.products}/>
    </div>
  )
}

export default Home