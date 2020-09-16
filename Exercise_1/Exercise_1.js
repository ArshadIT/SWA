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
    let place =  "Viborg";
    return Object.assign ({value},Event(d,place), DataType('Celcius','30'))
}

let d= new Date();
let place =  "Viborg";
const test = Event(d,place)
const test2 = DataType('Celcius','30')
const test3 = WeatherData(123)
console.log(test.place(), test.time())
console.log(test2.type(), test2.unit())
console.log(test3.time())

// wind 
function wind(direction, mph, ms) {
    const getDirection = () => direction;
    const convertToMPH = () => ms;
    const convertToMS = () => mph;
return {
    getDirection,
    convertToMPH,
    convertToMS
}
}
// Temperature

function temperature(far, cel){
    
    const convertToF = () => cel;
    
    const convertToC = () => far;

    return {
        convertToF,
        convertToC
    }
}

// precipitation

function precipitation(type, inn, mm){

    const precipitationType = () => type;
    const convertToInches = () => mm;
    const convertToMM = () => inn;
    return {
        precipitationType,
        convertToInches,
        convertToMM
    }
}