/* eslint-disable react/prop-types */
import React from 'react'
import {useInitialState} from '../hooks/useInitialState.js'

let AppContext = React.createContext()

const AppContextProvider = ({children}) => {
    let initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
        {children}
    </AppContext.Provider>
  )
}

export {AppContextProvider,AppContext}