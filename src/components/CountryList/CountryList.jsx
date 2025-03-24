import Country from "./Country/Country"

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