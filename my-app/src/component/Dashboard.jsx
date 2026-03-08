import { useEffect } from "react";

function Dashboard() {

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q={Orlando},{FL},{USA}&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return(
    <div className="col-12 d-flex column justify-content-center mt-5 border">
      <h1>Current weather in Orlando, FL</h1>
    </div>
  );
}

export default Dashboard;