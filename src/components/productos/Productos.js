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
import Filter from '../filter';
import json2csv from "json2csv";

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

async function downloadContent(name, content) {
	var atag = document.createElement("a");
	var file = new Blob([content], {type: 'text/plain'});
	atag.href = URL.createObjectURL(file);
	atag.download = name;
	atag.click();
}

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

    const eliminarTodo = async () => {
      await DataStore.delete(Producto, Predicates.ALL);
      fetchTodos()
    }

    const exportar = async() =>{

      const todos = await DataStore.query(Producto);

      const todosFormat = todos.filter(function(item){
         return item;
      }).map(function({tipo,hornada,calidad,nrobulto,peso,dimension,fechadespacho,fechaescaneo,horaescaneo}){
          return {tipo, hornada,calidad,nrobulto,peso,dimension,fechadespacho,fechaescaneo,horaescaneo};
      });
      console.log(todosFormat);


      const json2csv = require('json2csv').parse;
      const csv = json2csv(todosFormat, ['tipo', 'hornada','calidad','nrobulto','peso','dimension','fechadespacho','fechaescaneo','horaescaneo']);
      downloadContent("Productos.csv",csv);

}
    const setInput = (key, value, isNumber = false) => {
        value = (isNumber) ? parseInt(value) : value;
        setFormState({ ...formState, [key]: value })
    }

    return (
        <div className="home">
            <div className="home__table">
            <button onClick={eliminarTodo}>
              Borrar Todo
            </button>
            <button onClick={exportar}>
              Exportar
            </button>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell >Nombre</StyledTableCell>
                                <StyledTableCell >Hornada</StyledTableCell>
                                <StyledTableCell >Calidad</StyledTableCell>
                                <StyledTableCell >Nro Bulto</StyledTableCell>
                                <StyledTableCell >Peso</StyledTableCell>
                                <StyledTableCell >Dimensión</StyledTableCell>
                                <StyledTableCell >Fecha Despacho</StyledTableCell>
                                <StyledTableCell >Fecha Escaneo</StyledTableCell>
                                <StyledTableCell >Hora Escaneo</StyledTableCell>
                                <StyledTableCell >Turno</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {todos.map((row) => (
                              <TableRow key={row.nombre}>
                              <TableCell >{row.nombre}</TableCell>
                              <TableCell >{row.hornada}</TableCell>
                              <TableCell >{row.calidad}</TableCell>
                              <TableCell >{row.nrobulto}</TableCell>
                              <TableCell >{row.peso}</TableCell>
                              <TableCell >{row.dimension}</TableCell>
                              <TableCell >{row.fechadespacho}</TableCell>
                              <TableCell >{row.fechaescaneo}</TableCell>
                              <TableCell >{row.horaescaneo}</TableCell>
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
