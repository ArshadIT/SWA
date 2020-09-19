class Event {
    constructor(date, place, type, unit) {
        this.date = date;
        this.place = place;
        this.type = type;
        this.unit = unit;
    }
}
Event.prototype = {
    time() {
        return this.date;
    },
    place() {
        return this.place;
    },
    type() {
        return this.type;
    },
    unit() {
        return this.unit;
    }
}
function DateIntervel(to, from){
this.to = to;
this.from = from;
}
DateInterval.prototype.from = {
    from(){
        return this.from;
    }
}
DateInterval.prototype.to = {
       to(){
        return this.to;
       } 
}
DateInterval.prototype.contains = function(date) {
    return (date >= from && date <= to)
}
class WeatherData extends Event {
    constructor(date, place, type, unit, number) {
        super(date, place, type, unit)
        this.number = number
    }
}

WeatherData.prototype = {
    value() {
        return this.number
    }
}

class Temperatur extends WeatherData {
    constructor(date, place, type, unit, number) {
        super(date, place, type, unit, number)
    }
}

Temperatur.prototype = {
    convertToF() {
        this.type * 9/5 + 32
    },
    convertToC() {
        (this.type - 32) * 5/9
    } 
}

class Wind extends WeatherData {
    constructor(date, place, type, unit, number, direction) {
        super(date, place, type, unit, number)
        this.direction = direction;
    }
}

Wind.prototype = {
    convertToMPH() {
        ((this.unit / 1000)/1.6093)*3600
    },
    convertToMS() {
        (((this.unit * 1.6093)*1000)/60)/60
    } 
}

class Precipitation extends WeatherData {
    constructor(date, place, type, unit, number, precipitationType) {
        super(date, place, type, unit, number)
        this.precipitationType = precipitationType;
    }
}

Precipitation.prototype = {
    convertToInches() {
        this.unit * 25.4
    },
    convertToMM() {
        this.unit / 25.4
    } 
}

function WeatherHistory(WeatherDataCollecion, place, type, unit, number, Precipitation, period){
    this.WeatherDataCollecion = WeatherData;
    this.place = place;
    this.type = type;
    this.unit = unit;
    this.number =  number;
    this.Precipitation = Precipitation;
}
WeatherHistory.prototype.getCurrentPlace = function(){
    return this.place;
} 
WeatherHistory.prototype.setCurrentPlace = function(newPlace){
    this.place = newPlace;
} 
WeatherHistory.prototype.clearCurrentPlace = function(){
    this.place = 'undefined';
} 
WeatherHistory.prototype.getCurrentType = function(){
    return this.type;
}
WeatherHistory.prototype.setCurrentType = function(newWeatherDataType){
    this.type = newWeatherDataType
} 
WeatherHistory.prototype.clearCurrentType = function(){
    this.type = "undefind"
}
WeatherHistory.prototype.getCurrentPeriod = function(){
    return this.period
}
WeatherHistory.prototype.setCurrentPeriod = function(newPeriod){
    this.period = newPeriod;
} 
WeatherHistory.prototype.clearCurrentPeriod = function(){
    this.period = 'undefined'
}
WeatherHistory.prototype.convertToUSUints = function(){

}