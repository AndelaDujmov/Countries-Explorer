import { useState, useEffect } from "react";

/**
 * Custom hook for fetching data from a given URL.
 * 
 * This hook fetches data from a provided `url` and returns an array containing:
 * 1. The fetched data (countries in this case).
 * 2. A function to update the `countries` state directly.
 * 3. Any error message encountered during the fetch operation.
 * 
 * It uses the `useState` hook to manage the `countries` and `error` states, and the `useEffect` hook to trigger the 
 * data fetching process whenever the `url` changes.
 * If the fetch is successful, the data is stored in the `countries` state; if an error occurs, the `error` state 
 * is updated with the error message.
 * 
 * @param {string} url - The URL from which to fetch the data.
 * 
 * @returns {Array} An array with the following items:
 * - `countries`: The fetched data (an array).
 * - `setCountries`: A function to manually update the `countries` state.
 * - `error`: An error message if the fetch fails.
 * 
 * @example
 * const [countries, setCountries, error] = useFetch('https://api.example.com/countries');
 */

const useFetch = (url) => {

    const [countries, setCountries] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status} - ${response.statusText}`)
                }
                return response.json()
            })
            .then(data => {
                console.log("Primljeno")
                console.log(data)
                setCountries(data)
                setError(null)
            })
            .catch(error => {
                setError(error.message)
                setCountries([])
            })
    }, [url])

    return [countries, setCountries, error]
}

export default useFetch