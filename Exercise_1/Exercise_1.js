// Weather Assignment part 1, factory function 
function Event(date, _place) {
    const time = () => date;
    const place = () => _place;
    return {
        time,
        place
    }
}

function DataType(_type, _unit) {
    const type = () => _type;
    const unit = () => _unit;
    const setUnit = (__unit) => _unit = __unit;
    return {
        type,
        unit,
        setUnit
    }
}

function WeatherData(number, date, place, type, unit) {
    const value = () => number;
    return Object.assign({
        value
    }, Event(date, place), DataType(type, unit))
}

// wind 
function Wind(direction, number, date, place, type, unit) {
    const getDirection = () => direction;
    function convertToMPH(){
        return ((number / 1000) / 1.6093) * 3600;
    }
    function convertToMS(){
        return (((number * 1.6093) * 1000) / 60) / 60;
    }
    return Object.assign({
        getDirection,
        convertToMPH,
        convertToMS
    }, WeatherData(number, date, place, type, unit))
}


// Temperature
function Temperature(number,  date, place, type, unit) {
    function convertToF(){ return number * 9 / 5 + 32;}
    function convertToC(){ return (number - 32) * 5 / 9;}
    return Object.assign({
        convertToF,
        convertToC
    }, WeatherData(number, date, place, type, unit))
}

// precipitation

function Precipitation(type, number, date, place, type, unit) {
    const precipitationType = () => type;
    function convertToInches(number){number * 25.4;}
    function convertToMM(number){number / 25.4;}
    return Object.assign({
        precipitationType,
        convertToInches,
        convertToMM
    }, WeatherData(number, date, place, type, unit))
}

// cloud covarage

function CloudCovarage(number, date, place, type, unit) {
    return Object.assign({
    }, WeatherData(number, date, place, type, unit))
}

// dateinterval 

function DateInterval(dateFrom, dateTo) {
    const from = () => dateFrom;
    const to = () => dateTo;

    function contains(d) {
        return (d >= dateFrom && d <= dateTo)
    }
    return {
        from,
        to,
        contains
    }
}

// weather history
function WeatherHistory(weatherDataCollection) {
    let place;
    let type;
    let period;
    const getCurrentPlace = () => place;
    const setCurrentPlace = (_place) => place = _place;
    const clearCurrentPlace = () => {
        place = undefined;
    };
    const getCurrentType = () => type;
    const setCurrentType = (_type) => type = _type;
    const clearCurrentType = () => {
        type = undefined
    };
    const getCurrentPeriod = () => period;
    const setCurrentPeriod = (_period) => period = _period;
    const clearCurrentPeriod = () => {
        period = undefined
    };
    const convertToUSUnits = () => {
        for(i=0; i<weatherDataCollection.length; i++){
            if(weatherDataCollection[i].unit()==="C")
            {
                convertToF(weatherDataCollection[i].value())
                weatherDataCollection[i].setUnit('F')
            }
            else if (weatherDataCollection[i].unit()==='MS')
            {
                convertToMPH(weatherDataCollection[i].value())
                weatherDataCollection[i].setUnit('MPH')
            }
            else if(weatherDataCollection[i].unit()==='MM')
            {
                convertToInches(weatherDataCollection[i].value())
                weatherDataCollection[i].setUnit('Inches')
            }
        }
    };

    const convertToInternationalUnits = () => {
        for(i=0; i <weatherDataCollection.length; i++){
            if(weatherDataCollection[i].unit()==="F")
            {
                convertToC(weatherDataCollection[i].value())
                weatherDataCollection[i].setUnit('C')

            }
            else if (weatherDataCollection[i].unit()==='MPH')
            {
                convertToMS(weatherDataCollection[i].value())
                weatherDataCollection[i].setUnit('MS')
            }
            else if(weatherDataCollection[i].unit()==='Inches')
            {
                convertToMM(weatherDataCollection[i].value())
                weatherDataCollection[i].setUnit('MM')
            }
        }
    };

    const add = (data) => weatherDataCollection.push(data);
    function data(){
        for( let i =0; i < weatherDataCollection.length; i++){
     
      console.log(` city ${weatherDataCollection[i].place()} 
      date ${weatherDataCollection[i].time()}
       type ${weatherDataCollection[i].type()} 
       period ${weatherDataCollection[i].unit()}`)
        }
    } 
    
    return {getCurrentPlace, setCurrentPlace, clearCurrentPlace, 
        getCurrentType, 
        setCurrentType, clearCurrentType, getCurrentPeriod, 
        setCurrentPeriod, clearCurrentPeriod,
        convertToUSUnits, convertToInternationalUnits,
         add, data
    }
}

// prediction
function WeatherPrediction(data, _to, _from, place, type, unit) {
    const matches = (data) => {
        return (data.value() >= _from && d <= _to)
    };

    const to = () => _to;
    const from = () => _from;

    return Object.assign({
        matches, to, from
    }, Event(data, place), DataType(type, unit))
}


// temperature prediction
function TemperaturePrediction(data, to, from, place, type, unit) {
    function convertToF(to, from){
        to * 9 / 5 + 32;
        from * 9 / 5 + 32;
        console.log('To: ' + to + 'From: ' + from);
    }
    function convertToC(to, from){
        (to - 32) * 5 / 9;
        (from - 32) * 5 / 9;
        console.log('To: ' + to + 'From: ' + from);
    }
    return Object.assign({
        convertToF,
        convertToC
    }, WeatherPrediction(data, to, from, place, type, unit))
}



//dateInterval test
let dateFrom = new Date(2019, 04, 16);
let dateTo = new Date();
let date = new Date(2020, 10, 16)
const dint = DateInterval(dateFrom, dateTo)
// console.log(dint.contains(date))

// weather history test
const data1 = WeatherData(23, date, 'Århus', 'Sunny', 'C')
const data2 = WeatherData(60, date, 'Horsens', 'Rain', 'C')
const data3 = WeatherData(10, date, 'Viborg', 'Cloudy', 'MM')

var dataCollection = [data1, data2, data3];

const his = WeatherHistory(dataCollection)
console.log(his.add(WeatherData(12, date, his.setCurrentPlace('Århus'), his.setCurrentType('Sunny'), 'MS')))
console.log(his.add(WeatherData(12, date, his.setCurrentPlace('Århus'), his.setCurrentType('Sunny'), 'MM')))
// console.log(his.convertToUSUnits())
his.data()



const temp = TemperaturePrediction(20, date, 'Århus', 'Sunny', 'C');
console.log(temp.convertToF())

// const cloud = CloudCovarage(23 , date , 'Århus', 'Sunny', 'MPH');
// console.log(cloud.value())
// //test
// let d = new Date();
// let place = "Aarhus";
// const eventTest = Event(d, place)
// const dataType = DataType('Celcius', '30')


// const weatherData = WeatherData(123)
// const weatherData2 = WeatherData(123)
// data = [weatherData, weatherData2]


// console.log(eventTest.place(), eventTest.time())
// console.log(weatherData.type(), weatherData.unit())
// console.log(weatherData.time())

// const wind = Wind('east');
// console.log(wind.unit())
// console.log(wind.convertToMPH(30))
// console.log(wind.convertToMS(67))

// const prec = Precipitation('high');
// console.log(prec.precipitationType())
// console.log(prec.convertToInches(10))
// console.log(prec.convertToMM(100))

// const temp = Temperature();
// console.log(temp.convertToF(30))
// console.log(temp.convertToC(60))

// const weatherPred = WeatherPrediction()
// console.log(weatherPred.matches(weatherData2))

// const weatherHis = WeatherHistory(data)
// console.log(weatherHis.getCurrentPlace())