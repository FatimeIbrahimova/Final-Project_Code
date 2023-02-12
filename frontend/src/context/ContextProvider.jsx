import { createContext, useState } from "react";
export const MainContext = createContext("")

function ContextProvider({ children }) {
    const [login,setLogin]=useState(false)
  const [socialNetworks,setSocialNetworks]=useState("hidden")
    const values = {
       login,
       setLogin,
       socialNetworks,
       setSocialNetworks
    }

    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider >
    )
}
export default ContextProvider;