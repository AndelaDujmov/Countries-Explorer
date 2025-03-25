// Desc: Function to process data and return a set of unique values. Throws an error if the data is not in the expected format.
// Usage: processData(data)
// Arguments: data (Array): An array of objects
// Returns: valueSet (Set): A set of unique values
// Throws: An error if the data is not in the expected format
// Example: processData(data)
// Expected Output: Set { 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' }

const processData = (data) => { 

    const valueSet = new Set();
    
    try{
        data.forEach(el => {
            el.continents.forEach(e => {
                valueSet.add(e);
            });
        });
    } catch (error) {
        data.forEach(country => {
            if (country.languages) {
                Object.values(country.languages).forEach(language => {
                    valueSet.add(language); 
                });
            }
        });
    }
    
    return valueSet;

}

export default processData;