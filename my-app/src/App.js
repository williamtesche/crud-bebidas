import "./App.css";
import React from "react";
import { useState } from "react";


const obj = {
  name: '',
  idade: ''
}


function App() {
const [lista, setLista] = useState([]);
const [pessoa, setPessoa ] = useState(obj)


function handleChange(event ) {
  const {name,value} = event.target;
  setPessoa((pessoa) => {
    return {
      ...pessoa,[name]:value
    };
  });
  
}

  
  
    return (
    <>
      <div className="App">
        <div className="inner-app">
          <h1>Enter name and age</h1>

          <input
            name="nome"
            value={pessoa.name}
            onChange={handleChange}
            type="text"
            placeholder="name"
          />
          <br />
          <input
            idade="idade"
            onChange={handleChange}
            type="text"
            placeholder="age"
          />
          <br />

          <button onClick={() => handleChange()}> adicionar</button>
        </div>
      </div>
      <div className="li">
        <h1>Names</h1>

        <div>willian</div>

        {lista.map((item) => (
          <li>`${item.name}:${item.idade}`</li>
        ))}
      </div>
    </>
  );

}

export default App;


