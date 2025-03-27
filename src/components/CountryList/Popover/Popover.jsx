import { Popover, Typography } from "@mui/material";

/**
 * CountryPopover Component
 * 
 * This component displays a popover with detailed information about a country when hovered over.
 * It includes details such as currency, capital, language, and independence status.
 * 
 * @param {boolean} open - Controls whether the popover is open or closed.
 * @param {HTMLElement} anchor - The anchor element for positioning the popover.
 * @param {Function} handlePopoverClose - Function to close the popover.
 * @param {Object} country - Country data object containing various details.
 * 
 * @returns {JSX.Element} - A popover component displaying country information.
 * 
 * @example
 * <CountryPopover 
 *   open={true} 
 *   anchor={anchorEl} 
 *   handlePopoverClose={closePopover} 
 *   country={selectedCountry} 
 * />
 */

const CountryPopover = ({ open, anchor, handlePopoverClose, country }) => {
    const properties = Object.entries(country);
    
    const joinArrayOrFallback = (arr, fallback = "No data available") => {
        if (!arr) return fallback;
        return Array.isArray(arr) ? arr.join(", ") : arr;
    };

    return(
        <Popover
            id="mouse-over-popover"
            sx={{ pointerEvents: 'none' }}
            open={open}
            anchorEl={anchor}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
        >
            <Typography sx={{ p: 3 }}>
                <div>
                    <div>
                        <strong>Currency: </strong>
                        {country.currencies
                            ? Object.entries(country.currencies).map(([code, currencyInfo]) =>
                                `${currencyInfo.name} (${currencyInfo.symbol})`
                            ).join(", ")
                            : "No currencies available"}
                    </div>
                    <div>
                        <strong>Capital: </strong>
                        {joinArrayOrFallback(country.capital)}
                    </div>
                    <div>
                        <strong>Language: </strong>
                        {country.languages
                            ? Object.entries(country.languages).map(([language]) =>
                                `${country.languages[language]} `
                            ).join(", ")
                            : "No languages available"}
                    </div>
                    <div>
                        <strong>{country.independent ? "Independent" : "Not Independent"}</strong>
                    </div>
                </div>
            </Typography>
        </Popover>
    );
};

export default CountryPopover;
