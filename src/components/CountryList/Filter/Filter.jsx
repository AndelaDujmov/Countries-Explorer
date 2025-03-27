import { Box, FormControl } from "@mui/material";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

/**
 * Filter Component
 * 
 * This component is a dropdown selector used to filter countries based on a specific criterion 
 * (e.g., continent, population range).
 * 
 * @param {string} name - The current selected filter value.
 * @param {Function} setName - Function to update the selected filter value.
 * @param {Set<string>} valueSet - Set of unique values to display as filter options.
 * @param {string} label - The label for the filter dropdown.
 * @param {string} startValue - The default starting value for the dropdown (e.g., "All").
 * 
 * @returns {JSX.Element} - A styled dropdown select component.
 * 
 * @example
 * <Filter 
 *   name={continentFilter} 
 *   setName={setContinentFilter} 
 *   valueSet={new Set(["Africa", "Europe", "Asia"])} 
 *   label="Continent" 
 *   startValue="All"
 * />
 */

const Filter = ({ name, setName, valueSet, label, startValue }) => {

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <Box sx={{
            minWidth: 120, 
            width: { xs: 20, sm: 160, md: 2000 }, 
            height: { xs: 'auto', sm: 40, md: 50 },
            marginBottom: 2,
        }}>
            <FormControl fullWidth>
                <InputLabel 
                    id="demo-simple-select-label" 
                    sx={{ color: "white" }} 
                >
                    {label}
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    label="Continent"
                    onChange={handleChange}
                    sx={{
                        backgroundColor: "blue", 
                        color: "white", 
                        '& .MuiSelect-icon': {
                            color: 'white', 
                        },
                        '& .MuiMenuItem-root': {
                            backgroundColor: 'blue', 
                            color: 'white', 
                        },
                        '& .MuiMenuItem-root:hover': {
                            backgroundColor: 'darkblue', 
                        },
                        height: { xs: 36, sm: 40, md: 50 }, 
                        width: { xs: 88, sm: 140, md: 150 }
                    }}
                >
                    <MenuItem value={startValue}>
                            {startValue}
                    </MenuItem>

                    {Array.from(valueSet).map(element => (
                        <MenuItem key={element} value={element}>
                            {element}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Filter;
