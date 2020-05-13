const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7cdeefdaab3d7c5485e6a9e6498cdc53&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}