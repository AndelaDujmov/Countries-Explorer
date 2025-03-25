import { useState, useEffect } from "react";

// This is a custom hook that fetches data from the given URL
// It returns the data and an error message if there is an error
// The data is fetched using the fetch API
// If the response is not ok, an error is thrown
// If there is an error, the error message is set
// If there is no error, the data is set
// The data is returned as an array along with the error message
// The URL is passed as an argument to the hook

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
                console.log(data)
                setCountries(data)
                setError(null)
            })
            .catch(error => {
                setError(error.message)
                setCountries([])
            })
    }, [url])

    return [countries, error]
}

export default useFetch