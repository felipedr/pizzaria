import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function FormProdutos() {

  const categoriaTamanhos = {
    'pizza': ['broto', 'normal', 'familia'],
    'refrigerante': ['lata', '600ml', '2l'],
    'outros': ['unico']
  }

  const [valores, setValores] = useState(
    {
      id: null,
      nome: '',
      categoria: 'pizza',
      produto_tamanho_preco: categoriaTamanhos['pizza'].map(tamanho => ({ tamanho: tamanho, valor: 0 }))
    }
  )

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`/api/listar_produto?id=${id}`)
      .then((res) => res.json())
      .then((data) => data[0] && setValores(data[0]))
    }
  }, [])

  const handleNameChange = (event) => {
    setValores({ ...valores, nome: event.target.value });
  }

  const handlePrecoChange = (event) => {
    const tamanho = event.target.getAttribute("tamanho")
    setValores({ 
      ...valores,
      produto_tamanho_preco: valores.produto_tamanho_preco.map(produto_tamanho => {
        if (produto_tamanho.tamanho !== tamanho) {
          return produto_tamanho;
        }
        return { tamanho: tamanho, valor: event.target.value }
      })
    });
  }

  const handleCategoriaChange = (event) => {
    let categoria = event.target.value
    let tamanhos = categoriaTamanhos[categoria]
    setValores({ 
      ...valores,
      categoria: categoria,
      produto_tamanho_preco: tamanhos.map(tamanho => ({ tamanho: tamanho, valor: 0 }))
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const myHeaders = new Headers({
      "Content-Type": "application/json"
    });

    if (!valores.id) {
      fetch('/api/adicionar_produto', {
        method: 'POST', 
        body: JSON.stringify(valores),
        headers: myHeaders
      })
      .finally((res) => {
        window.location='/produtos'
      })
    } else { 
      fetch('/api/update_produto', {
        method: 'PATCH', 
        body: JSON.stringify(valores),
        headers: myHeaders
      })
      .finally((res) => {
        window.location='/produtos'
      })
    }                                       
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome
        <br/>
        <input type="text" maxLength={30} value={valores.nome} onChange={handleNameChange} required={true}/>
      </label>
      <br/>
      {}
      <label>
        Categoria
        <br/>
        <select maxlength={30} value={valores.categoria} onChange={handleCategoriaChange}>
          {Object.entries(categoriaTamanhos).map((categoria) => (
            <option value={categoria[0]}>{categoria[0]}</option>
          ))}
        </select>
      </label>
      <br/>
      {valores.produto_tamanho_preco.map((tamanho_preco, index) => (
        <div>
          <label>
            Tamanho
            <input type="text" readOnly value={tamanho_preco.tamanho}/>
          </label>
          <label>
            Preço {tamanho_preco.tamanho}
            <input type="number" value={tamanho_preco.preco} tamanho={tamanho_preco.tamanho} onChange={handlePrecoChange}/>
          </label>
          <br/>
        </div>
      ))}
      <br/>
      <input type="submit" value="Enviar" />
      <a href="/produtos"><input type="button" value="Voltar" /></a>
    </form>
  );
}

export default FormProdutos;
