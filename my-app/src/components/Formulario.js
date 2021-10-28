import React, { Fragment, useState } from "react";
import "../App.css";

const Formulario = () => {

    const [dados,setDatos] = useState({
        nome: '',
        idade: ''
    })

    const handleInputChange = (event) => {
        // console.log( event.target.value)
        setDatos({
            ...dados,
            [event.target.name] : event.target.value
        })


    }


    const Adddados = (event) => {
        event.preventDefault();
       console.log(dados.nome + ' ' + dados.idade) 
    }

 
  

        
  return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="row" onSubmit={Adddados}>
        <div className="col-md-3">
          <input 
          className="form-control" 
          placeholder="Name" 
          type="text" 
          name="nome"
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3">
          <input 
          className="form-control" 
          placeholder="Idade"
          name="idade"
          onChange={handleInputChange}/>
        </div>

        <div className="col-md-3">
          <button  className="btn btn-success" type="submit">ADD</button>
        </div>
      </form>
      <h3>{dados.nome} - {dados.idade} </h3>

    </Fragment>
  );
};

export default Formulario;
