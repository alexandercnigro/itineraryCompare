import csv from 'csvtojson';

export default async function(csvFilePath){ 
    let json = await csv().fromFile(csvFilePath);
    return json;
}