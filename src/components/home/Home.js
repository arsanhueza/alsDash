import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Predicates } from '@aws-amplify/datastore';
import { Todo } from '../../models';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from '../../containers/Header/Header';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.head}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.focus,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Home() {
    const [todos, setTodos] = useState([])
    const [formState, setFormState] = useState({
    nroguia: '',
     rutcliente: '',
      estado: '',
       pesototal: '',
        cliente: '' ,
        fechadespacho: '',
         nrobultos: '',
          producto: '',
           nave: '',
            turno: ''})

    useEffect(() => {
        fetchTodos()

    }, [])

    const fetchTodos = async () => {
      const todos = await DataStore.query(Todo);
      setTodos(todos)

    }

    const eliminarTodo = async () => {
      await DataStore.delete(Todo, Predicates.ALL);
      fetchTodos()
    }




    const setInput = (key, value, isNumber = false) => {
        value = (isNumber) ? parseInt(value) : value;
        setFormState({ ...formState, [key]: value })
    }

    return (
        <div className="home">
        <Header />
            <div className="home__table">
            <button onClick={eliminarTodo}>
              Eliminar Todo
            </button>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell >Guía</StyledTableCell>
                                <StyledTableCell >Rut de Cliente</StyledTableCell>
                                <StyledTableCell >Estado</StyledTableCell>
                                <StyledTableCell >Peso Total</StyledTableCell>
                                <StyledTableCell >Cliente</StyledTableCell>
                                <StyledTableCell >Fecha de Despacho</StyledTableCell>
                                <StyledTableCell >Nro de Bultos</StyledTableCell>
                                <StyledTableCell >Producto</StyledTableCell>
                                <StyledTableCell >Nave</StyledTableCell>
                                <StyledTableCell >Turno</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {todos.map((row) => (
                              <TableRow key={row.nroguia}>
                              <TableCell >{row.nroguia}</TableCell>
                              <TableCell >{row.rutcliente}</TableCell>
                              <TableCell >{row.estado}</TableCell>
                              <TableCell >{row.pesototal}</TableCell>
                              <TableCell >{row.cliente}</TableCell>
                              <TableCell >{row.fechadespacho}</TableCell>
                              <TableCell >{row.nrobultos}</TableCell>
                              <TableCell >{row.producto}</TableCell>
                              <TableCell >{row.nave}</TableCell>
                              <TableCell >{row.turno}</TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

// export default Home;
