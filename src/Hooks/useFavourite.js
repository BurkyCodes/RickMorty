import { useContext } from "react";
import FavoritesContext from "./FavouriteContext";


export const useFavorites = () => useContext(FavoritesContext);
