import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/navbar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ShotChart from './components/ShotChart'


export default function App(props) {

  const [state, setState] = useState({
    lebron_shots: {},
    curry_shots: {},
    lebron_stats: {},
    curry_stats: {},
    leaders: {}
  })

  useEffect(() => {
    const url0 = axios.get('/api/shots?name=lebron')
    const url1 = axios.get('/api/shots?name=curry')
    const url2 = axios.get('/api/stats?name=lebron')
    const url3 = axios.get('/api/stats?name=curry')
    const url4 = axios.get('/api/leaders')
  
    Promise.all([
      Promise.resolve(url0),
      Promise.resolve(url1),
      Promise.resolve(url2),
      Promise.resolve(url3),
      Promise.resolve(url4),
    ])
    .then((all) => {
      setState(prev => ({
        ...prev,
        lebron_shots: all[0].data,
        curry_shots: all[1].data,
        lebron_stats: all[2].data,
        curry_stats: all[3].data,
        leaders: all[4].data
      }))

    })
  }, [])

  let curry_shots_object = state.curry_shots.shots
  let curry_shots_array = []

  for (let s in curry_shots_object) {
    curry_shots_array.push(curry_shots_object[s])
  }
  

  console.log(curry_shots_array[4])
  

  return (
    <div className="App">
        <Navbar />
        <h1>Find a Player</h1>
        <div class="search">
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
       <ShotChart/>
    </div>
  );
}

