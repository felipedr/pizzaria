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

function ListagemIngredientes() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch('/api/listar_ingredientes')
     .then((res) => res.json())
     .then((data) => setRows(data))
  }, [])

  const excluirIngrediente = (id) => {
    fetch(`/api/deletar_ingrediente?id=${id}`, {
      method: 'DELETE',
    })
    .finally((res) => {
      window.location='/ingredientes'
    })
  }

  return (
    <>
    <Button variant="outlined" href='/ingredientes/adicionar' startIcon={<AddIcon />}>Adicionar Ingredientes</Button>
    <TableContainer component={Paper}>
      <Table sx={{ width: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Pode ser adicional?</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.adicional ? 'Sim' : 'Não'}</TableCell>
              <TableCell>{row.adicional ? row.valor : '-'}</TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => excluirIngrediente(row.id)} startIcon={<DeleteIcon />}>Deletar</Button>
                <Button variant="outlined" href={`/ingredientes/editar/${row.id}`} startIcon={<EditIcon />}>Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default ListagemIngredientes;
