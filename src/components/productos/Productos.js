import React, { Component } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Predicates } from '@aws-amplify/datastore';
import { Producto } from '../../models';
import MaterialTable from "material-table";
import MTableToolbar from "material-table/dist/components/m-table-toolbar";
import { confirmAlert } from "react-confirm-alert";

class Productos extends Component {

  constructor(props) {
    super(props);

    this.state = { todos:[] }
  }
  async componentDidMount(){
    const data = await DataStore.query(Producto);
    var task_names = [];

    for (var i = 0, max = data.length; i < max; i += 1) {

        task_names.push({id: data[i].id,
          nombre: data[i].nombre,
          hornada:data[i].hornada,
          calidad:data[i].calidad,
          nrobulto:data[i].nrobulto,
          peso:data[i].peso,
          dimension:data[i].dimension,
          fechadespacho:data[i].fechadespacho,
          fechaescaneo:data[i].fechaescaneo,
          horaescaneo:data[i].horaescaneo,
          turno:data[i].turno,
          nave:data[i].nave,
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
    const modelToDelete = await DataStore.query(Producto, todo.id);
    DataStore.delete(modelToDelete);
    this.setState( { todos: this.state.todos.filter( (value, index, arr) => { return value.id !== todo.id; }) } );
  }

   eliminarTodo = async (nros) => {
  var se = [];
    const po = await DataStore.query(Producto);

    nros.forEach((item, i) => {

      const result = po.filter(p => p.nroguia == item.nroguia).forEach((z, o) => {
        DataStore.delete(Producto, post => post.nroguia("eq", z.nroguia));

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
         backgroundColor: '#ffc680',
         display:'flex',
         justifyContent: "left"
       }}
     >
       <MTableToolbar {...props} />
     </div>
   )
          }}
        title="Productos 1\n\"
        columns={[    { title: "ID", field: "id" },
            { title: "Nombre", field: "nombre" },
            { title: "Hornada", field: "hornada" },
            { title: "Calidad", field: "calidad" },
            { title: "Nº Bulto", field: "nrobulto" },
            { title: "Peso Total (kg)", field: "peso" },
            { title: "Dimensión", field: "dimension" },
            { title: "Fecha Despacho", field: "fechadespacho" },
            { title: "Fecha escaneo", field: "fechaescaneo" },
            { title: "Hora escaneo", field: "horaescaneo" },
            { title: "Turno", field: "turno" },
            { title: "Nave", field: "nave" },
            { title: "Puerto", field: "puerto" }
]}

        data={this.state.todos}
        localization={{
      body: {
          emptyDataSourceMessage: "No hay Productos para mostrar",
          deleteTooltip: 'Eliminar'
      },
      header: {
          actions: 'Seleccionar'
      },
      pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsSelect: 'Producto',
          labelRowsPerPage: 'Productos por página:',
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
          nRowsSelected: '{0} producto(s) seleccionado(s)',
          showColumnsTitle: 'Ver productos',
          showColumnsAriaLabel: 'Ver Productos',
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

export default Productos;
