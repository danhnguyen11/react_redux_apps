import { FETCH_SECONDS } from '../actions/index'


export default function countdown(state = {}, action) {
    switch (action.type) {
        case FETCH_SECONDS:
            return { ...state, seconds: action.payload};
    }
  
    return state;
}

