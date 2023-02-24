import { createContext, useState } from "react";
export const MainContext = createContext("")

function ContextProvider({ children }) {
    const [login,setLogin]=useState(false)
  const [socialNetworks,setSocialNetworks]=useState("hidden")
  const [data, setData] = useState([]);
  const [value,setValue]=useState("")
  const [filter, setFilter] =useState([])
  const [count,setCount]=useState(0)
  const [insta,setInsta]=useState([])
  const [categories,setCategories]=useState([])
    const values = {
       login,
       setLogin,
       socialNetworks,
       setSocialNetworks,
       data,
       setData,
       value,
       setValue,
       filter,
       setFilter,
       count,
       setCount,
       insta,
       setInsta,
       categories,
       setCategories
    }

    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider >
    )
}
export default ContextProvider;