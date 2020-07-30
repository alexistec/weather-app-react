import React from 'react';
import { Card, CardHeader, Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


type ListCitiesProps = {
    cities:object[],
    getWeather : (city:string) => void;
}



const ListCities:React.FC<ListCitiesProps> = ({ cities, getWeather }) => {
    return(
        <Grid item lg={4} md={6} xl={3} xs={12}>
            <Card>
                <CardHeader
                    title="Cities"
                />
                <List component="nav" aria-label="main mailbox folders">
                    {cities.map((value:any, index:number) =>( 
                        <>
                            <ListItem button key={index} onClick={ () => getWeather(value.city) }>
                                <span>{value.city}</span>
                            </ListItem>
                            <Divider/>
                        </>
                    ))}
                </List>
            </Card>
        </Grid>
    )
}

export default ListCities;