import { FETCH_VIDEO } from '../actions/index'


const INITIAL_STATE = {videos: [],selectedVideo: null};


export default function youtube(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_VIDEO:
            return { ...state, videos: action.payload.data.items};
    }
  
    return state;
}

