import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = 'MyFavorites'

export default function FavoritesProvider({ children }){
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider 
            value={{favorite, setFavorite}}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoriteContext() {
    const {favorite, setFavorite} = useContext(FavoritesContext);

    function addFavorite(newFavorite) {

        console.log(favorite)

        const repeatFavorite = favorite.some((item) => item.id === newFavorite.id);
        
        let newList = [...favorite];

        if(!repeatFavorite){

            newList.push(newFavorite);
            return setFavorite(newList);
        }

        newList = favorite.filter((item) => item.id !== newFavorite.id);
        return setFavorite(newList);
    }

    return { 
        favorite,
        addFavorite
    }
}