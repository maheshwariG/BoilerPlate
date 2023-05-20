/* eslint-disable react/prop-types */
import React from 'react';
import MuiButton from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '10px',
    fontSize: '10px',
  },
  label: {
    textTransform: 'none',
  },
}));
const Button = (props) => {
  const { onClick, icon, text } = props;
  const classes = useStyles();
  return (
    <MuiButton
      variant="contained"
      size="small"
      onClick={onClick}
      startIcon={icon && <CalendarTodayIcon />}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
};
export default Button;
