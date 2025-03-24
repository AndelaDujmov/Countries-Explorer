import { useState, useEffect } from "react";
import CountryList from "../components/CountryList/CountryList";
import useFetch from "../hooks/useFetch";
import Header from "../components/CountryList/Header/Header";
import Filter from "../components/CountryList/Filter/Filter";

const HomePage = () => {
    const [data, setData] = useState([]);
    const [continentFilter, setContinentFilter] = useState('All');
    const [rangeFilter, setRangeFilter] = useState();
    const [languageFilter, setLanguageFilter] = useState();
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('name');
   
    console.log(continentFilter)

    useEffect(() => {
        const fetchCountries = async () => {
            const url = continentFilter === 'All'
                ? 'https://restcountries.com/v3.1/all'
                : `https://restcountries.com/v3.1/region/${continentFilter}`;
                
            const response = await fetch(url);
            const countries = await response.json();
            setData(countries);
        };

        fetchCountries();
    }, [continentFilter]);

    return (
        <div className='text-white'>
            <Filter name={continentFilter} setName={setContinentFilter} />
            <table className='w-full border-collapse border-separate border-spacing-y-4 mt-2'>
                <Header sortOrder={sortOrder} setSortOrder={setSortOrder} sortBy={sortBy} setSortBy={setSortBy}/>
                <tbody>
                    <CountryList countries={data} sortBy={sortBy} sortOrder={sortOrder} />
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;
