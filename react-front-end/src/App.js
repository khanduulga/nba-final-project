import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PersistentDrawerRight from './components/navbar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <div className="App">
        <PersistentDrawerRight />
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
      </div>
    );
  }
}

export default App;
