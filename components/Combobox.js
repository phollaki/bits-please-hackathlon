import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({titles,...props}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={titles}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      {...props}
    />
  );
}