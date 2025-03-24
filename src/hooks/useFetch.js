import { useState, useEffect } from "react";

/**
 * 
 * @param {String} url 
 * @returns {Array}
 * 
 * This custom hook is used to separate the fetch logic from the component
 * 
 */

const useFetch = (url) => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error.message))
    }, [url])

    return [countries]
}

export default useFetch