import create,{ GetState, SetState } from 'zustand';
import { parserListDays } from '../utils/parserList';
import { WeatherState } from './types';
const API_KEY = process.env.REACT_APP_API_KEY;
const url = 'https://api.openweathermap.org/data/2.5/'

export default create((setState: SetState<WeatherState>, getState: GetState<WeatherState>): WeatherState =>{
    return{
        cities: [
            { city: 'Formosa', code: 'AR' },
            { city: 'Buenos Aires', code: 'AR' },
            { city: 'Mendoza', code: 'AR' },
            { city: 'Tucuman', code: 'AR' },
            { city: 'Cordoba', code: 'AR' },
        ],
        city: '',
        error:false,
        days: [],
        icon: '',
        humedity: 0,
        temp: 0,
        isLoading: false,


        getWeatherByCity : async (cityName: string) => {
            
            setState({ 
                isLoading: true,
            });

            try {
                const result = await fetch(`${url}weather?q=${cityName}&appid=${API_KEY}`);
                const data = await result.json();
                const { name ,main, weather } = data;
                setState({ 
                    city :name,
                    temp: main.temp, 
                    humedity: main.humidity, 
                    error:false,
                    icon: weather[0].icon,
                    isLoading:false 
                })
            } catch (error) {
                setState({ 
                    error:true,
                    isLoading: false
                })
            }
        },

        getForecast : async (city:string) => {
            setState({ isLoading: true });
            try {
                const data = await fetch(`${url}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
                const { list }= await data.json();
                const days = parserListDays(list);
                setState({ isLoading: false, days });
            } catch (error) {
                setState({ 
                    error:true,
                    isLoading: false
                })
            }
        }

    }
});