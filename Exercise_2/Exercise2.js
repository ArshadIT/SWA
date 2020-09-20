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
    return (date >= this.from && date <= this.to)
}

class WeatherData extends WeatherEvent {
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
   return this.number*9/5 +32;
}

Temperature.prototype.convertToC= function(){
    return (this.number - 32) * 5/9;
}

class Wind extends WeatherData {
    constructor(direction, number, date, place, type, unit) {
        super(number, date, place, type, unit)
        this.direction = direction;
    }
}

Wind.prototype.direction= function(){
    return this.direction
}

Wind.prototype.convertToMPH= function(){
    return ((this.number / 1000)/1.6093)*3600
 }
 
Wind.prototype.convertToMS= function(){
    return (((this.number * 1.6093)*1000)/60)/60
}

class Precipitation extends WeatherData {
    constructor(precipitationType, number,  date, place, type, unit) {
        super(number,  date, place, type, unit)
        this.precipitationType = precipitationType;
    }
}

Precipitation.prototype.convertToInches= function(){
    return this.number * 25.4
}

Precipitation.prototype.convertToMM= function(){
    return this.number / 25.4
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
    this.precipitation = precipitation;
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
    for(i=0; i <this.weatherDataCollection.length; i++){
        if(this.weatherDataCollection[i].unit()==="F")
        {
            newValue = (this.weatherDataCollection[i].value() - 32) * 5 / 9;
            this.weatherDataCollection[i].setValue(newValue);
            this.weatherDataCollection[i].setUnit('C')

        }
        else if (weatherDataCollection[i].unit()==='MPH')
        {
            newValue = (((weatherDataCollection[i].value() * 1.6093) * 1000) / 60) / 60;
            this.weatherDataCollection[i].setValue(newValue);
            this.weatherDataCollection[i].setUnit('MS')
        }
        else if(weatherDataCollection[i].unit()==='Inches')
        {
            newValue = weatherDataCollection[i].value() / 25.4;
            this.weatherDataCollection[i].setValue(newValue);
            this.weatherDataCollection[i].setUnit('MM')
        } else{
            return undefined
        }
    }
}
WeatherHistory.prototype.convertToUSUnits = () => {
    for(i=0; i<this.weatherDataCollection.length; i++){
        if(this.weatherDataCollection[i].unit()==="C")
        {
            newValue = this.weatherDataCollection[i].value()* 9 / 5 + 32;
            this.weatherDataCollection[i].setValue(newValue);
            this.weatherDataCollection[i].setUnit('F')
        }
        else if (weatherDataCollection[i].unit()==='MS')
        {
            newValue = ((this.weatherDataCollection[i].value()  / 1000) / 1.6093) * 3600;
            this.weatherDataCollection[i].setValue(newValue);
            this.weatherDataCollection[i].setUnit('MPH')
        }
        else if(this.weatherDataCollection[i].unit()==='MM')
        {
            this.newValue = weatherDataCollection[i].value() * 25.4;
            this.weatherDataCollection[i].setValue(newValue);
            this.weatherDataCollection[i].setUnit('Inches')
        }else{
            return undefined
        }
    }
};

class WeatherPrediction extends WeatherEvent{
    constructor(to, from, place, type, unit){
        super(date, place, type, unit)
        this.to=to;
        this.from=from;
    }
}

WeatherPrediction.prototype.to = function(){
    return this.to;
}

WeatherPrediction.prototype.from = function(){
    return this.from;
}

WeatherPrediction.prototype.matches = function(data){
    return (data.value()>=this.to && data.value()<=this.from 
            && data.type===this.type && data.place===this.place
            && data.unit===this.unit);
}


class TemperaturePrediction extends WeatherPrediction {
    constructor(to, from, place, type, unit) {
        super(to, from, place, type, unit)
    }
}
TemperaturePrediction.prototype.convertToF= function(){
    to=this.to * 9 / 5 + 32;
    from=this.from * 9 / 5 + 32;
    return 'To: ' + to + ' From: ' + from;
}

TemperaturePrediction.prototype.convertToC= function(){
    this.to=(to - 32) * 5 / 9;
    this.from=(from - 32) * 5 / 9;
    return 'To: ' + to + ' From: ' + from;
}

class PrecipitationPrediction extends WeatherPrediction {
    constructor(precipitationTypes, data, to, from, place, type, unit) {
        super(data, to, from, place, type, unit)
        this.precipitationTypes = precipitationTypes;
    }
}

PrecipitationPrediction.prototype.types = function(){
    return this.precipitationTypes;
}


PrecipitationPrediction.prototype.matches = function(data){
    return (data.value()>=this.to && data.value()<=this.from 
            && data.type===this.type && data.place===this.place
            && data.unit===this.unit);
}

PrecipitationPrediction.prototype.convertToInches= function(){
    to=this.to * 25.4;
    from=this.from * 25.4;
    return 'To: ' + to + ' From: ' + from;
}

Precipitation.prototype.convertToMM= function(){
    to=this.to / 25.4;
    from=this.from / 25.4;
    return 'To: ' + to + ' From: ' + from;
}

class WindPrediction extends WeatherPrediction {
    constructor(directions, to, from, place, type, unit) {
        super(to, from, place, type, unit)
        this.directions = directions;
    }
}

WindPrediction.prototype.direction= function(){
    return this.directions
}

WindPrediction.prototype.matches = function(data){
    return (data.value()>=this.to && data.value()<=this.from 
            && data.type===this.type && data.place===this.place
            && data.unit===this.unit);
}

WindPrediction.prototype.convertToMPH= function(){
    to=((this.to / 1000) / 1.6093) * 3600;
    from=((this.to / 1000) / 1.6093) * 3600;
    return 'To: ' + to + ' From: ' + from;
 }
 
WindPrediction.prototype.convertToMS= function(){
    to=(((this.to * 1.6093) * 1000) / 60) / 60;
    from=((this.from / 1000) / 1.6093) * 3600;
    return 'To: ' + to + ' From: ' + from;
}

class CloudCovaragePrediction extends WeatherPrediction {
    constructor(to, from, place, type, unit) {
        super(to, from, place, type, unit)
    }
}

CloudCovaragePrediction.prototype.matches = function(data){
    return (data.value()>=this.to && data.value()<=this.from 
            && data.type===this.type && data.place===this.place
            && data.unit===this.unit);
}

class WeatherForecast {
    constructor(weatherDataCollection, place, type, period, unit, number, precipitation){
    this.weatherDataCollection = weatherDataCollection;
    this.place = place;
    this.type = type;
    this.period = period;
    this.unit = unit;
    this.number =  number;
    this.precipitation = precipitation;
    }
}
WeatherForecast.prototype.getCurrentPlace = function(){
    return this.place;
} 
WeatherForecast.prototype.setCurrentPlace = function(newPlace){
    this.place = newPlace;
} 
WeatherForecast.prototype.clearCurrentPlace = function(){
    this.place = undefined;
} 
WeatherForecast.prototype.getCurrentType = function(){
    return this.type;
}
WeatherForecast.prototype.setCurrentType = function(newWeatherDataType){
    this.type = newWeatherDataType
} 
WeatherForecast.prototype.clearCurrentType = function(){
    this.type = undefined;
}
WeatherForecast.prototype.getCurrentPeriod = function(){
    return this.period
}
WeatherForecast.prototype.setCurrentPeriod = function(newPeriod){
    this.period = newPeriod;
} 
WeatherForecast.prototype.clearCurrentPeriod = function(){
    this.period = undefined;
}
WeatherForecast.prototype.convertToUSUints = function(){
    for(i=0; i<weatherDataCollection.length; i++){
        if(weatherDataCollection[i].unit()==="C")
        {
            newTo = weatherDataCollection[i].to()* 9 / 5 + 32;
            newFrom = weatherDataCollection[i].from()* 9 / 5 + 32;
            weatherDataCollection[i].setTo(newTo);
            weatherDataCollection[i].setFrom(newFrom);
            weatherDataCollection[i].setUnit('F')
        } 
        else if (weatherDataCollection[i].unit()==='MS')
        { 
            newTo = ((weatherDataCollection[i].to()  / 1000) / 1.6093) * 3600;
            newFrom = ((weatherDataCollection[i].from()  / 1000) / 1.6093) * 3600;
            weatherDataCollection[i].setTo(newTo);
            weatherDataCollection[i].setFrom(newFrom);
            weatherDataCollection[i].setUnit('MPH')
        }
        else if(weatherDataCollection[i].unit()==='MM')
        {
            newTo = weatherDataCollection[i].to() * 25.4;
            newFrom = weatherDataCollection[i].from() * 25.4;
            weatherDataCollection[i].setTo(newTo);
            weatherDataCollection[i].setFrom(newFrom);
            weatherDataCollection[i].setUnit('Inches')
        }else{
            return 'Undefined unit'
        }
    }
}
WeatherForecast.prototype.convertToUSUnits = () => {
    for(i=0; i <weatherDataCollection.length; i++){
        if(weatherDataCollection[i].unit()==="F")
        {
            newTo = (weatherDataCollection[i].to() - 32) * 5 / 9;
            newFrom = (weatherDataCollection[i].from() - 32) * 5 / 9;
            weatherDataCollection[i].setTo(newTo);
            weatherDataCollection[i].setFrom(newFrom);
            weatherDataCollection[i].setUnit('C')

        }
        else if (weatherDataCollection[i].unit()==='MPH')
        {
            newTo = (((weatherDataCollection[i].to() * 1.6093) * 1000) / 60) / 60;
            newFrom = (((weatherDataCollection[i].from() * 1.6093) * 1000) / 60) / 60;
            weatherDataCollection[i].setTo(newTo);
            weatherDataCollection[i].setFrom(newFrom);
            weatherDataCollection[i].setUnit('MS')
        }
        else if(weatherDataCollection[i].unit()==='Inches')
        {
            newTo = weatherDataCollection[i].to() / 25.4;
            newFrom = weatherDataCollection[i].from() / 25.4;
            weatherDataCollection[i].setTo(newTo);
            weatherDataCollection[i].setFrom(newFrom);
            weatherDataCollection[i].setUnit('MM')
        } else{
            return 'Undefined unit'
        }
    }
};


// const eventw = new WeatherEvent(date, 'Århus', 'Sunny', 'C')
// const temp = new Temperature(10, date, 'Århus', 'Sunny', 'C')
// console.log(temp.unit, temp.value())

//dateInterval test

let date = new Date(2020, 04, 20)
let dateFrom = new Date(2019, 04, 16);
let dateTo = new Date();
const dint = new DateInterval(dateFrom, dateTo)
console.log(dint.contains(date))

// // temperature test
// const temp = new Temperature(10, date, 'Århus', 'Sunny', 'C')
// console.log(temp.convertToF(), temp.value())

// const data1 = new WeatherData(1, date, 'Århus', 'Sunny', 'C')

// const tempPred = new TemperaturePrediction(4, 10, 'Århus', 'Sunny', 'C');
// console.log(tempPred.matches(data1))
// console.log(tempPred.convertToF(), tempPred.to, tempPred.from)

// precipitation test
// const pre = new Precipitation('High',100, date, 'Århus', 'Rain', 'MM')
// console.log(pre.convertToInches(), pre.value())

// const data1 = new WeatherData(90, date, 'Århus', 'Sunny', 'C')

// const prePred = new PrecipitationPrediction('High', 90, 120,'Århus', 'Rain', 'MM')
// console.log(prePred.matches(data1))
// console.log(prePred.convertToInches(), prePred.to, prePred.from)

// // wind test
// const wind = new Wind('east', 26, date, 'Århus', 'Rain', 'MS')
// console.log(wind.convertToMPH(), wind.value())

// const data1 = new WeatherData(23, date, 'Århus', 'Sunny', 'C')

// const windPred = new WindPrediction('east',26, 29, 'Århus', 'Rain', 'MS')
// console.log(windPred.matches(data1))
// console.log(windPred.convertToMPH(), windPred.to, windPred.from)

// // cloud covarage test
// const cloud = new CloudCovarage(0.68 , date , 'Århus', 'Sunny', 'Clouds');
// console.log(cloud.value())

// const data1 = new WeatherData(23, date, 'Århus', 'Sunny', 'C')
// const cloudPred = new CloudCovaragePrediction(0.68 , 0.72, 'Århus', 'Sunny', 'Clouds');
// console.log(cloudPred.to, cloudPred.from, cloudPred.matches(data1))



// // weather history test
// const data1 = new WeatherData(23, date, 'Århus', 'Sunny', 'C')
// const data2 = new WeatherData(60, date, 'Horsens', 'Rain', 'C')
// const data3 = new WeatherData(10, date, 'Viborg', 'Cloudy', 'MM')

// var dataCollection = [data1, data2, data3];

// const his = new WeatherHistory(dataCollection)
// // his.add(new WeatherData(12, date, his.setCurrentPlace('Århus'), his.setCurrentType('Sunny'), 'MS'))
// // his.add(new WeatherData(12, date, his.setCurrentPlace('Århus'), his.setCurrentType('Sunny'), 'MM'))
// his.convertToUSUnits()
// his.data()

// // weather forcast test
// const forecast1 = WeatherPrediction(data1, 29, 33, 'Århus', 'Sunny', 'C')
// const forecast2 = WeatherPrediction(data2, 10, 15, 'Horsens', 'Rain', 'C')
// const forecast3 = WeatherPrediction(data3, 12, 17, 'Viborg', 'Cloudy', 'MM')

// var forecastCollection = [forecast1, forecast2, forecast3];

// const forecast = new WeatherForecast(forecastCollection)
// forecast.add(WeatherPrediction(data3, -4, 3, 'Viborg', 'Snow', 'MM'))
// forecast.convertToUSUnits()
// forecast.data()
