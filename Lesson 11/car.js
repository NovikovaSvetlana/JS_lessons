function Car(data) {
    this._reliability = 5;
    this._iznos = 0;
    this._maxIznos = 100;
    
    var isWorkEngine = false;
    this.startEngine = function() {
        isWorkEngine = true;
        return this;
    }
    this.stopEngine = function() {
        isWorkEngine = false;
        return this;
    }
    this._calcIznos = function() {
        this._iznos = data.engineVolume * data.distance /this._reliability;
        return this._iznos;
    }
    
    this.move = function(m) {
        if(isWorkEngine && this._iznos < this._maxIznos) {
            data.distance += m;
            this._calcIznos();
//            if(this._iznos ==0) {
//            iznos = data.engineVolume * data.distance /reliability;
//            }
//            else {
//               iznos = (data.engineVolume * (data.distance + iznos)) /reliability; 
//            }
            document.write("Total dis: " + data.distance + "<br>");
            document.write(this._iznos + "<br>");
        }
         else {
             document.write("Check Engine" + "<br>");
         }
        return this;
    }
}

function LightCar(data) {
    Car.call(this, data);
    
    this.onLights = function() {
        document.write("Light is on");
    } 
}

function Bus(data) {
    Car.call(this, data);
    
    this.places = data.places;
    var passengers = 1;
    var parentCalcIznos = this._calcIznos;
    this._calcIznos = function() {
        this._iznos = parentCalcIznos.call(this)*passengers;
    }
    this.addPassengers = function(n) {
        if(this.places > passengers) {
            passengers += n;
        }
    }
    
}