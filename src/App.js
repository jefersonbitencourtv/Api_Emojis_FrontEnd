import './App.css';
import Input from './components/principal';
import React, { Component } from 'react';
class App extends Component {

   getText = () => {
    var area = document.getElementById("txtArea");
    fetch('https://converttoemojijavajson.herokuapp.com/json/v1',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: area.value
    })
    .then(response => response.text()).then( data => {
      var a = document.createElement('a');
      var blob = new Blob([data], {"type":"text/plain;charset=utf-8"});
      a.href = window.URL.createObjectURL(blob);
      a.download = "emojis.json";
      a.click();
    })
  }

  render (){
  return(
    <div className="App">
        <h1> Api Convert </h1>
        <Input/>
        <div>
         <input type = "button" value="click here" onClick = {this.getText} />
        </div>
    </div>
    
  );
  }
}

export default App;
