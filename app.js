const card = document.querySelector('.card');
const cityName = document.querySelector('.cityName');
const time = document.querySelector('.time');
const img = document.querySelector('img');
const condition = document.querySelector('.condition');
const temp = document.querySelector('.temp');
const cityForm = document.querySelector('form');

const updateCity = async (city) => {
    const getcity = await getCity(city);
    const getweather = await getWeather(getcity.Key);
    return getweather;
}

cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();
    // get city from form
    const city = cityForm.city.value.trim();
    cityForm.reset();
    // update city UI
    updateCity(city)
    .then(
        (data) => {
            data.forEach( res => {
            cityName.textContent = city;
            condition.textContent = res.WeatherText;
            temp.textContent = res.Temperature.Metric.Value;
            card.classList.remove('d-none');
        }
    )
  })
    .catch(
        (error) => {
            console.log(error);
    });
})

