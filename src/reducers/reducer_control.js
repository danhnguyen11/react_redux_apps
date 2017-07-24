import { SEND_CONTROL } from '../actions/index'


export default function sendcontrol(state = {}, action) {
    switch (action.type) {
        case SEND_CONTROL:
            return { ...state, status: action.payload};
    }
  
    return state;
}

