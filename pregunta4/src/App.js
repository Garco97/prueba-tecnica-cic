import React from 'react';
import './App.css';

function App() {
  function checkInput(){
    let codigo = document.getElementById("codigo");
    console.log(codigo.value)
    let regex = /^[a-zA-Z]{3}\d{3}$/;
    let match = regex.exec(codigo.value)
    console.log(match)
      codigo.style.backgroundColor = match ? "green": "red";
      if(!match){
        alert("ERROR Patrón incorrecto")
      }
  }
  return (
    <div className="App">
      <fieldset>
      <label htmlFor="contactName">Código</label>
      <input type="text" defaultValue="" size="35" id="codigo" name="codigo"/>
      <button id="sendButton" onClick={checkInput}>Enviar</button>
      </fieldset>
    </div>
  );
}

export default App;
