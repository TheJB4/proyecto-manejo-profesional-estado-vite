// import React from 'react'
import mercadopago from "mercadopago";
import { Payment } from "@mercadopago/sdk-react";

// Crear un objeto de preferencia
let preference312 = {
    // el "purpose": "wallet_purchase" solo permite pagos registrados
    // para permitir pagos de guests puede omitir esta propiedad
    "purpose": "wallet_purchase",
    "items": [
      {
        "id": "item-ID-1234",
        "title": "Meu produto",
        "quantity": 1,
        "unit_price": 75.76
      }
    ]
  };
  
  mercadopago.preferences.create(preference312)
    .then(function (response) {
      // Este valor es el ID de preferencia que se enviará al ladrillo al inicio
      const preferenceId = response.body.id;
      return preferenceId
    }).catch(function (error) {
      console.log(error);
    });

const PaymentBrickDefault = () => {
    const initialization = {
        amount: 100,
        preferenceId: "preference312",
       };
       const customization = {
        paymentMethods: {
          ticket: "all",
          creditCard: "all",
          debitCard: "all",
          mercadoPago: "all",
        },
       };
       const onSubmit = async (
        { selectedPaymentMethod, formData }
       ) => {
        // callback llamado al hacer clic en el botón enviar datos
        return new Promise((resolve, reject) => {
          fetch("/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((response) => {
              // recibir el resultado del pago
              console.log(response)
              resolve();
            })
            .catch((error) => {
              // manejar la respuesta de error al intentar crear el pago
              console.log(error)
              reject();
            });
        });
       };
       const onError = async (error) => {
        // callback llamado para todos los casos de error de Brick
        console.log(error);
       };
       const onReady = async () => {
        /*
          Callback llamado cuando el Brick está listo.
          Aquí puede ocultar cargamentos de su sitio, por ejemplo.
        */
       console.log('RENDERIZAR BRICK')
       };
       
    return(
    <Payment
    initialization={initialization}
    customization={customization}
    onSubmit={onSubmit}
    onReady={onReady}
    onError={onError}
    />)
}

export default PaymentBrickDefault