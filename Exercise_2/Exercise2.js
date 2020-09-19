class WeatherEvent {
    constructor(date, place, type, unit) {
        this.date = date;
        this.place = place;
        this.type = type;
        this.unit = unit;
    }

    
}

WeatherEvent.prototype.time = function(){
    return this.date;
}

WeatherEvent.prototype.place = function(){
    return this.place;
}

WeatherEvent.prototype.type = function(){
    return this.type;
}

WeatherEvent.prototype.unit = function(){
    return this.unit;
}


class DateInterval {
    constructor(to, from){
        this.to = to;
        this.from = from;
    }
}

DateInterval.prototype.to = function(){
    return this.to;
}

DateInterval.prototype.from = function(){
    return this.from;
}

DateInterval.prototype.contains = function(date){
    (date >= this.from && date <= this.to)
}

class WeatherData extends Events {
    constructor(number,  date, place, type, unit) {
        super(date, place, type, unit)
        this.number = number
    }
}


WeatherData.prototype.value = function(){
        return this.number
}

class Temperature extends WeatherData {
    constructor(number,  date, place, type, unit) {
        super(number,  date, place, type, unit)
    }
}
Temperature.prototype.convertToF= function(){
   return this.type*9/5 +32;
}

Temperature.prototype.convertToF= function(){
    return (this.type - 32) * 5/9;
}

class Wind extends WeatherData {
    constructor(date, place, type, unit, number, direction) {
        super(date, place, type, unit, number)
        this.direction = direction;
    }
}

Wind.prototype.direction= function(){
    return this.direction
}

Wind.prototype.convertToMPH= function(){
    return ((this.unit / 1000)/1.6093)*3600
 }
 
Wind.prototype.convertToMS= function(){
    return (((this.unit * 1.6093)*1000)/60)/60
}

class Precipitation extends WeatherData {
    constructor(date, place, type, unit, number, precipitationType) {
        super(date, place, type, unit, number)
        this.precipitationType = precipitationType;
    }
}

Precipitation.prototype.convertToInches= function(){
    return this.unit * 25.4
}

Precipitation.prototype.convertToMM= function(){
    return this.unit / 25.4
}

class CloudCovarage extends WeatherData {
    constructor(date, place, type, unit, number) {
        super(date, place, type, unit, number)
    }
}

class WeatherHistory {
    constructor(weatherDataCollection, place, type, period, unit, number, precipitation){
    this.weatherDataCollection = weatherDataCollection;
    this.place = place;
    this.type = type;
    this.period = period;
    this.unit = unit;
    this.number =  number;
    this.precipitation = Precipitation;
    }
}
WeatherHistory.prototype.getCurrentPlace = function(){
    return this.place;
} 
WeatherHistory.prototype.setCurrentPlace = function(newPlace){
    this.place = newPlace;
} 
WeatherHistory.prototype.clearCurrentPlace = function(){
    this.place = undefined;
} 
WeatherHistory.prototype.getCurrentType = function(){
    return this.type;
}
WeatherHistory.prototype.setCurrentType = function(newWeatherDataType){
    this.type = newWeatherDataType
} 
WeatherHistory.prototype.clearCurrentType = function(){
    this.type = undefined;
}
WeatherHistory.prototype.getCurrentPeriod = function(){
    return this.period
}
WeatherHistory.prototype.setCurrentPeriod = function(newPeriod){
    this.period = newPeriod;
} 
WeatherHistory.prototype.clearCurrentPeriod = function(){
    this.period = undefined;
}
WeatherHistory.prototype.convertToUSUints = function(){
    for(i=0; i <weatherDataCollection.length; i++){
        if(weatherDataCollection[i].unit()==="F")
        {
            newValue = (weatherDataCollection[i].value() - 32) * 5 / 9;
            weatherDataCollection[i].setValue(newValue);
            weatherDataCollection[i].setUnit('C')

        }
        else if (weatherDataCollection[i].unit()==='MPH')
        {
            newValue = (((weatherDataCollection[i].value() * 1.6093) * 1000) / 60) / 60;
            weatherDataCollection[i].setValue(newValue);
            weatherDataCollection[i].setUnit('MS')
        }
        else if(weatherDataCollection[i].unit()==='Inches')
        {
            newValue = weatherDataCollection[i].value() / 25.4;
            weatherDataCollection[i].setValue(newValue);
            weatherDataCollection[i].setUnit('MM')
        } else{
            return undefined
        }
    }
}
WeatherHistory.prototype.convertToUSUnits = () => {
    for(i=0; i<weatherDataCollection.length; i++){
        if(weatherDataCollection[i].unit()==="C")
        {
            newValue = weatherDataCollection[i].value()* 9 / 5 + 32;
            weatherDataCollection[i].setValue(newValue);
            weatherDataCollection[i].setUnit('F')
        }
        else if (weatherDataCollection[i].unit()==='MS')
        {
            newValue = ((weatherDataCollection[i].value()  / 1000) / 1.6093) * 3600;
            weatherDataCollection[i].setValue(newValue);
            weatherDataCollection[i].setUnit('MPH')
        }
        else if(weatherDataCollection[i].unit()==='MM')
        {
            newValue = weatherDataCollection[i].value() * 25.4;
            weatherDataCollection[i].setValue(newValue);
            weatherDataCollection[i].setUnit('Inches')
        }else{
            return undefined
        }
    }
};

class WeatherPrediction extends Events{
    constructor(to, from, weatherDataCollection, date, place, type, unit){
        super(date, place, type, unit)
        this.to=to;
        this.from=from;
        this.weatherDataCollection=weatherDataCollection;
    }
}

WeatherPrediction.prototype = {
    to(){
    this.to = to;},

    from(){
    this.from = from;    
    }

}




let date = new Date(2020, 04, 20)
const eventw = new WeatherEvent(date, 'Århus', 'Sunny', 'C')
const temp = new Temperature(10, date, 'Århus', 'Sunny', 'C')
console.log(eventw.toString())