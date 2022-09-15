import * as Location from 'expo-location';
import axios from 'axios';
import Loading from "./src/components/Loading";
import Index from './src/components';
import {useEffect, useState} from "react";

const API_KEY = '9e1d82b85b7c88233b4ed5b8092e394a';


export default function App() {

  const [loading, setLoading] = useState(true);
  const [location] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [temp, setTemp] = useState(null);
  const [condition, setCondition] = useState('');


  useEffect(() => {
    const getLocation = async () => {
      setLoading(true);
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({});
      await getWeather(latitude, longitude)

    }

    getLocation();


    const getWeather = async (latitude, longitude) => {
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      setTemp(data.main.temp)
      setCondition(data.weather[0].main)
      setLoading(false);
    }
  }, [])


  let text = 'Пошук місцезнаходження...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = "Знайшов!"
  }


  return (
    loading ? <Loading el={text}/> : <Index temp={Math.round(temp)} condition={condition}/>
  );
}
