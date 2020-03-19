export default class InvalidHopNumberError extends Error{
    constructor(providedHopNumber, maxHops){
        throw new Error(`Invalid Hop Number \"${providedHopNumber}\" provided.
        Maximum Hop Number allowed is ${maxHops}.`);
    }
}