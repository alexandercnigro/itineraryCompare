export default class Itinerary{

    constructor(flightsArray){
        this.flights = flightsArray || [];
        this.cost = this.calculateCost(this.flights);
    }

    calculateCost(flights){
        return flights ? flights.reduce((acc,curr) => {
            acc += curr.price;
            return acc;
        },0) : 0 ;
    }
}