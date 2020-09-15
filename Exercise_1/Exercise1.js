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