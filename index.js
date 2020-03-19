import readline from 'readline';
import csvConvertToJson from './utils/convertCSVToObject';
import Flight from './classes/Flight';
import Itinerary from './classes/Itinerary';
import sanitizeColNames from './utils/sanitizeColumnNames';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let flights = new Promise((resolve,reject) => {
    rl.question('Provide a path to a csv file: ', async (filepath) => {
        let jsonArray = await csvConvertToJson(filepath);
        rl.pause();
        resolve(jsonArray);
    });
}).then(jsonArray => {
    let totalHops = 0;
    rl.resume();
    rl.question('How many hops in your itinerary? ', (maxHopNum) => {
        let totalHops = maxHopNum;
        
        //flightArrays will be an array of arrays, with flights sorted by hop number. All hop 1 flights
        //will be in index 0, hop 2 flights at index 1, etc
        let flightArrays = new Array(parseInt(totalHops));
        flightArrays.fill([])
        let itinArray = [];
        
        jsonArray.forEach(json => {
            //sanitize json keys to work with Flight class
            let sanitizedJson = {}
            Object.keys(json).map(colName => sanitizedJson[sanitizeColNames(colName)] = json[colName]);
            
            //convert json into Flight object
            let flight = new Flight(sanitizedJson, totalHops);            
            flightArrays[flight.hopNumber-1].push(flight);
        });
        rl.close();

        let itins = calculateItineraries(flightArrays);
        console.log('itins: ',itins);
        console.log('flightARrays: ',flightArrays);
        return flightArrays;
    });
});

let calculateItineraries = flightsArrays => {
    let allItins = [];
    let {maxLength, indexOfMaxLength} = getMaxLengthAndIndexOfInnerArrays(flightsArrays);
    let loopIndeces = new Array(flightsArrays.length).fill(0);

    //refactor this to use dynamic programming for more efficiency
    //Big O = O(i * n sub i)
    for(let i = 0; i < flightsArrays.length; i++){ //loops through flight arrays
        let flightArrayByHopNum = flightsArrays[i];
        
        for(let j = 0, k=0, l=0; j < flightArrayByHopNum; j++){
            flight = flightArrayByHopNum[j];
        }
    }

    let itin = new Itinerary()
    return allItins;
}

let getMaxLengthAndIndexOfInnerArrays = arrofArrs => {
    let maxLength = 0;
    let indexOfMaxLength = 0;
    arrofArrs.map((innerArr, index) => {
        if (innerArr.length > maxLength){
            maxLength = innerArr.length;
            indexOfMaxLength = index;
        }
    })
    return {maxLength, indexOfMaxLength};
}