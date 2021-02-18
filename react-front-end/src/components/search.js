import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Search() {
  return(
    <div className="search" style={{paddingTop: '20px', display: 'flex', flexDirection: 'column'}}>
      <h1>Find a Player</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <TextField
          label="Search"
          variant="outlined"
        />
        <Button variant="contained" style={{backgroundColor: '#311b92', color: 'white', marginLeft: '10px'}}  href="">
        Select
        </Button>  
      </div>
    </div>
  )
}