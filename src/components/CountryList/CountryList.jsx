import Country from "./Country/Country"

// This component will receive a list of countries and will render a list of Country components. 
// The countries will be sorted based on the sortOrder and sortBy properties.
// The sortOrder property will determine whether the countries should be sorted in ascending or descending order.
// The sortBy property will determine the property by which the countries should be sorted (name, population, or continent).
// The sorted countries will be mapped to Country components and rendered on the page.
// The Country component will receive the country data as a prop and will render the country details.

const CountryList = ({ countries, sortOrder, sortBy }) => {

    const sortedCountries = countries.sort((a, b) => {
        if (sortBy === 'name') {
            return sortOrder === 'asc' ?
                a.name.official.localeCompare(b.name.official) :
                b.name.official.localeCompare(a.name.official)
        } else if (sortBy === 'population') {
            return sortOrder === 'asc' ?
                a.population - b.population :
                b.population - a.population
        } else {
            return sortOrder === 'asc' ?
            a.continents[0].localeCompare(b.continents[0]) :
            b.continents[0].localeCompare(a.continents[0])
        }
    })


    return (
        <>
            {
                sortedCountries.map((element, index) => (            
                    <Country key={index} country={element}/>
                ))
            }
        </>  
    )
}

export default CountryList