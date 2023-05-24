import React, { useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Information.css'
import { AppContext } from '../../context';

const Information = () => {
  let {state,totalSumQuantity,addToBuyer} = React.useContext(AppContext)
  let {cart} = state

  let navigate = useNavigate()
  let location = useLocation()
  let form = useRef(null)

  let handleSubmit = () =>{
    console.log(form)
    let formData = new FormData(form.current)
    
    let buyer = {
      name:formData.get("name"),
      email:formData.get("email"),
      addres:formData.get("addres"),
      apto:formData.get("apto"),
      city:formData.get("city"),
      country:formData.get("country"),
      state:formData.get("state"),
      cp:formData.get("cp"),
      phone:formData.get("phone")
    }
    
    addToBuyer(buyer)
  }

    return (
      <div className="Information">
        {console.log(location)}
        <div className="Information-content">
          <div className="Information-head">
            <h2>Información de contacto:</h2>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre completo" name="name" required/>
              <input type="text" placeholder="Correo Electronico" name="email" required/>
              <input type="text" placeholder="Direccion" name="addres" required/>
              <input type="text" placeholder="apto" name="apto" required/>
              <input type="text" placeholder="Ciudad" name="city" required/>
              <input type="text" placeholder="Pais" name="country" required/>
              <input type="text" placeholder="Estado" name="state" required/>
              <input type="text" placeholder="Codigo postal" name="cp" required/>
              <input type="text" placeholder="Telefono" name="phone" required/>
            </form>
          </div>
          <div className="Information-buttons">
            <div className="Information-back">Regresar</div>
              <div className="Information-next">
                <button type='submit' 
                onClick={()=>{handleSubmit()}}>pagar</button>
              </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
          <div className="Information-item">.
            <div className="Information-element">
                {cart.map(product => (
                  <div key={product.id * product.quantity}>
                    {console.log(product)}
                    <h4>{product.title}</h4>
                    <p>Quantity:{
                      product.quantity
                    }</p>
                    <span>${product.quantity * product.price}</span>
                    <h4>Total: ${totalSumQuantity}</h4>
                  </div>
                ))}
           </div> 
          </div>
        </div>
      </div>
    );
}

export default Information