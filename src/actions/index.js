import axios from 'axios';

const API_KEY= "beaaec9a236e1d46e016ad2815f90d98";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us&units=imperial`;
  const request = axios.get(url)
  
  console.log("Request: ", request)
  return {
    type: FETCH_WEATHER,
    payload: request                                            // Returning the promise as the payload
  }                                                           
}

// redux promise sees the action and sees the payload property , if the payload is a promise, redux promise stops the action. 
// Once the request finishes, it dispatches a new action with a payload of the resolved request. Unwraps the promise.