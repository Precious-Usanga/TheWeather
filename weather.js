const apiKey = 'udkCLqxTbAQwUYOXjeTiwA34OSRBGBun';



// get location
const getCity = async (city) => {
    
    const locationBase = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const locationQuery = `?apikey=${apiKey}&q=${city}`;
    
    const response = await fetch(locationBase + locationQuery);
    const data = await response.json();
    console.log('location: ', data);
    return data[0];
}

// get location's weather condition
const getWeather = async (id) => {
    const conditionBase = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const conditionQuery = `${id}?apikey=${apiKey}`;
    
    const condition = await fetch(conditionBase + conditionQuery);
    const success = await condition.json();
    console.log('Details: ', success);
    return success;
}