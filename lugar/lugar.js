const axios = require('axios');

const getLugarLatLong = async(direction) => {
    const encodeUlR = encodeURI(direction);
    //console.log(encodeUlR);

    // Creamos la instancia para
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlR}`,
        headers: { 'x-rapidapi-key': '8d8275ad09mshfcc76663689b9e8p1d763ajsn955f74b197a9' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No existen resultados para ${direction}`);
    }

    const data = resp.data.Results[0];
    const direcion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return { direcion, lat, lng }
};

module.exports = {
    getLugarLatLong
};