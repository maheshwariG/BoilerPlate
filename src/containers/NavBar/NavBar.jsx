import React from 'react';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Logo from '../../images/logo.PNG';
import filter from '../../images/filter.PNG';
import settings from '../../images/settings.PNG';
import alert from '../../images/alert.PNG';
import signin from '../../images/signin.PNG';
import globe from '../../images/globe.PNG';

const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: '10px',
  border: '1px solid grey',
  width: '100%',
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(() => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    paddingLeft: '40px',
  },
}));
function NavBar() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <img src={Logo} alt="Logo" />
      </Grid>
      <Grid item xs={6}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Grid>
      <Grid item xs={3} style={{ textAlign: 'center' }}>
        <img src={filter} alt="filter" />
        <img src={settings} alt="settings" />
        <img src={alert} alt="alert" />
        <img src={signin} alt="signin" />
        <img src={globe} alt="globe" />
      </Grid>
    </Grid>
  );
}

export default NavBar;
