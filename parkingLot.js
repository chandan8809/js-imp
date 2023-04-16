class Vehicle{
    constructor(parkingSpot,licensePlate,spotsNeeded,vehicleSize){
        this.parkingSpot=parkingSpot;
        this.licensePlate=licensePlate;
        this.spotsNeeded=spotsNeeded;
        this.vehicleSize=vehicleSize
    }
    getSpotsNeeded(){
        return this.spotsNeeded;
    }
    getVehicleSize(){
        return this.vehicleSize
    }
    parkVehicle(s){
        this.parkingSpot.push(s)
    }
    clearSpot(){
        console.log("clear spot")
    }
    canFitInSpot(){
        console.log("can fit")
    }
}


class Bus extends Vehicle{
    constructor(){
        this.spotsNeeded=5;
        this.vehicleSize=large;

    }
    canFitInSpot(){
        
    }
}

class Car extends Vehicle{
    constructor(){
        this.spotsNeeded=1;
        this.vehicleSize=compact;

    }
    canFitInSpot(){
        
    }
}

class Motorcycle extends Vehicle{
    constructor(){
        this.spotsNeeded=1;
        this.vehicleSize=small;

    }
    canFitInSpot(){
        
    }
}

class ParkingSpot{
    constructor(){
        this.vehicle=vehicle;
        this.vehicleSize=vehicleSize;
        this.row=row;
        this.spotNumber=spotNumber
        this.level=level;

    }

   isAvailable(){
       console.log("yes")
   }
   canFitInSpot(){

   }
   park(){

   }
   getrow(){
       return row
   }
   getSpotNumber(){
       return spotNumber
   }
}