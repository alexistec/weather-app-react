import React,{ useEffect } from 'react';
import useStoreWeather from './store/';
import { makeStyles} from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListCities  from '../src/components/ListCities';
import Weather  from '../src/components/Weather';
import WeatherList  from '../src/components/WeatherList';
const [useStore] = useStoreWeather;


function App() {
  const classes = useStyles();
  const citiesList = useStore(state => state.cities);
  const { city, icon, temp, humedity, days } = useStore(state => state);
  const { getWeatherByCity, getForecast } = useStore(state => state);
  const {isLoading,error} = useStore(state => state);


  useEffect(()=>{
    (async function(){
      await getWeatherByCity('Formosa');
      await getForecast('Formosa');
    })()
  },[])

  const getWeatherCity = (city:string) => {
    getWeatherByCity(city);
    getForecast(city);
  }

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Grid container spacing={4}>
          <ListCities 
            cities={citiesList}
            getWeather={getWeatherCity}
          />
          <Grid item lg={8} md={12} xl={9} xs={12}>
            {error ? <strong style={{color:'red'}}>Weather Api Not found</strong> : ''}
            <Card>
              {isLoading ? 
                <CircularProgress/>
              :
                <Weather 
                  city={city} 
                  icon={icon} 
                  temp={temp} 
                  humedity={humedity}
                />  
              }
            </Card>
            <h2 style={{color:'gray'}}>Next days in {city}</h2>
            {isLoading ? 
              <CircularProgress/> 
            : 
              <WeatherList days={days}/>
            }
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root:{
      paddingTop:56,
      paddingLeft: 120,
      paddingRight: 120,
      height:'100%',
  },
  rootDashboard:{
      padding:theme.spacing(4),
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    height: '100%',
  }
}))

export default App;
