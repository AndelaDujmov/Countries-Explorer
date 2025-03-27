import { DateTime } from "luxon";

const TextContainer = ({ country }) => {
    // If country is undefined, display a loading message
    if (!country) {
        return <p>Loading country details...</p>;
    }

    return (
        <div className="details-container w-full sm:w-2/3 md:w-1/2 lg:w-1/3 pl-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{country?.name?.official ?? "Unknown"}</h1>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">{country?.name?.common ?? "Unknown"}</h4>
            <hr className="my-2 border-t-2 border-blue-300" />
            
            <p className="text-base sm:text-lg md:text-2xl">
                <strong>Population:</strong> {country?.population?.toLocaleString() ?? "N/A"}
            </p>
            <p className="text-base sm:text-lg md:text-2xl">
                <strong>Region:</strong> {country?.region ?? "N/A"}
            </p>
            <p className="text-base sm:text-lg md:text-2xl">
                <strong>Subregion:</strong> {country?.subregion ?? "N/A"}
            </p>
            <p className="text-base sm:text-lg md:text-2xl">
                <strong>Capital:</strong> {country?.capital?.join(', ') ?? "N/A"}
            </p>
            <p className="text-base sm:text-lg md:text-2xl">
                <strong>Languages:</strong> {country?.languages ? Object.values(country.languages).join(', ') : "N/A"}
            </p>
            <p className="text-base sm:text-lg md:text-2xl">
                <strong>Currencies:</strong> {country?.currencies 
                    ? Object.entries(country.currencies).map(([code, currencyInfo]) =>
                        `${currencyInfo.name} (${currencyInfo.symbol})`
                    ).join(", ")
                    : "N/A"}
            </p>
            <p className="text-base sm:text-lg md:text-2xl">
                <strong>Current Time:</strong> {country?.timezones 
                    ? country.timezones.map(zone => 
                        DateTime.now().setZone(zone).toFormat("dd.MM.yyyy HH:mm")).join(',')
                    : "N/A"}
            </p>
            <p className="text-base sm:text-lg md:text-2xl">
                <strong>Continent:</strong> {country?.continents ? country.continents.join(', ') : "N/A"}
            </p>
            <p className="text-base sm:text-lg md:text-2xl">
                <strong>Start Of The Week:</strong> {country?.startOfWeek ? country.startOfWeek : "N/A"}
            </p>
        </div>
    );
}

export default TextContainer;
