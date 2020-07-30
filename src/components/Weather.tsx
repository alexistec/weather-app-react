import React from 'react';
import Avatar from '@material-ui/core/Avatar';

type WeatherProps = {
    city:string;
    icon:string;
    humedity:number;
    temp:number
}

const Weather:React.FC<WeatherProps>= ({city,icon,humedity,temp}) => {

    return(
        <div style={{justifyContent:'center',alignItems:'center'}}>
            <h1 style={{textAlign:'center'}}>Weather in {city} </h1>
            <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                <Avatar style={{height:100,width:100}}alt="Remy Sharp" src={`https://openweathermap.org/img/wn/${icon}.png`}  />
                <h1>{temp}°</h1>
            </div>
            <h3 style={{textAlign:'center'}}>Humedity {humedity}</h3>
        </div>
    )
}


export default Weather;