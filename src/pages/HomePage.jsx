import { useState, useEffect } from "react";
import CountryList from "../components/CountryList/CountryList";
import useFetch from "../hooks/useFetch";
import Header from "../components/CountryList/Header/Header";
import Filter from "../components/CountryList/Filter/Filter";

// This is the main page of the application
// It contains the filters and the country list
// It also contains the logic for fetching data from the API
// The data is fetched using the useFetch hook
// The data is then passed to the CountryList component
// The filters are passed to the Filter component
// The Header component is used to display the column headers
// The data is sorted and filtered based on the filter values

const HomePage = () => {
    const [url, setUrl] = useState('https://restcountries.com/v3.1/all')
    const [data, setData, error] = useFetch(url);
    const [continentFilter, setContinentFilter] = useState('All')
    const [rangeFilter, setRangeFilter] = useState('All')
    const [languageFilter, setLanguageFilter] = useState('All')
    const [sortOrder, setSortOrder] = useState('asc')
    const [sortBy, setSortBy] = useState('name')
   
    console.log(data)

    useEffect(() => {
        
        setUrl(languageFilter === 'All'
            ? 'https://restcountries.com/v3.1/all'
            : `https://restcountries.com/v3.1/lang/${languageFilter}`)

        console.log(continentFilter)
      
    }, [languageFilter]);

    console.log(continentFilter)

    return (
        <div className='text-white'>
            <Filter name={continentFilter} setName={setContinentFilter} url={`https://restcountries.com/v3.1/all?fields=continents`} />
           
            <Filter name={languageFilter} setName={setLanguageFilter} url={`https://restcountries.com/v3.1/all?fields=languages`} />
            
            <table className='w-full border-collapse border-separate border-spacing-y-4 mt-2'>
                <Header sortOrder={sortOrder} setSortOrder={setSortOrder} sortBy={sortBy} setSortBy={setSortBy}/>
                <tbody>
                    {
                        error ? <tr><td colSpan='5' className='text-center'>{error}</td></tr> :  <CountryList countries={data} setCountries={setData} sortBy={sortBy} sortOrder={sortOrder} continentFilter={continentFilter} rangeFilter={rangeFilter} />
                    }
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;
