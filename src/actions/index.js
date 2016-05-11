import axios from 'axios';

const WEATHER_API_KEY = '72016a3f8e36e5cae7f22c639919f4d8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;
export const GET_WEATHER = 'GET_WEATHER';

export function getWeatherData(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log(request);
  return {
    type: GET_WEATHER,
    payload: request
  };
}
