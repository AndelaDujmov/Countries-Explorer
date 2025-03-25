import { Box, FormControl } from "@mui/material";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import useFetch from "../../../hooks/useFetch";
import processData from "../../../utils/processData";

// This is the Filter component that is used to filter the countries based on the continent, it receives the name and setName props and the url prop
// The name prop is the current value of the filter
// The setName prop is the function that updates the filter value
// The url prop is the URL to fetch the data from
// The data is fetched using the useFetch hook
// The valueSet is the set of unique values for the filter

const Filter = ({ name, setName, url }) =>  {
    const [data] = useFetch(url);
    const valueSet = processData(data);
   

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel 
                    id="demo-simple-select-label" 
                    sx={{ color: "white" }} 
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
