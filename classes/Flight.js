import flightGroups from '../utils/flightGroups';
import InvalidFlightGroupError from './InvalidFlightGroupError';

export default class Flight {
    constructor(flightInfoObject) {
        this.departureTime = flightInfoObject["departureTime"];
        this.arrivalTime = flightInfoObject["arrivalTime"];
        this.duration = flightInfoObject["duration"];
        this.cost = flightInfoObject["cost"];
        this.airline = flightInfoObject["airline"];
        this.notes = flightInfoObject["notes"];
        this.flightGroup = flightInfoObject["flightGroup"];
        if (!(this.isValidFlightGroup())) throw new InvalidFlightGroupError(this.flightGroup);
    }

    isValidFlightGroup(){
        let result = false;
        Object.values(flightGroups).forEach(group => {
            if (this.flightGroup === group) result=true;
        })
        return result;
    }
}