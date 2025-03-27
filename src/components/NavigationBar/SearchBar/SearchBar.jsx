import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

/**
 * SearchBar Component
 * 
 * This component is a search bar with an input field and a search icon.
 * It allows the user to type a search query and filters the countries based on the search input.
 * 
 * The search bar is styled using Material-UI's `styled` API and adapts to different screen sizes. On small screens, 
 * it takes the full width, while on larger screens, it shows a fixed width with a smooth expansion effect when focused.
 * 
 * The component consists of the following styled elements:
 * 1. **Search**: Container for the search bar.
 * 2. **SearchIconWrapper**: A wrapper for the search icon, positioned on the left side of the input field.
 * 3. **StyledInputBase**: The main input field where users type their search query.
 * 
 * @param {string} searchQuery - The current search query string.
 * @param {function} setSearchQuery - Function to update the search query state.
 * 
 * @returns {JSX.Element} The rendered search bar with an input field and a search icon.
 * 
 * @example
 * <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
 */

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
    },
    // Position the search bar on the right for smaller screens
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      right: '10px',
      width: 120, // Set width to a fixed value for small screens
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`, 
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <Search 
          sx={{
            height: { xs: 36, sm: 40, md: 50 },
            width: { xs: '30%', sm: 'auto' }, 
            top: { xs: 10, sm: 0 },
          }}
        >
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              sx={{
                height: { xs: 8 },
                top: { xs: 14 }
              }}
            />
        </Search>
    )
}

export default SearchBar;
