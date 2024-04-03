import { createContext, useContext, useState } from "react";
import { deleteFavorite, editFavorite, getFavorits, postFavorite } from "../service/favorite";

export const FavoriteContext = createContext();

export const useFavorte = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error("El useFavorite debe estar dentro del contexto");
    }
}
export const FavoriteProvider = ({ children }) => {

    const [favoriteItem, setFavoriteItem] = useState([]);

    const _getFavorits = async () => {
        try {
            const favorite = await getFavorits();
            return favorite.data;
        } catch (error) {
            console.log(error)
        }
    }

    const _postFavorite = async (createFavorite) => {
        try {
            await postFavorite(createFavorite);
            await _getFavorits();
        } catch (error) {
            console.log(error)
        }
    }

    const _editFavorite = async (id, newFavorite) => {
        try {
            const editFavoriteNew = await editFavorite(id, newFavorite);
            await _getFavorits();
            return editFavoriteNew.data;
        } catch (error) {
            console.log(error)
        }
    }

    const _deleteFavorite = async (favoriteId) => {
        try {
            const delFavorite = await deleteFavorite(favoriteId);
            if (delFavorite.status === 200) setFavoriteItem(favoriteItem.filter((favorite) => favorite._id !== favoriteId))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FavoriteContext.Provider value={{ _getFavorits, _postFavorite, _editFavorite, _deleteFavorite }}>
            {children}
        </FavoriteContext.Provider>
    )
}