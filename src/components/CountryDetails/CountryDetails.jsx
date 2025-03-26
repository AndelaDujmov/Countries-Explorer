import { useNavigate } from "react-router-dom";

// This component is used to display the details of a specific country
// It receives the country data as a prop and displays the country details
// It also contains a button to navigate back to the main menu
// The country details include the country name, flag, population, region, subregion, capital, languages, and currencies
// The data is displayed in a two-column layout with the flag on the left and the details on the right
// The languages and currencies are displayed as comma-separated lists
// The component uses the useNavigate hook to navigate back to the main menu when the button is clicked

const CountryDetails = ({ country }) => {
    const navigate = useNavigate();

    if (!country) {
        return <h1>Not Found</h1>;
    }

    return (
        <div className="country-details-container flex flex-col p-4">
            <button 
                onClick={() => navigate(-1)} 
                className="flex items-center mb-4 text-blue-500 hover:text-blue-700 p-2"
            >
                <span className="text-2xl mr-2">←</span>
                <span>Back to Main Menu</span>
            </button>
            <div className="flex">
                <div className="image-container w-1/3">
                    <img 
                        src={country.flags.svg} 
                        alt={`Flag of ${country.name.official}`} 
                        className="w-full h-auto rounded-lg shadow-lg" 
                    />
                </div>
                <div className="details-container w-2/3 pl-4">
                    <h1 className="text-2xl font-bold">{country.name.official}</h1>
                    <hr className="my-2 border-t-2 border-blue-300" /> 
                    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                    <p><strong>Region:</strong> {country.region}</p>
                    <p><strong>Subregion:</strong> {country.subregion}</p>
                    <p><strong>Capital:</strong> {country.capital}</p>
                    <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
                    <p><strong>Currencies:</strong> {Object.values(country.currencies).map(curr => curr.name).join(', ')}</p>
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;
