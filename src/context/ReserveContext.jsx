import { createContext, useContext } from "react";
import { deleteReserve, postReserve, putReserve } from "../service/reserve";

export const ReserveContext = createContext();

export const useReserve = () => {
    const context = useContext(ReserveContext);
    if(!context){
        throw new Error("El useReserve debe estar dentro del contexto");
    }
}

export const ReserveProvider = ({ children }) => {
    
    const  _postReserve = async (reserve) => {
        try {
            const createReserve = await postReserve(reserve);
        return createReserve.data;
        } catch (error) {
            console.log(error)
        }
    }

    const _putReserve = async (id) => {
        try {
            const ediReserve = await putReserve(id)
            {/* Aca se colocara despues el get para que actualice de manera automatica*/}

        } catch (error) {
            console.log(error)
        }
    }

    const _deleteReserve = async (id) => {
        try {
            await deleteReserve(id)
            {/* Aca se colocara despues el get para que acualice de manera automatica*/}
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ReserveContext.Provider value={{ _postReserve, }}>
        {children}
        </ReserveContext.Provider>
    )
}