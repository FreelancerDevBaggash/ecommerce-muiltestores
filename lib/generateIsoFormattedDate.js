export function generateIsoFormattedDate(normalDate){
    //Convert the date string to a javascript Date
const dateObject = new Date(normalDate);

//Format the date as a string in ISO 8601 format
const iosFormattedDate = dateObject.toISOString();

return iosFormattedDate;
}