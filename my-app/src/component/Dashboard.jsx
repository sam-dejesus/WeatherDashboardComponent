import { useEffect } from "react";

function Dashboard() {

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Orlando,FL,US&limit=1&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        const lat = data[0].lat;
        const lon = data[0].lon;

        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
      })
      .then(res => res.json())
      .then(weather => console.log(weather));
  }, []);

  return(
    <div className="col-12 d-flex flex-column justify-content-center mt-5 border">
      <h1>Current weather in Orlando, FL</h1>
    </div>
  );
}

export default Dashboard;