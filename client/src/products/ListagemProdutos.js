import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

function ListagemProdutos() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch('/api/listar_produtos')
     .then((res) => res.json())
     .then((data) => setRows(data))
  }, [])

  const excluirProduto = (id) => {
    fetch(`/api/deletar_produto?id=${id}`, {
      method: 'DELETE',
    })
    .finally((res) => {
      window.location='/produtos'
    })
  }

  return (
    <>
    <Button variant="outlined" href='/produtos/adicionar' startIcon={<AddIcon />}>Adicionar Produtos</Button>
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
                <TableCell>
                <Button variant="outlined" onClick={() => excluirProduto(row.id)} startIcon={<DeleteIcon />}>Deletar</Button>
                <Button variant="outlined" href={`/produtos/editar/${row.id}`} startIcon={<EditIcon />}>Editar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ListagemProdutos;
