import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Search() {
  return(
    <div className="search">
      <h1>Find a Player</h1>
      <div style={{marginRight: 1 + 'em'}}>
        <TextField
          label="Search"
          variant="outlined"
        />
      </div>
      <Button variant="contained" style={{backgroundColor: '#311b92', color: 'white'}}  href="">
      Select
      </Button>  
    </div>
  )
}