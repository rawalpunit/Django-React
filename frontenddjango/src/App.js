import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// const axios = require('axios');


const theUrl = 'http://127.0.0.1:8000/api/notes/';

class App extends Component {
  // constructor(props){
  // super(props)
  // this.state= { list };
  // }
  state = {
    notes: []
  };

 

  componentDidMount() {
    // console.log("runs");
      axios.get(theUrl)
      .then(response => {
        console.log("pUNIT", response.data)
        this.setState( { notes: response.data } )
      })
    } catch(e) {
      console.log("errors galore", e);
    }
  

    
  render() {
    console.log(this.state.notes);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {this.state.notes.map(note => (
            <div key={note.id}>
              <h1>{note.title}</h1>
              <span>{note.content}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
