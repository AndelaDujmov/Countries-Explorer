import { useState, useEffect } from "react";
import CountryList from "../components/CountryList/CountryList";
import useFetch from "../hooks/useFetch";
import Header from "../components/CountryList/Header/Header";
import Filter from "../components/CountryList/Filter/Filter";
import processData from "../utils/processData";
import populationRanges from "../utils/populationRanges";
import { useNavigate } from "react-router-dom";

/**
 * HomePage component is the main page of the application that displays a list of countries.
 * 
 * It contains filters for continents, languages, and population ranges, which are used to filter the countries displayed in the list.
 * It also fetches country data using the `useFetch` hook and passes it to the `CountryList` component to display.
 * 
 * The page includes sorting functionality, and the data is sorted and filtered based on the selected filter values.
 * The `Header` component is used to display the column headers in the country list table.
 *
 * @param {string} searchQuery - The search query used to filter the country names.
 * 
 * @example
 * return (
 *   <HomePage searchQuery="india" />
 * );
 */

const HomePage = ({ searchQuery }) => {
    const [url, setUrl] = useState('https://restcountries.com/v3.1/all')
    const [data, setData, error] = useFetch(url);
    const navigate = useNavigate()

    if (error)
        navigate('/badRequest')

    // populationRanges  consists of two elements, first one is an array of objects that represents value for population
    // ranges, while the second is the function that 
    // Function that fetches population statistics to array 
    const fetchRanges = populationRanges[1]
    const ranges = fetchRanges()

    const [continentValues] = useFetch('https://restcountries.com/v3.1/all?fields=continents')
    const [languageValues] = useFetch('https://restcountries.com/v3.1/all?fields=languages')
    const [continentFilter, setContinentFilter] = useState('All')
    const [rangeFilter, setRangeFilter] = useState(ranges[0])
    const [languageFilter, setLanguageFilter] = useState('All')

    const [sortOrder, setSortOrder] = useState('asc')
    const [sortBy, setSortBy] = useState('name')
   

    useEffect(() => {
        
        setUrl(languageFilter === 'All'
            ? 'https://restcountries.com/v3.1/all'
            : `https://restcountries.com/v3.1/lang/${languageFilter}`)
      
    }, [languageFilter]);


    return (
        <div className='text-white'>
            <div className='flex items-center gap-4'>
                <Filter name={continentFilter} setName={setContinentFilter} valueSet={processData(continentValues)} label={"Continents"} startValue={"All"} />
           
                <Filter name={languageFilter} setName={setLanguageFilter} valueSet={processData(languageValues)} label={"Languages"} startValue={"All"} />

                <Filter name={rangeFilter} setName={setRangeFilter} valueSet={fetchRanges()} label={"Population"} startValue={ranges[0]} />
            </div>
            
            <table className='w-full border-collapse border-separate border-spacing-y-4 mt-2'>
                <Header sortOrder={sortOrder} setSortOrder={setSortOrder} sortBy={sortBy} setSortBy={setSortBy}/>
                <tbody>
                    {
                        error ? <tr><td colSpan='5' className='text-center'>{error}</td></tr> :  <CountryList countries={data} setCountries={setData} sortBy={sortBy} sortOrder={sortOrder} continentFilter={continentFilter} rangeFilter={rangeFilter} searchQuery={searchQuery} />
                    }
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;
