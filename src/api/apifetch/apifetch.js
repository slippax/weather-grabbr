import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import axios from "axios";
import Temp from "../../components/layout/content/values/temp";
import FeelsLike from "../../components/layout/content/values/feelslike";
import MaxMin from "../../components/layout/content/values/maxmin";
import Humidity from "../../components/layout/content/values/humidity";
import Description from "../../components/layout/content/values/description";
import Location from "../../components/layout/content/values/location";
import City from "../../components/layout/content/values/city";
import Country from "../../components/layout/content/values/country";
import Button from "../../components/layout/content/values/button";
import classes from "./apifetch.module.css";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

function ApiFetch() {
  const [weatherData, setWeatherData] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [url, setUrl] = useState(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=220b8775efd1ba31288e8e381b672250`
  );
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const fetchData = async () => {
      const weatherResult = await axios(url);
      setWeatherData(weatherResult.data);
    };
    fetchData();
  }, [url]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      console.log(weatherData);
    });
  }, [weatherData]);

  useEffect(() => {
    if (city && country !== "") {
      setUrl(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=220b8775efd1ba31288e8e381b672250`
      );
    }
  }, [city, country]);

  const locationSetter = () => {
    setUrl(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=220b8775efd1ba31288e8e381b672250`
    );
  };
  return (
    <div className={classes.contentWrapper}>
      <Slide bottom>
        <div>
          <City changed={(event) => setCity(event.target.value)} />
          <Country changed={(event) => setCountry(event.target.value)} />
          <Button clicked={locationSetter} name={"Get Location"} />
        </div>
      </Slide>

      <div className={classes.valueWrapper}>
      <Fade spy={url}>
        <div className={classes.temps}>
          {weatherData && <Temp temp={weatherData.main.temp - 273.15} />}
          {weatherData && (
            <FeelsLike feelslike={weatherData.main.feels_like - 273.15} />
          )}
          {weatherData && (
            <MaxMin
              max={weatherData.main.temp_max - 273.15}
              min={weatherData.main.temp_min - 273.15}
            />
          )}
        </div>
        <div className={classes.temps}>
          {weatherData && <Humidity humidity={weatherData.main.humidity} />}
          {weatherData && (
            <Description description={weatherData.weather[0].main} />
          )}
          {weatherData && (
            <Location
              city={weatherData.name}
              country={weatherData.sys.country}
            />
          )}
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default ApiFetch;
