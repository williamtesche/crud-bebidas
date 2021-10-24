import './App.css';
import React from 'react';
import Button  from './components/Button';

const App =   () => {
  return ( 
    <div className="App">
        <h1>Bem vindo ao meu site</h1>
        <input tipe="text" placeholder="Seu Nome"></input>
        <br />
        <input tipe="text" placeholder="Sua idade"></input>
        <br/>
        <Button>Adicionar</Button>

     
    </div>
  );


};




export default App;
