import React from "react";
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListCities from "../../components/ListCities";

describe('Test in conmponent <ListCities/>', () => {
    const cities = [
        { city: 'Formosa', code: 'AR' },
        { city: 'Buenos Aires', code: 'AR' },
        { city: 'Mendoza', code: 'AR' },
        { city: 'Tucuman', code: 'AR' },
        { city: 'Cordoba', code: 'AR' },
    ];

    const getWeather = jest.fn();

    test('should renders correctly', () => {
        const wrapper = renderer.create(<ListCities cities={ cities } getWeather={ getWeather } />)
        .toJSON();
        expect( wrapper ).toMatchSnapshot();
    })
    

    test('cllicking the list calls events getWeather',() => {
        const wrapper = render(<ListCities cities={ cities } getWeather={ getWeather } />)
        const city = cities[0].city
        const listItem = wrapper.getByText(city);
        fireEvent.click(listItem);
        expect(getWeather.mock.calls).toHaveLength(1);

    })

})
