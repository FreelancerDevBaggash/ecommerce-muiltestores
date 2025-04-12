export function convertIsoDateToNormal(isoDate) {
    // Convert the ISO 8601 string to a JavaScript Date object
    const dateObject = new Date(isoDate);

    // Check if the dateObject is valid
    if (isNaN(dateObject)) {
        return 'Invalid Date';
    }

    // Extract date parts (day, month, year)
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = dateObject.getFullYear();

    // Format as "DD/MM/YYYY"
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
}
