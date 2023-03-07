import { GET_ALL_CHARACTERS } from "./actions";

const initialState = {
    characters: [],
    episodes: [],
};

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_CHARACTERS: 
            return {
                ...state,
                characters: action.payload
            }
    }
}

