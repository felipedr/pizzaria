import React, { useState } from 'react';

function FormProdutos() {

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

  const handlePrecoChange = (event) => {
    setValores({ ...valores, preco: event.target.value });
  }

  const handleCategoriaChange = (event) => {
    setValores({ ...valores, categoria: event.target.value });
  }

  const handleTamanhoChange = (event) => {
    setValores({ ...valores, tamanho: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const myHeaders = new Headers({
      "Content-Type": "application/json"
    });

    fetch('/api/adicionar_produto', {
      method: 'POST', 
      body: JSON.stringify(valores),
      headers: myHeaders
    })
    .finally((res) => {
      window.location='/produtos'
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
        Preço
        <br/>
        <input type="number"  value={valores.preco} onChange={handlePrecoChange}/>
      </label>
      <br/>
      <label>
        Categoria
        <br/>
        <input type="text" maxlength={30} value={valores.categoria} onChange={handleCategoriaChange}/>
      </label>
      <br/>
      <label>
        Tamanho
        <br/>
        <input type="text" maxlength={30} value={valores.tamanho} onChange={handleTamanhoChange}/>
      </label>
      <br/>
      <input type="submit" value="Enviar" />
      <a href="/produtos"><input type="button" value="Voltar" /></a>
    </form>
  );
}

export default FormProdutos;
