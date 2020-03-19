import InvalidHopNumberError from "./InvalidHopNumberError";
import exists from '../utils/checkExists';
import getId from '../utils/idCreator';
export default class Flight {
    constructor(flightInfoObject, maxHopNum) {
        this.dateLeaving = flightInfoObject["dateLeaving"];
        this.start = flightInfoObject["start"];
        this.destination = flightInfoObject["destination"];
        this.departureTime = flightInfoObject["departureTime"];
        this.arrivalTime = flightInfoObject["arrivalTime"];
        this.duration = flightInfoObject["duration"];
        this.price = flightInfoObject["pricePerPerson"];
        this.airline = flightInfoObject["airline"];
        this.notes = flightInfoObject["notes"];
        this.hopNumber = parseInt(flightInfoObject["hopNumber"]);
        
        if (exists(maxHopNum) && (this.hopNumber > maxHopNum || this.hopNumber < 1)){
            throw new InvalidHopNumberError(this.hopNumber, maxHopNum);
        }  

        this.id = getId();
    }
}