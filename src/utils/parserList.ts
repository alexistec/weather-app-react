import moment from 'moment';

export const parserListDays = (list:any) => {
    let daysWeather = list.filter((item:any, i: number) => {
      return !i || moment(item.dt_txt).format("dddd") !== moment(list[i - 1].dt_txt).format("dddd");
    });
    
    return daysWeather;
}