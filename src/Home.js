import React, { useEffect, useState } from 'react';
import './Home.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
    const useStyles = makeStyles({
      table: {
        minWidth: 700,
      },
    });
    const classes = useStyles();

    return (

        <div className="home">
            <div className="home__table">
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell >Numero de Guía</StyledTableCell>
                                <StyledTableCell >Rut Cliente</StyledTableCell>
                                <StyledTableCell >Estado</StyledTableCell>
                                <StyledTableCell >Peso Total</StyledTableCell>
                                <StyledTableCell >Cliente</StyledTableCell>
                                <StyledTableCell >Fecha de Despacho</StyledTableCell>
                                <StyledTableCell >Numero de Bultos</StyledTableCell>
                                <StyledTableCell >Producto</StyledTableCell>
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


//
//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
