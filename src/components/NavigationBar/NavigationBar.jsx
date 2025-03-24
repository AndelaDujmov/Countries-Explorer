
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar/SearchBar';
import { useState } from 'react';

export default function NavigationBar() {
  const [searchData, setSearchData] = useState("")

  return (
    <Box bgcolor={'005f7f'} sx={{ flexGrow: 3, paddingBottom: 5 }}>
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
          <SearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}