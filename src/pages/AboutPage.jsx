import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CountryDetails from "../components/CountryDetails/CountryDetails";

// This component is used to display the details of a specific country
// It uses the useFetch hook to fetch the data for the specific country
// The data is then passed to the CountryDetails component
// The CountryDetails component displays the details of the country
// The code parameter is extracted from the URL using the useParams hook

const AboutPage = () => {
    const { code } = useParams();
    const [data] = useFetch(`https://restcountries.com/v3.1/alpha/${code}`);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <CountryDetails country={data[0]} />
    );
};

export default AboutPage;
