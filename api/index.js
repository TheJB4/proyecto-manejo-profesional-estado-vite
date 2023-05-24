import express from 'express'
import morgan from 'morgan'
import mercadopago from "mercadopago"
import cors from 'cors'

const server = express()

server.use(express.json())
server.use(morgan('dev'))
server.use(cors()) 

// server.use((_req,res,next)=>{
//       res.header("Access-Control-Allow-Origin")
//       res.header("Access-Control-Allow-Credentials")
//           res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type")
//       res.header("Access-Control-Allow-Methods")
//       next()
// })

mercadopago.configure({
    access_token: 'TEST-27103912669790-051815-10ceda8856c311e6a943929cf8ecb47c-1377632867'
});

server.post("/payment",(req,res)=>{
    // let product = req.body
    // let preference = { 
    //     items: [{
    //         id:622626,
    //         title: product.title,
    //         currency_id:'ARS',
    //         picture_url: product.image,
    //         description: product.description,
    //         category_id:'art',
    //         quantity:product.quantity,
    //         unit_price: product.price
    //     }],
    //     back_urls:{
    //         success:'http://localhost:5173/',
    //         failure:'',
    //         pending:'',
    //     },
    //     auto_return:'approved',
    //     binary_mode:true,
    // }
    let product = req.body

    for (let i = 0; i < product.length; i++) {
      const element = product[i];
      element.currency_id = 'ARS'
    }
    console.log(product)
    
    var preference = {
      items: product,
      back_urls: {
        success: "http://localhost:5173/checkout/success",
        failure: "http://www.tu-sitio/failure",
        pending: "http://www.tu-sitio/pending"
      }
    };
      
    mercadopago.preferences.create(preference)
    .then(response =>res.json(response))
})

server.listen(3001,()=>{
    console.log("Server corriendo el el 3001")
})