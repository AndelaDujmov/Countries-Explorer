import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CountryDetails from "../components/CountryDetails/CountryDetails";

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
