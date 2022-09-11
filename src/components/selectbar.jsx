import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function MultipleSelectCheckmarks({names,title}) {
    const [Name, setName] = React.useState([]);
    const [state, seState] = React.useState(title)
  
  const [searchParams, setSearchParams] = useSearchParams()
  
    // we will get selected value here use redux to handle state
    // setSearchParams( { title : Name })
    useEffect(() => {
     
      
      setSearchParams( { [title]: Name }, {replace : true})
    },[Name,setSearchParams])
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 130 }}size="small">
        <InputLabel id="demo-multiple-checkbox-label">{title}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={Name}
          onChange={handleChange}
          input={<OutlinedInput label="Categoryty" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={Name.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
