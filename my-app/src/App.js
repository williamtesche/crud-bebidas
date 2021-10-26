import './App.css';
import React from 'react';
import {useState} from 'react'; 

function App() {

  let [lista,setLista] = useState([]);
  let [novoitem,setNovoItem] = useState("");


  let [listar,setListar] = useState([]);
  let [segundoitem,setSegundoItem] = useState("");



  return ( 
    <>
    <div className="App">
      <div className="inner-app">
      <h1>Bem vindo ao meu site</h1>

<input value={novoitem} onChange={value => setNovoItem(value.target.value)} type="text" placeholder="Nome"/>
<br />
<input value={segundoitem} onChange={value => setSegundoItem(value.target.value)} type="text" placeholder="Idade"/>
<br />
<button onClick={() => adicionarNovoItem()}> adicionar</button>




      </div>


     
    </div>

    <div className="li">
    <h1>Nomes</h1>
    
      <div>willian</div>
  
  

    {lista.map(item => <li>{item}</li>)}
    </div>
    </>
  );

  function adicionarNovoItem() {
    setLista([...lista, novoitem])
  }

  function adicionarSegundoItem() {
    setListar([...listar, segundoitem])
  }

};




export default App;
