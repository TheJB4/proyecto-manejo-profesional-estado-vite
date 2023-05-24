import { useRoutes,BrowserRouter } from "react-router-dom"

import Home from "../../views/Home"
import Checkout from "../../views/Checkout"
import Information from "../Information"
import Payment from "../../views/Payment/"
import Succes from "../../views/Succes"
import NotFound from "../../views/NotFound"

import Layout from "../Layout"
import { AppContextProvider } from "../../context"
import '../App/App.css'

function Routes(){
  let routes = useRoutes([
    {path:"/",element:<Home/>},
    {path:"/checkout",element:<Checkout/>},
    {path:"/checkout/information",element:<Information/>},
    {path:"/checkout/payment",element:<Payment/>},
    {path:"/checkout/success",element:<Succes/>},
    {path:"*",element:<NotFound/>},
  ])

  return routes
}

function App() {

  return (
    <BrowserRouter>
      <AppContextProvider>
        <Layout>
          <Routes/>
        </Layout>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App
