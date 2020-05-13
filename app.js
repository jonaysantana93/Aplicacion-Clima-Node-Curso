const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// Recurso para obtener la api -> https://rapidapi.com/dev132/api/city-geo-location-lookup

//console.log(argv.direccion);

/*
clima.getClima(10.740000, -74.000000)
    .then(console.log)
    .catch(console.log);


lugar.getLugarLatLong(argv.direccion)
    .then(console.log);
*/

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direcion} es de ${temp} ºC`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion.direcion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);