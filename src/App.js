import "./App.css";
import ForeCastBox from "./components/ForeCastBox";
import GraphBox from "./components/GraphBox";
import InputBox from "./components/InputBox";
import Pressure from "./components/Pressure";
import SunTime from "./components/SunTime";
import { getFormattedWeatherData } from "./services/weatherService";

function App() {
  const fetchWeather = async () => {
    const result = await getFormattedWeatherData({ q: "madurai" });
    console.log("result:", result);
  };

  fetchWeather();

  return (
    <div className="border flex flex-col justify-center items-center">
      <InputBox />
      <ForeCastBox />
      <GraphBox />
      <Pressure />

      <SunTime />
    </div>
  );
}

export default App;
