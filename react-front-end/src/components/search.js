import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";


export default function Search(props) {

  const [term, setTerm] = useState ('')


  return(
    <div className="search" style={{paddingTop: '20px', display: 'flex', flexDirection: 'column'}}>
      <h1>Find a Player</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <TextField
          label="Search"
          variant="outlined"
          onChange={event => {
            const { value } = event.target;
            setTerm( value );
          }}
        />
        <Button variant="contained" style={{backgroundColor: '#311b92', color: 'white', marginLeft: '10px'}}  href={`/players/${term}`}>
        Search
        </Button>  
      </div>
    </div>
  )
}