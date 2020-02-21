export default class InvalidFlightGroupError extends Error{
    constructor(providedFlightGroup){
        throw new Error(`Invalid Flight Group \"${providedFlightGroup}\".`);
    }
}