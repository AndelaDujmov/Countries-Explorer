import { useState } from "react";
import CountryPopover from "../Popover/Popover";
import { useNavigate } from "react-router-dom";

/**
 * Country Component
 * 
 * This component represents a single country in the country list table.
 * It displays the country's name, flag, population, area, and continent.
 * 
 * - A popover appears when the user hovers over the country row, showing additional information.
 * - Clicking on the row navigates to the country's detailed page.
 * 
 * @param {Object} country - The country data object.
 * 
 * @returns {JSX.Element} - A table row (`<tr>`) representing a country.
 * 
 * @example
 * <Country country={someCountryData} />
 */

const Country = ({ country }) => {
    const [anchor, setAnchor] = useState(null);
    const navigate = useNavigate();
    
    const handlePopoverOpen = (event) => {
        setAnchor(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchor(null);
    };

    const handleOnClick = () => {
        navigate(`/country/${country.ccn3}`);
    }

    const open = Boolean(anchor);

    return (
        <>
            <tr 
                className="text-sm sm:text-lg md:text-xl lg:text-2xl cursor-pointer w-full" 
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseOut={handlePopoverClose}
                onClick={handleOnClick}
            >
                <td className="bg-blue-300 text-black font-serif p-2 sm:p-4 md:p-6 lg:p-8 rounded-tl-lg rounded-bl-lg w-full sm:w-auto">
                    {country.flag}
                </td>
                <td className="bg-blue-300 text-black font-serif p-2 sm:p-4 md:p-6 lg:p-8 w-full sm:w-auto">
                    {country.name.official}
                </td>
                <td className="bg-blue-300 text-black font-serif p-2 sm:p-4 md:p-6 lg:p-8 w-full sm:w-auto">
                    {country.population.toLocaleString()}
                </td>
                <td className="bg-blue-300 text-black font-serif p-2 sm:p-4 md:p-6 lg:p-8 w-full sm:w-auto">
                    {country.area.toLocaleString()} m&sup2;
                </td>
                <td className="bg-blue-300 text-black font-serif p-2 sm:p-4 md:p-6 lg:p-8 rounded-tr-lg rounded-br-lg w-full sm:w-auto">
                    {country.continents.join(", ")}
                </td>
            </tr>
            <CountryPopover 
                anchor={anchor} 
                open={open} 
                handlePopoverClose={handlePopoverClose} 
                country={country} 
            />
        </>
    );
}

export default Country;
