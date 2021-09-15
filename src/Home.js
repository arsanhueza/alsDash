import React, { useEffect, useState } from 'react';
import './Home.css';

import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from './graphql/queries'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const Home = () => {
    const [todos, setTodos] = useState([])
    const [formState, setFormState] = useState({ nroguia: '', rutcliente: '', estado: '', pesototal: '', cliente: '' ,fechadespacho: '', nrobultos: '', producto: ''})


    useEffect(() => {
        fetchTodos()

    }, [])

    const fetchTodos = async () => {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos))
            const todos = todoData.data.listTodos.items
            setTodos(todos)
        } catch (err) { console.log('error fetching actors') }
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
                                <TableCell >Numero de Guía</TableCell>
                                <TableCell >Rut Cliente</TableCell>
                                <TableCell >Estado</TableCell>
                                <TableCell >Peso Total</TableCell>
                                <TableCell >Cliente</TableCell>
                                <TableCell >Fecha de Despacho</TableCell>
                                <TableCell >Numero de Bultos</TableCell>
                                <TableCell >Producto</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {todos.map((row) => (
                                <TableRow key={row?.name}>
                                    <TableCell component="th" scope="row">
                                        {row?.nroguia}
                                    </TableCell>
                                    <TableCell >{row?.rutcliente}</TableCell>
                                    <TableCell >{row?.estado}</TableCell>
                                    <TableCell >{row?.pesototal}</TableCell>
                                    <TableCell >{row?.cliente}</TableCell>
                                    <TableCell >{row?.fechadespacho}</TableCell>
                                    <TableCell >{row?.nrobultos}</TableCell>
                                    <TableCell >{row?.producto}</TableCell>
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
