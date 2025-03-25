import { useState } from "react";
import CountryPopover from "../Popover/Popover";
import { Link } from "react-router-dom";

// This component is used to display a single country in the country list table
// It contains the country name, flag, population, and continent
// It also contains a popover with additional information about the country
// The popover is displayed when the user hovers over the card

const Country = ({ country }) => {
    const [anchor, setAnchor] = useState(null);
    
    const handlePopoverOpen = (event) => {
        setAnchor(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchor(null);
    };

    const open = Boolean(anchor);

    return (
        <>
            <tr 
                className='text-1.7xl cursor-pointer' 
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup='true'
                onMouseEnter={handlePopoverOpen}
                onMouseOut={handlePopoverClose}
            >
                <Link to={`/country/${country.cca2}`} style={{display: 'contents'}}>
                    <td className="bg-blue-300 text-black font-serif p-8 rounded-tl-lg rounded-bl-lg">
                        {country.name.official}
                    </td>
                    <td className="bg-blue-300 text-black font-serif p-8">
                        {country.flag}
                    </td>
                    <td className="bg-blue-300 text-black font-serif p-8">
                        {country.population.toLocaleString()}
                    </td>
                    <td className="bg-blue-300 text-black font-serif p-8 rounded-tr-lg rounded-br-lg">
                        {country.continents[0]}
                    </td>
                </Link>
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
