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



// function WeatherHistory(){ 
//    const getCurrentPlace = () => data.
//    return {getCurrentPlace}
// }

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

const prec = Precipitation('high');
console.log(prec.precipitationType())
console.log(prec.convertToInches(10))
console.log(prec.convertToMM(100))

const temp = Temperature();
console.log(temp.convertToF(30))
console.log(temp.convertToC(60))

const test5 = WeatherPrediction()
console.log(test5.matches(test3))


