import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CountryDetails from "../components/CountryDetails/CountryDetails";

/**
 * AboutPage component displays the details of a specific country.
 * 
 * This component uses the `useParams` hook to extract the country code from the URL and fetches the country data using the `useFetch` hook.
 * The fetched data is then passed to the `CountryDetails` component to display the details of the selected country.
 * 
 * @example
 * return (
 *   <AboutPage />
 * );
 */

const AboutPage = () => {
    const { code } = useParams();
    const [data, setData, error] = useFetch(`https://restcountries.com/v3.1/alpha/${code}`);

    if (!data || data.length === 0) {  
        return <div>Loading...</div>;
    }

  
    return (
       <>
            {
                error ? <div>{error}</div> : <CountryDetails country={data[0]} />
            }
       </>
    );
};

export default AboutPage;
