/* eslint-disable react/prop-types */
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';

export default function Select(props) {
  const { value, onChange, options } = props;

  return (
    <MuiSelect
      variant="outlined"
      value={value}
      defaultValue={value}
      onChange={onChange}
    >
      {options.map((item) => (
        <MenuItem key={item.id} value={item.id}>
          {item.title}
        </MenuItem>
      ))}
    </MuiSelect>
  );
}
