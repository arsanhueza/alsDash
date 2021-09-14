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
      </tr>
    </thead>
    <tbody>
      {todos.map((user, id) =>
        <tr key={id}>
          <td>{id}</td>
          <td>{user.rutcliente}</td>
          <td>{user.nroguia}</td>
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
  container: { width: 2000, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}


export default withAuthenticator(App)
