import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import awsExports from "./aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsExports);

const initialState = { nroguia: '', rutcliente: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.nroguia || !formState.rutcliente) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Datos Guías</h2>
      <input
        onChange={event => setInput('nroguia', event.target.value)}
        style={styles.input}
        value={formState.nroguia}
        placeholder="NroGuia"
      />
      <input
        onChange={event => setInput('rutcliente', event.target.value)}
        style={styles.input}
        value={formState.rutcliente}
        placeholder="RutCliente"
      />
      <button style={styles.button} onClick={addTodo}>Ingresar Guia</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.nroguia}</p>
            <p style={styles.todoDescription}>{todo.rutcliente}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App)
