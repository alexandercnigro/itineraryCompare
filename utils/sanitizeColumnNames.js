//remove spaces and make camelCase

export default function(colName){
    return colName.toLowerCase().split(' ').reduce((acc,currWord, index) => {
        if (index === 0) acc += currWord;
        else acc += currWord.replace(currWord.charAt(0), currWord.charAt(0).toUpperCase());
        return acc;
    },"");
}