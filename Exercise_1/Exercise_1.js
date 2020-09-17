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
    let place =  "Aarhus";
    return Object.assign ({value},Event(d,place), DataType('Celcius','30'))
}

// wind 
function wind(direction) {
    const getDirection = () => direction;
    const convertToMPH = (unit) => ((unit / 1000)/1.6093)*3600;
    const convertToMS = (unit) => (((unit * 1.6093)*1000)/60)/60;
    let number = 2;
    return Object.assign ({getDirection, convertToMPH, convertToMS}, WeatherData(number))
}


//test
let d= new Date();
let place =  "Aarhus";
const test = Event(d,place)
const test2 = DataType('Celcius','30')
const test3 = WeatherData(123)
console.log(test.place(), test.time())
console.log(test2.type(), test2.unit())
console.log(test3.time())
const wind1 = wind('east');
console.log(wind1.unit())
console.log(wind1.convertToMPH(30))
console.log(wind1.convertToMS(67))



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