import React, { Component } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../../models';


class NotesList extends Component {
  
  render() {

    return (
      <React.Fragment>
        <div className="container">
        { this.props.todos.map( (todo) => 
          <div key={todo.id} className="border border-primary rounded p-3 m-3">
            <span><b>Guía:</b> {todo.nroguia}, <b>Nave:</b> {todo.nave}, <b>Turno:</b>{todo.turno}, <b>Peso:</b> {todo.pesototal}, <b>Prod:</b> {todo.producto}, <b>Fecha:</b> {todo.fechadespacho} </span>
            <button type="button" className="close" onClick={ (event) => { this.props.deleteNote(todo) } }>
              <i className="fas fa-trash-alt"></i>
            </button>        
          </div>
        )}
        </div>
      </React.Fragment>
    )
  }   
}



class Embarques extends Component {

  constructor(props) {
    super(props);
    this.state = { todos:[] }
  }

  async componentDidMount(){
    const todos = await DataStore.query(Todo);
    this.setState( { todos: todos } )
  }  

  deleteNote = async (todo) => {
    const modelToDelete = await DataStore.query(Todo, todo.id);
    DataStore.delete(modelToDelete);

    this.setState( { todos: this.state.todos.filter( (value, index, arr) => { return value.id !== todo.id; }) } );
  }
  
  addNote = async (todo) => {
    const result = await DataStore.save(
      new Todo({
        "nroguia": todo.nroguia
      })
    ); 
    this.state.todos.push(result)
    this.setState( { todos: this.state.todos } ) 
  }

  render() {
    return (
       <div className="row">
        <div className="col m-3">
          <NotesList todos={ this.state.todos } deleteNote={ this.deleteNote }/>
        </div> 
      </div> 
    );
  }
}

export default Embarques;