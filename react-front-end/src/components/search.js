import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";


export default function Search(props) {

  const [term, setTerm] = useState ('')


  return(
    <div className="search" style={{paddingRight: '20px', display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{backgroundColor: 'white', borderRadius: '10px'}}>
          <TextField
            label="Search"
            variant="outlined"
            onChange={event => {
              const { value } = event.target;
              setTerm( value );
            }}
          />
        </div>
        <Button variant="contained" style={{backgroundColor: '#311b92', color: 'gold', marginLeft: '10px', border: 'solid white', borderWidth: '1px'}}  href={`/players/${term}`}>
        Search
        </Button>  
      </div>
    </div>
  )
}