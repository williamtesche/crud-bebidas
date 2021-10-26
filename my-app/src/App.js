import './App.css';
import React from 'react';
import {useState} from 'react'; 

function App() {

  let [lista,setLista] = useState([]);
  let [novoitem,setNovoItem] = useState("");


  let [listar,setListar] = useState([]);
  let [segundoitem,setSegundoItem] = useState("");



  return ( 
    <div className="App">
        <h1>Bem vindo ao meu site</h1>

        <input value={novoitem} onChange={value => setNovoItem(value.target.value)} type="text" placeholder="Nome"/>
        <br />
        <input value={segundoitem} onChange={value => setSegundoItem(value.target.value)} type="text" placeholder="Idade"/>
       <br />
        <button onClick={() => adicionarNovoItem()}> adicionar</button>

        {lista.map(item => <div>{item}</div>)}

     
    </div>
  );

  function adicionarNovoItem() {
    setLista([...lista, novoitem])
  }

  function adicionarSegundoItem() {
    setListar([...listar, segundoitem])
  }

};




export default App;
