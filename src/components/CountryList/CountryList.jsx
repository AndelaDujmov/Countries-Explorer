import useFetch from "../../hooks/useFetch"
import Country from "./Country/Country"

const CountryList = () => {
    const [data] = useFetch("https://restcountries.com/v3.1/all")

    return(
        <div>
            <h1>Country List</h1>
            <ul>
                {data.map(country => (
                    <li><Country country={country} /></li>
                ))}
            </ul>
        </div>
    )
}

export default CountryList