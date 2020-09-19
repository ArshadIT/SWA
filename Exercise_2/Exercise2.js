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