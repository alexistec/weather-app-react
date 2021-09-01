import React from "react";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import WeatherList from "../../components/WeatherList";



describe('Test in Component <WeatherList/>', () => {
    const days = [
        {
            "dt": 1630519200,
            "main": {
                "temp": 33.82,
                "feels_like": 32.19,
                "temp_min": 33.82,
                "temp_max": 35.49,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1002,
                "humidity": 24,
                "temp_kf": -1.67
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 4.35,
                "deg": 22,
                "gust": 5.3
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-09-01 18:00:00"
        },
        {
            "dt": 1630540800,
            "main": {
                "temp": 25.34,
                "feels_like": 24.77,
                "temp_min": 25.34,
                "temp_max": 25.34,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1002,
                "humidity": 32,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 17
            },
            "wind": {
                "speed": 3.22,
                "deg": 58,
                "gust": 11.93
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-09-02 00:00:00"
        }        
    ];

    test('should render correctly', () => {
        const wrapper = renderer.create(<WeatherList days={ days }/>)
                        .toJSON();
        expect( wrapper ).toMatchSnapshot();
    })
    
})
