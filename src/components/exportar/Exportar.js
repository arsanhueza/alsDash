import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../../models';
import json2csv from "json2csv";

async function downloadContent(name, content) {
	var atag = document.createElement("a");
	var file = new Blob([content], {type: 'text/plain'});
	atag.href = URL.createObjectURL(file);
	atag.download = name;
	atag.click();
}
const Exportar = () => {
	const [todos] = useState([])
	useEffect(() => {
        fetchTodos()

    }, [])
	const fetchTodos = async () => {
		const todos = await DataStore.query(Todo);

		const todosFormat = todos.filter(function(item){
		   return item;
		}).map(function({nroguia, rutcliente,estado,pesototal,cliente,fechadespacho,nrobultos,producto,turno,nave,fechaescaneo,puerto}){
		    return {nroguia, rutcliente,estado,pesototal,cliente,fechadespacho,nrobultos,producto,turno,nave,fechaescaneo, puerto};
		});
		console.log(todosFormat);


		const json2csv = require('json2csv').parse;
		const csv = json2csv(todosFormat, ['id', 'nroguia','rutcliente','estado', 'pesototal','cliente','fechadespacho', 'nrobultos', 'producto', 'turno','fechaescaneo','createdAt']);
		downloadContent("datos.csv",csv);
	}
	return (
		<div >
			<br />
			<h1>Espere la descarga...</h1>
		</div>
	)
  }

export default Exportar;
