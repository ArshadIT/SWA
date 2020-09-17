// Weather Assignment part 1, factory function 
function Event(date, _place) {
    const time = () => date;
    const place = () => _place;
    return {time, place}
}

function DataType(_type, _unit) {
    const type = () => _type;
    const unit = () => _unit;
    return {type, unit}
}

function WeatherData(number) {
    const value = () => number;
    let d= new Date();
    let place;
    return Object.assign ({value},Event(d,place), DataType('Celcius','30'))
}

// wind 
function Wind(direction) {
    const getDirection = () => direction;
    const convertToMPH = (unit) => ((unit / 1000)/1.6093)*3600;
    const convertToMS = (unit) => (((unit * 1.6093)*1000)/60)/60;
    let number;
    return Object.assign ({getDirection, convertToMPH, convertToMS}, WeatherData(number))
}


// Temperature

function Temperature(){
    const convertToF = (unit) => unit * 9/5 + 32;
    const convertToC = (unit) => (unit - 32) * 5/9;
    let number;
    return Object.assign ({convertToF, convertToC}, WeatherData(number))
}

// precipitation

function Precipitation(type){

    const precipitationType = () => type;
    const convertToInches = (unit) => unit*25.4;
    const convertToMM = (unit) => unit/25.4 ;
    let number;
    return Object.assign ({precipitationType, convertToInches, convertToMM}, WeatherData(number))
}

// prediction
function WeatherPrediction(data){
    const matches = (WeatherData) => {
    if(WeatherData.time===this.time)
    {
        true;
    }else{
        false;
    }};
    const value = () => number;
    let d= new Date();
    let place;
    let type;
    let unit;
    return Object.assign ({matches},Event(d,place), DataType(type,unit))
}



function WeatherHistory(data){ 
   const getCurrentPlace = () => place;
    return{getCurrentPlace}
}


//test
let d= new Date();
let place =  "Aarhus";
const eventTest = Event(d,place)
const dataType = DataType('Celcius','30')


const weatherData = WeatherData(123)
const weatherData2 = WeatherData(123)
data =[weatherData,weatherData2]


console.log(eventTest.place(), eventTest.time())
console.log(weatherData.type(), weatherData.unit())
console.log(weatherData.time())

const wind = Wind('east');
console.log(wind.unit())
console.log(wind.convertToMPH(30))
console.log(wind.convertToMS(67))

const prec = Precipitation('high');
console.log(prec.precipitationType())
console.log(prec.convertToInches(10))
console.log(prec.convertToMM(100))

const temp = Temperature();
console.log(temp.convertToF(30))
console.log(temp.convertToC(60))

const weatherPred = WeatherPrediction()
console.log(weatherPred.matches(weatherData2))

const weatherHis = WeatherHistory(data)
console.log(weatherHis.getCurrentPlace())

