import YTSearch from 'youtube-api-search';
import axios from 'axios';

const API_KEY = 'AIzaSyCZrI6GZyQo4pkO_5pLo9-Q9keu5YgMmiA';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
const MIDDLE_URL = '&type=video&videoCaption=closedCaption&key=';

export const FETCH_VIDEO = 'FETCH_VIDEO';
export const FETCH_SECONDS = 'FETCH_SECONDS';
export const SEND_CONTROL = 'SEND_CONTROL';


export function fetchVideo(term){
    const url = `${BASE_URL}${term}${MIDDLE_URL}${API_KEY}`;
    const request = axios.get(url);
    
    return {
        type: FETCH_VIDEO,
        payload: request
    }
};

export function fetchClockDisplay(seconds){
    return{
        type: FETCH_SECONDS,
        payload: seconds
    }
};

export function sendControl(status){
    console.log(status);
    return{
        type: SEND_CONTROL,
        payload: status
    }
};
