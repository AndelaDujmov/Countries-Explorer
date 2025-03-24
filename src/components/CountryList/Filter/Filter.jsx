import { Box, FormControl } from "@mui/material";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import useFetch from "../../../hooks/useFetch";

const Filter = ({ name, setName }) =>  {
    const [continents] = useFetch(`https://restcountries.com/v3.1/all?fields=continents`);
    const valueSet = new Set();

    continents.forEach(el => {
        el.continents.forEach(e => {
            valueSet.add(e);
        });
    });

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel 
                    id="demo-simple-select-label" 
                    sx={{ color: "white" }} // White text for label
                >
                    Continent
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    label="Continent"
                    onChange={handleChange}
                    sx={{
                        backgroundColor: "blue", // Blue background for Select
                        color: "white", // White text for Select
                        '& .MuiSelect-icon': {
                            color: 'white', // White color for the dropdown icon
                        },
                        '& .MuiMenuItem-root': {
                            backgroundColor: 'blue', // Blue background for menu items
                            color: 'white', // White text for menu items
                        },
                        '& .MuiMenuItem-root:hover': {
                            backgroundColor: 'darkblue', // Dark blue on hover
                        },
                    }}
                >
                    <MenuItem value={"All"}>
                            All
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
