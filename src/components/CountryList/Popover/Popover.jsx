import { Popover, Typography } from "@mui/material";

const CountryPopover = ({ open, anchor, handlePopoverClose, country }) => {
    const properties = Object.entries(country)
    

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
        <Typography sx={{ p: 5 }}>
            {
                <div>
                    <div>
                        Currency: {country.currencies ?
                                    Object.entries(country.currencies).map(([code, currencyInfo]) => (
                                        `${currencyInfo.name} (${currencyInfo.symbol})` 
                                    )):
                                    "No currencies available"}
        
                    </div>
                     <div>
                        Capital: {country.capital && country.capital.length > 0 ?
                                country.capital.join(', ') :
                                "No capital available"}
                    </div>
                    <div>
                        Language: {country.languages ?
                                    Object.entries(country.languages).map(([language]) => (
                                        `${country.languages[language]} `
                                    )) : 
                                    "No language available"}
                    </div>
                    <div>
                        {country.independent ? "Independent" : "Not Independent"}
                    </div>
                </div>
            }
        </Typography>
      </Popover>
    )
}

export default CountryPopover