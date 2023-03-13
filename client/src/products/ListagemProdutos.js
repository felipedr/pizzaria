import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ListagemProdutos() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch('/api/listar_produtos')
     .then((res) => res.json())
     .then((data) => setRows(data))
  }, [])

  return (
    <>
      <a href="/produtos/adicionar"><input type="button" value="Adicionar Produto" /></a>
      <TableContainer component={Paper}>
        <Table sx={{ width: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Tamanho</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.nome}</TableCell>
                <TableCell>{row.preco}</TableCell>
                <TableCell>{row.categoria}</TableCell>
                <TableCell>{row.tamanho}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ListagemProdutos;
