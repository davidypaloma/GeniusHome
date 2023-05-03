import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../utils/constants';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get user's current location
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;

          // Build request options with current location
          const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: { q: `${latitude},${longitude}` },
            headers: {
              'X-RapidAPI-Key': '27aad86a42msha7ee635e6706dccp1bcab6jsn97a65a507048',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
          };

          // Fetch weather data from API
          const response = await axios.request(options);
          setWeatherData(response.data);
          setLoading(false);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const weatherIconUrl = `http:${weatherData.current.condition.icon}`;

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={(weatherData.current.condition.text) === "clear" ? "https://cdn-icons-png.flaticon.com/512/5828/5828453.png" : "https://cdn-icons-png.flaticon.com/512/5828/5828380.png"}
        alt={weatherData.current.condition.text}
        className="w-32"
      />
      <p>{weatherData.current.temp_c}°C</p>
      <p>{weatherData.current.condition.text}</p>
    </div>
  );
}

export default Weather;