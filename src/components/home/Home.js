import React, { useEffect, useState } from 'react';
import './Home.css';
import { withStyles} from '@material-ui/styles';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../../models';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const Home = () => {
    const [todos, setTodos] = useState([])
    const [formState, setFormState] = useState({ nroguia: '', rutcliente: '', estado: '', pesototal: '', cliente: '' ,fechadespacho: '', nrobultos: '', producto: '', nave: '', turno: ''})

    const StyledTableCell = withStyles((theme) => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }))(TableRow);


    useEffect(() => {
        fetchTodos()

    }, [])

    const fetchTodos = async () => {
      const todos = await DataStore.query(Todo);
      setTodos(todos)
    }

    const setInput = (key, value, isNumber = false) => {
        value = (isNumber) ? parseInt(value) : value;
        setFormState({ ...formState, [key]: value })
    }

    return (
        <div className="home">
            <div className="home__table">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell >Guía</TableCell>
                                <TableCell >Rut de Cliente</TableCell>
                                <TableCell >Estado</TableCell>
                                <TableCell >Peso Total</TableCell>
                                <TableCell >Cliente</TableCell>
                                <TableCell >Fecha de Despacho</TableCell>
                                <TableCell >Nro de Bultos</TableCell>
                                <TableCell >Producto</TableCell>
                                <TableCell >Nave</TableCell>
                                <TableCell >Turno</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {todos.map((row) => (
                          <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">{row.nroguia}</TableCell>
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

export default Home;