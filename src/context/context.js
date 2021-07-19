import React , {useContext} from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{

    return(
        <AppContext.Provider value={{

        }} >
            {children}
        </AppContext.Provider>
    )
}
const useGlobalState = ()=>{
    return useContext(AppContext);
}
export {AppProvider};