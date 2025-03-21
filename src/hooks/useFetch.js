import { useState, useEffect } from "react";

/**
 * 
 * @param {String} url 
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
            .then(error => console.log(error))
    }, [url])

    return [countries]
}

export default useFetch