export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'

export const AddToFavouritesAction = (data) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: data.company_name
    }
}