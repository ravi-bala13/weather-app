import { useEffect, useState } from "react";
import "./App.css";
import ForeCastBox from "./components/ForeCastBox";
import GraphBox from "./components/GraphBox";
import InputBox from "./components/InputBox";
import Pressure from "./components/Pressure";
import SunTime from "./components/SunTime";
import { getFormattedWeatherData } from "./services/weatherService";

function App() {
  const [query, setQuery] = useState({ q: "" });
  console.log("query:", query);

  const [weatherData, setWeatherData] = useState(null);
  const units = "metric";

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
      {weatherData && (
        <div className="border flex flex-col justify-center items-center">
          <InputBox setQuery={setQuery} />
          <ForeCastBox weatherData={weatherData} />
          <GraphBox weatherData={weatherData} />
          <Pressure weatherData={weatherData} />

          <SunTime weatherData={weatherData} />
        </div>
      )}
    </div>
  );
}

export default App;
