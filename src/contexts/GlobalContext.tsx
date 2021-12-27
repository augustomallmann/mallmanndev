import { createContext, ReactNode, useContext } from "react";


interface GlobalContextProviderProps {
    children: ReactNode;
}

type GlobalContext = {
    websiteName: string;
    defaultSeo: {
        title: string;
        description: string;
        shareImage: string;
    }
}

interface GlobalContextType {
    global: GlobalContext;
}

const GlobalContext = createContext({} as GlobalContextType);



export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {

    const global = {
        websiteName: "Loren Ipsum",
        defaultSeo: {
            title: "teste",
            description: "teste",
            shareImage: "teste"
        }
    }

    return (
        <GlobalContext.Provider value={{ global }}>
            {children}
        </GlobalContext.Provider >
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
