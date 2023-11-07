import { ADD_TO_FAVOURITES } from "../actions"

const initialState = {
    favourites: {
        content: []
    }
}


const mainReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: {
                    ...state.favourites,
                    content: [...state.favourites.content, action.payload],
                }
            }

        default:
            return state
    }
}

export default mainReducers