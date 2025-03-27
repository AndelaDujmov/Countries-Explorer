import BackButton from "./BackButton/BackButton";
import ImageContainer from "./ImageContainer/ImageContainer";
import TextContainer from "./TextContainer/TextContainer";

/**
 * CountryDetails Component
 * 
 * This component is used to display detailed information about a specific country.
 * 
 * The component uses a two-column layout: 
 * - The flag is displayed on the left.
 * - The country details are displayed on the right.
 * 
 * Additionally, a back button is provided that allows the user to navigate to the previous page.
 * The component uses `useNavigate` from React Router to handle the navigation.
 * 
 * @param {Object} country - The country object containing the country details.
 * 
 * @returns {JSX.Element} - The rendered country details.
 * 
 * @example
 * <CountryDetails country={someCountryData} />
 */

const CountryDetails = ({ country }) => {

    if (!country) {
        return <h1>Not Found</h1>;
    }

    return (
        <div className="country-details-container flex flex-col p-4">
            <BackButton />
            
            <div className="flex">
                <ImageContainer pathname={country.flags.svg} description={country.name.official} />

                <TextContainer country={country} />
            </div>
        </div>
    );
}

export default CountryDetails;
