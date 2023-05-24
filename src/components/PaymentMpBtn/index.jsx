// import React from 'react'
import { Wallet } from '@mercadopago/sdk-react';
         
const onSubmit = async (formData) => {
    // callback llamado al hacer clic en Wallet Brick
    // esto es posible porque el ladrillo es un botón
    // en este momento del envío, debe crear la preferencia
    const yourRequestBodyHere = {
      items: [
        {
          id: '202809963',
          title: 'Dummy title',
          description: 'Dummy description',
          quantity: 1,
          unit_price: 10,
        },
      ],
      purpose: 'wallet_purchase',
    };
    return new Promise((resolve, reject) => {
      fetch('/create_preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(yourRequestBodyHere),
      })
        .then((response) => response.json())
        .then((response) => {
          // resolver la promesa con el ID de la preferencia
          resolve(response.preference_id);
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear preferencia
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
      Callback llamado cuando Brick está listo.
      Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
    */
   };
   

const PaymentMp = () => {
  return (
<Wallet
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
  );
};

export default PaymentMp;
