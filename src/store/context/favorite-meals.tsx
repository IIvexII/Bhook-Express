import React, { createContext, useState, ReactNode } from 'react';


type FavoriteMealsContextProps = {
    favoriteMeals: string[];
    addFavorite: (mealId: string) => void;
    removeFavorite: (mealId: string) => void;
}

type FavoriteMealsProviderProps = {
    children: ReactNode;
};


// create a context with default values
export const FavoriteMealsContext = createContext<FavoriteMealsContextProps>({
    favoriteMeals: [],
    addFavorite: () => {},
    removeFavorite: () => {},
});

export function  FavoriteMealsProvider({ children }: FavoriteMealsProviderProps) {
    const [favoriteMeals, setFavoriteMeals] = useState<string[]>([]);

    const addFavorite = (mealId: string) => {
        setFavoriteMeals((currentFavs) => [...currentFavs, mealId]);
    };

    const removeFavorite = (mealId: string) => {
        setFavoriteMeals((currentFavs) => currentFavs.filter((id) => id !== mealId));
    };

    return (
        <FavoriteMealsContext.Provider value={{ favoriteMeals, addFavorite, removeFavorite }}>
            {children}
        </FavoriteMealsContext.Provider>
    );
}