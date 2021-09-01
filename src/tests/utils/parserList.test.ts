const API_KEY = process.env.REACT_APP_API_KEY;
const url = 'https://api.openweathermap.org/data/2.5/';
import { parserListDays } from "../../utils/parserList"


describe('Test en utils parserList', () => {
    
    test('should parse the list of days ',async () => {
        const city = 'Formosa';
        const data = await fetch(`${url}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
        const { list }= await data.json();
        const days = parserListDays(list);
        expect( days.length ).toBe(6)
    })

})
