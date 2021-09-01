import React from "react";
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Weather from "../../components/Weather";


describe('Test in <WeatherApp/>', () => {
    const props = {
        city: 'formosa',
        icon: 'icon.jpg',
        temp: 12,
        humedity:58 
    }

    test('should renders correctly', () => {
        const wrapper = renderer.create(<Weather {...props}/>)
                        .toJSON();
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should show value props', () => {
        const { city,temp,humedity, icon } = props;
        const wrapper = render(<Weather {...props}/>);

        const displayedImage = document.querySelector("img") as HTMLImageElement;
        
        expect( wrapper.container ).toHaveTextContent( `Weather in ${city}` );       
        expect( wrapper.container ).toHaveTextContent( `${temp}°` );    
        expect( wrapper.container ).toHaveTextContent( `Humedity ${humedity}` );      
        
        expect(displayedImage.alt).toContain(icon)
    })
    

})
