import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from './graphql/queries'
import awsExports from "./aws-exports";
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import TableScrollbar from 'react-table-scrollbar';

Amplify.configure(awsExports);

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])



  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }



  return (
    <div style={styles.container}>
    <h2>Datos Guías</h2>
    <div className="App">
      <TableScrollbar> 
          {  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>Rut Cliente</th>
        <th>Nro Guia</th>
        <th>Estado</th>
        <th>Peso Total</th>
        <th>Cliente</th>
        <th>Nro Bultos</th>
        <th>FechaDespacho</th>
    </tr>
    </thead>
    <tbody>
      {todos.map((user, id) =>
        <tr key={id}>
          <td>{id}</td>
          <td>{user.rutcliente}</td>
          <td>{user.nroguia}</td>
          <td>{user.estado}</td>
          <td>{user.pesototal}</td>
          <td>{user.cliente}</td>
          <td>{user.nrobultos}</td>
          <td>{user.fechadespacho}</td>
        </tr>
      )}
    </tbody>
  </table>}
        </TableScrollbar>
      </div>
    </div>
      )
}



const styles = {
  container: { width: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 }
}


export default withAuthenticator(App)
