import { useEffect, useState } from "react";
import "./App.css";
import CitiesList from "./components/CitiesList";
import ForeCastBox from "./components/ForeCastBox";
import GraphBox from "./components/GraphBox";
import InputBox from "./components/InputBox";
import { getFormattedWeatherData } from "./services/weatherService";

function App() {
  const [query, setQuery] = useState({ q: "" });
  console.log("query:", query);

  const [weatherData, setWeatherData] = useState(null);
  const units = "metric";

  const [dailyDetails, setDailyDetails] = useState({
    temp: 29,
    sunrise: 5,
    sunset: 6,
    humidity: 90,
    pressure: 56,
    icon: "10d",
  });
  console.log("dailyDetails:", dailyDetails);
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        console.log("lat:", lat, lon);

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const fetchWeather = async () => {
    const message = query.q ? query.q : "current location.";

    console.log("Fetching weather for " + message);

    if (query.q === "") {
      console.log("empty");
      return;
    }

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      console.log("data:", data);
      console.log(
        `Successfully fetched weather for ${data.name}, ${data.country}.`
      );

      setDailyDetails({ ...dailyDetails, ...data });
      setWeatherData(data);
    });
  };

  useEffect(() => {
    handleLocationClick();
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [query]);

  return (
    <div>
      {weatherData ? (
        <div className="flex flex-col justify-center items-center">
          <InputBox setQuery={setQuery} weatherData={weatherData} />

          <ForeCastBox
            weatherData={weatherData}
            dailyDetails={dailyDetails}
            setDailyDetails={setDailyDetails}
          />
          <GraphBox weatherData={weatherData} dailyDetails={dailyDetails} />
        </div>
      ) : (
        <div className="flex items-center mt-60">
          <img
            src="https://miro.medium.com/max/1400/1*5ngZiNtGMrp_xmZHxSvJ0g.gif"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default App;
