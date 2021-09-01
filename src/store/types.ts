export interface Country{
    city: string;
    code: string;
}

export interface Days{
    dt: number,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        grnd_level: number,
        humidity: number,
        temp_kf: number
    },
    weather: [{
        id: number,
        main: string,
        description: string,
        icon: string
    }],
    clouds: {
        all: number
    },
    wind: {
        speed: number,
        deg: number
    },
    visibility: number,
    pop: number,
    sys: {
        pod: string
    },
    dt_txt: string
        
}




export interface WeatherState{
    cities:Country[];
    days    : Days[];
    getWeatherByCity: (cityName:string) => void;
    getForecast : (cityName:string) => void;
    isLoading:boolean;
    error:boolean;
    city:string;
    icon:string,
    humedity:number,
    temp:number,
}