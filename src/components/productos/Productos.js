import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Predicates } from '@aws-amplify/datastore';
import { Producto } from '../../models';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from '../../containers/Header/Header';
import Filter from '../Filter';

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

export default function Productos() {
    const [todos, setTodos] = useState([])
    const [formState, setFormState] = useState({
     tipo: '',
      hornada: '',
       calidad: '',
        nrobulto: '' ,
        peso: '',
         dimension: '',
          fechadespacho: '',
           fechaescaneo: '',
            horaescaneo: ''})

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
      const todos = await DataStore.query(Producto);
      setTodos(todos)


    }
    //
    // const eliminarTodo = async () => {
    //   await DataStore.delete(Producto, Predicates.ALL);
    //   fetchTodos()
    // }

    const setInput = (key, value, isNumber = false) => {
        value = (isNumber) ? parseInt(value) : value;
        setFormState({ ...formState, [key]: value })
    }

    return (
        <div className="home">
            <div className="home__table">
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell >Tipo</StyledTableCell>
                                <StyledTableCell >Hornada</StyledTableCell>
                                <StyledTableCell >Calidad</StyledTableCell>
                                <StyledTableCell >Nro Bulto</StyledTableCell>
                                <StyledTableCell >Peso</StyledTableCell>
                                <StyledTableCell >Dimensión</StyledTableCell>
                                <StyledTableCell >Fecha Despacho</StyledTableCell>
                                <StyledTableCell >Fecha Escaneo</StyledTableCell>
                                <StyledTableCell >Hora Escaneo</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {todos.map((row) => (
                              <TableRow key={row.tipo}>
                              <TableCell >{row.tipo}</TableCell>
                              <TableCell >{row.hornada}</TableCell>
                              <TableCell >{row.calidad}</TableCell>
                              <TableCell >{row.nrobulto}</TableCell>
                              <TableCell >{row.peso}</TableCell>
                              <TableCell >{row.dimension}</TableCell>
                              <TableCell >{row.fechadespacho}</TableCell>
                              <TableCell >{row.fechaescaneo}</TableCell>
                              <TableCell >{row.horaescaneo}</TableCell>
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
