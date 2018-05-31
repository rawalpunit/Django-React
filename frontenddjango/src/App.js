import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');


const theUrl = 'http://127.0.0.1:8000/api/notes/';

// const list = [
//   {
//       "title": "test",
//       "content": "OK"
//   },
//   {
//       "title": "hello, world",
//       "content": "Hi!"
//   },
//   {
//       "title": "test3",
//       "content": "let's see if this works"
//   }
// ];

// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }

class App extends Component {
  // constructor(props){
  // super(props)
  // this.state= { list };
  // }
  state = {
    notes: []
  };

 

  async componentDidMount() {
    try{
      axios.get(theUrl)
      .then(response => {
        console.log("pUNIT", response)
        this.setState( { notes } )
      })
    } catch(e) {
      console.log("errors galore", e);
    }
  }

    // try {
    //   const res = await httpGet('http://127.0.0.1:8000/api/notes/');
    //   console.log("33", res);
    //   const notes = await res.json();
    //   this.setState( { notes } );
    // } catch (e) {
    //   console.log("this is punit", e);
    // }
  

   
  render() {
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
