import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function FormIngredientes() {

  const [valores, setValores] = useState(
    {
      nome: '',
      adicional: false,
      valor: 0
    }
  )

  const handleNameChange = (event) => {
    setValores({ ...valores, nome: event.target.value });
  }

  const handlePodeSerAdicionalChange = (event) => {
    setValores({ ...valores, adicional: event.target.checked });
    if(!event.target.checked){ setValores({ valor: 0 }); }
  }

  const handleValorChange = (event) => {
    setValores({ ...valores, valor: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const myHeaders = new Headers({
      "Content-Type": "application/json"
    });

    fetch('/api/adicionar_ingrediente', {
      method: 'POST', 
      body: JSON.stringify(valores),
      headers: myHeaders
    })
    .finally((res) => {
      window.location='/ingredientes'
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome
        <br/>
        <input type="text" maxlength={30} value={valores.nome} onChange={handleNameChange} required={true}/>
      </label>
      <br/>
      <label>
        Pode ser adicional?
        <br/>
        <input type="checkbox" checked={valores.adicional} onChange={handlePodeSerAdicionalChange}/>
      </label>
      <br/>
      <label>
        Valor
        <br/>
        <input type="number" disabled={!valores.adicional} value={valores.valor} onChange={handleValorChange}/>
      </label>
      <br/>
      <input type="submit" value="Enviar" />
      <a href="/ingredientes"><input type="button" value="Voltar" /></a>
    </form>
  );
}

export default FormIngredientes;
