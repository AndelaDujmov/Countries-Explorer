import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';

/**
 * NavigationBar Component
 * 
 * This component renders the navigation bar at the top of the page. It contains:
 * 1. The title "Countries Explorer".
 * 2. A search bar component that allows users to search for country names. 
 * 
 * The search bar is only displayed on the home page (`'/'` route). 
 * The component conditionally renders the search bar based on the current path using `useLocation` hook from `react-router-dom`.

 * @param {string} searchQuery - The current search query string.
 * @param {function} setSearchQuery - Function to update the search query state.
 * 
 * @returns {JSX.Element} The rendered navigation bar with the title and optionally the search bar.
 * 
 * @example
 * <NavigationBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
 */

export default function NavigationBar({ searchQuery, setSearchQuery }) {
  const location = useLocation()

  console.log(searchQuery)

  return (
    <Box bgcolor={'005f7f'} sx={{ flexGrow: 3, paddingBottom: 10 }}>
      <AppBar position="fixed" bgcolor={'#005f7f'}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            Countries Explorer
          </Typography>
          { location.pathname==='/' && <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> }
        </Toolbar>
      </AppBar>
    </Box>
  );
}