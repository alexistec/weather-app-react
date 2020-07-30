import React from 'react';
import {Card,CardContent,Avatar} from '@material-ui/core';
import moment from 'moment';


type WeatherListProps = {
  days : object[]
} 

const WeatherList:React.FC<WeatherListProps> = ({days}) => {
    return(
        <div style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
            {days.map((value:any,index:number) =>( 
                <Card style={{width:180,marginLeft:15,justifyContent:'center',alignItems:'center'}} key={index}>
                  <CardContent>
                    <h3>{moment(value.dt_txt).format('dddd')}</h3>
                    <Avatar style={{height:50,width:50}}alt="Remy Sharp" src={`http://openweathermap.org/img/wn/${value.weather[0].icon}.png`}  />
                    <h3>{value.main.temp}°</h3>
                  </CardContent>
                </Card>
            ))}
        </div>
    )
    
}

export default WeatherList;