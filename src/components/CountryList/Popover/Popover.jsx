import { Popover, Typography } from "@mui/material";

// This is the CountryPopover component that is displayed when a country is hovered over 

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
