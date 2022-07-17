const API_KEY = "1fa9ff4126d95b8db54f3897a208e91c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = (type, searchParams) => {
  const url = new URL(BASE_URL + "/" + type);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

export default getWeatherData;
