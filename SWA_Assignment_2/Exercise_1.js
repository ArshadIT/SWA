// wind 
function Wind(direction, number, date, place, type, unit) {
    const getDirection = () => direction;

    function convertToMPH() {
        return ((number / 1000) / 1.6093) * 3600;
    }

    function convertToMS() {
        return (((number * 1.6093) * 1000) / 60) / 60;
    }
    return Object.assign({ 
        getDirection,
        convertToMPH,
        convertToMS
    }, WeatherData(number, date, place, type, unit))
}


// temperature
function Temperature(number, date, place, type, unit) {
    function convertToF() {
        return number * 9 / 5 + 32;
    }

    function convertToC() {
        return (number - 32) * 5 / 9;
    }
    return Object.assign({
        convertToF,
        convertToC
    }, WeatherData(number, date, place, type, unit))
}

// precipitation

function Precipitation(precType, number, date, place, type, unit) {
    const precipitationType = () => precType;

    function convertToInches() {
        return number * 25.4;
    }

    function convertToMM() {
        return number / 25.4;
    }
    return Object.assign({
        precipitationType,
        convertToInches,
        convertToMM
    }, WeatherData(number, date, place, type, unit))
}

// cloud covarage

function CloudCovarage(number, date, place, type, unit) {
    return Object.assign({}, WeatherData(number, date, place, type, unit))
}