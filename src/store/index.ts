import create,{ GetState, SetState } from 'zustand';
import { parserListDays } from '../utils/parserList';
import { WeatherState } from './types';
const url = process.env.REACT_APP_API_WEATHER;

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
        getCurrent : async () => {
            setState({ isLoading: true });
            try {
                const result = await fetch(`${url}current`);
                const { city, temperature, weather } = await result.json();
                setState({ 
                    city, 
                    temp: temperature.temp, 
                    humedity: temperature.humidity, 
                    icon: weather[0].icon,
                    isLoading: false,
                    error:false
                })
            } catch (error) {
                setState({ 
                    error:true,
                    isLoading: false
                })
            }
        },
        getWeatherByCity : async (cityName: string = '') => {
            setState({ isLoading: true });
            try {
                const result = await fetch(`${url}current/${cityName}`);
                const { city, temperature, weather } = await result.json();
                setState({ 
                    city,
                    temp: temperature.temp, 
                    humedity: temperature.humidity, 
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
        getForecast : async (cityName:string = '') => {
            setState({ isLoading: true });
            try {
                const data = await fetch(`${url}forecast/${cityName}`);
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