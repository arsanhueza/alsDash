import React, { Component } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Predicates } from '@aws-amplify/datastore';
import { Todo } from '../../models';
import MaterialTable from "material-table";
import MTableToolbar from "material-table/dist/components/m-table-toolbar";
import { confirmAlert } from "react-confirm-alert";

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = { todos:[] }
  }

  async componentDidMount(){
    const data = await DataStore.query(Todo);
    var task_names = [];

    for (var i = 0, max = data.length; i < max; i += 1) {

        task_names.push({id: data[i].id,
          nroguia: data[i].nroguia,
          rutcliente:data[i].rutcliente,
          estado:data[i].estado,
          pesototal:data[i].pesototal,
          cliente:data[i].cliente,
          fechadespacho:data[i].fechadespacho,
          horaescaneo:data[i].horaescaneo,
          nrobultos:data[i].nrobultos,
          producto:data[i].producto,
          nave:data[i].nave,
          turno:data[i].turno,
          puerto:data[i].puerto,
          });
          }

    this.setState( { todos: task_names } )
  }
   submit = (nRowsSelected) => {


     confirmAlert({
       title: "😳",
       message: "¿Estás seguro de eliminar " + nRowsSelected.length +  " datos?",
       buttons: [
         {
      label: "Sí",
           onClick: (this.eliminarTodo(nRowsSelected))
         },
         {
           label: "No"
         }
       ]
     });
   };

  deleteNote = async (todo) => {
    const modelToDelete = await DataStore.query(Todo, todo.id);
    DataStore.delete(modelToDelete);
    this.setState( { todos: this.state.todos.filter( (value, index, arr) => { return value.id !== todo.id; }) } );
  }

   eliminarTodo = async (nros) => {
  var se = [];
    const po = await DataStore.query(Todo);

    nros.forEach((item, i) => {

      const result = po.filter(p => p.nroguia == item.nroguia).forEach((z, o) => {
        DataStore.delete(Todo, post => post.nroguia("eq", z.nroguia));

      });
this.componentDidMount()
  });

  }


  render() {
    return (
      <MaterialTable
      components={{
   Toolbar: (props) => (
     <div
       style={{
         backgroundColor: '#b3cce6',
         display:'flex',
         justifyContent: "left"
       }}
     >
       <MTableToolbar {...props} />
     </div>
   )
          }}
        title="Guías  **"
        columns={[    { title: "ID", field: "id" },
            { title: "Nº Guía", field: "nroguia" },
            { title: "Rut Cliente", field: "rutcliente" },
            { title: "Estado", field: "estado" },
            { title: "Peso Total (kg)", field: "pesototal" },
            { title: "Cliente", field: "cliente" },
            { title: "Fecha Despacho", field: "fechadespacho" },
            { title: "Hora escaneo", field: "horaescaneo" },
            { title: "Nº Bultos", field: "nrobultos" },
            { title: "Producto", field: "producto" },
            { title: "Nave", field: "nave" },
            { title: "Turno", field: "turno" },
            { title: "Puerto", field: "puerto" }
]}

        data={this.state.todos}
        localization={{
      body: {
          emptyDataSourceMessage: "No hay Guías para mostrar",
          deleteTooltip: 'Eliminar'
      },
      header: {
          actions: 'Seleccionar'
      },
      pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsSelect: 'Guías',
          labelRowsPerPage: 'Guías por página:',
          firstAriaLabel: 'Primera página',
          firstTooltip: 'Primera página',
          previousAriaLabel: 'Anterior',
          previousTooltip: 'Anterior',
          nextAriaLabel: 'Siguiente',
          nextTooltip: 'Siguiente',
          lastAriaLabel: 'Última página',
          lastTooltip: 'Última página'
      },
      toolbar: {
          addRemoveColumns: 'Añadir o eliminar',
          nRowsSelected: '{0} guía(s) seleccionada(s)',
          showColumnsTitle: 'Ver guías',
          showColumnsAriaLabel: 'Ver Guías',
          exportTitle: 'Exportar',
          exportAriaLabel: 'Exportar',
          exportName: 'Exportar como CSV',
          searchTooltip: 'Buscar',
          searchPlaceholder: 'Buscar'
      }
  }}
        options={{
          selection: true,exportButton: true
        }}

        actions={[
          {
            tooltip: 'Eliminar',
            icon: 'delete',
            onClick: (event,dato) => {this.eliminarTodo(dato)}
          }
  ]}
              />
        );
  }
}

export default Home;
