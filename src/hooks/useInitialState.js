import React, { useEffect } from "react"

import initialState from "../data/initialState"
import { useNavigate } from "react-router-dom"
import axios from "axios"


function useInitialState(){
    let [state,setState] = React.useState(initialState)
    let [productId,setProductId] = React.useState(null)
    let [totalPrice,setTotalPrice] = React.useState(0)
    let [position,setPosition] = React.useState(JSON.parse(localStorage.getItem("position")))
    let [ipUser,setIpUser] = React.useState("")

    let [totalSumQuantity,setTotalSumQuantity] = React.useState(0)
    let navigate = useNavigate()

    useEffect(()=>{
        let accumulator = 0
        let priceTotal = state.cart.map(product => accumulator += product.price)

        setTotalPrice(accumulator)

        axios.get('https://api.ipify.org/')
        .then(res => setIpUser(res.data))
        .catch(err => console.log(err))

        let getDataLocation = async () => {
            let res = await axios.get(`http://ip-api.com/json/${ipUser}`)
            return [res.data.lat,res.data.lon]
        }
      
        getDataLocation().then(res=>{
            setPosition(res)
            console.log(res)
            localStorage.setItem("position",JSON.stringify(res))
        })
    },[ipUser, state.cart])

    let addDisabledBtb = (data) => {
        data.onDisabledBtn = true
        setState({
            ...state,
            cart : [...state.cart, data]
        })

    }


    let addToCart = (data) => {
        setState({
            ...state,
            cart : [...state.cart, data]
        })
    }

    let removeToCart = (id) => {
        setState({
            ...state,
            cart : state.cart.filter(product => product.id != id )
        })
    }

    let addToBuyer = (data) =>{
        console.log(data)
        setState({
            ...state,
            buyer: [...state.buyer,data]
        })

        navigate('/checkout/payment',{state:{
            buyer: data,
            totalPrice,
            products: state.cart
        }})
    }

    return{
        addToCart,
        removeToCart,
        setProductId,
        productId,
        addDisabledBtb,
        totalPrice,
        setTotalPrice,
        totalSumQuantity,
        setTotalSumQuantity,
        // removeDisabledBtn,
        state,
        addToBuyer,
        setState,
        position,
    }
}

export {useInitialState}