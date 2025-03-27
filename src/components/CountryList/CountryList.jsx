import Country from "./Country/Country"
import populationRanges from "../../utils/populationRanges"

/**
 * CountryList Component
 * 
 * This component receives a list of countries and applies sorting and filtering
 * based on user-selected criteria such as name, population, area, continent, and search queries.
 * It then renders a list of `Country` components.
 * 
 * @param {Object[]} countries - Array of country objects.
 * @param {string} sortOrder - Sorting order: "asc" for ascending, "desc" for descending.
 * @param {string} sortBy - Property to sort by: "name", "population", or "area".
 * @param {string} continentFilter - Selected continent for filtering ("All" for no filter).
 * @param {string} rangeFilter - Selected population range label.
 * @param {string} searchQuery - User's search input for filtering country names.
 * 
 * @returns {JSX.Element} - A list of `Country` components that match the applied filters.
 * 
 * @example
 * <CountryList 
 *   countries={data} 
 *   sortOrder="asc" 
 *   sortBy="name" 
 *   continentFilter="Asia" 
 *   rangeFilter="1M-10M" 
 *   searchQuery="India" 
 * />
 */

const CountryList = ({ countries, sortOrder, sortBy, continentFilter, rangeFilter, searchQuery }) => {

    const rangeList = populationRanges[0]

    // Sorting logic
    let sortedCountries = countries.sort((a, b) => {
        if (sortBy === 'name') {
            return sortOrder === 'asc' ?
                a.name.official.localeCompare(b.name.official) :
                b.name.official.localeCompare(a.name.official)
        } if (sortBy === 'population') {
            return sortOrder === 'asc' ?
                a.population - b.population :
                b.population - a.population
        }
          if (sortBy === 'area') {
            return sortOrder === 'asc' ?
                a.population - b.population :
                b.population - a.population
        } 
    })

    // Filtering logic
    const range = rangeList.find(el => el.label === rangeFilter) || rangeList[0]
    
    const filteredCountries = sortedCountries
        .filter(country => continentFilter === "All" || country.continents.includes(continentFilter))
        .filter(country => country.population >= range.min && country.population <= range.max)
        .filter(country => 
            !searchQuery || country.name.official.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <>
            {filteredCountries.map((element, index) => (
                <Country key={index} country={element} />
            ))}
        </>
        ) 
    
}

export default CountryList