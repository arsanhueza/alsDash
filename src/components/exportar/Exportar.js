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
		const json2csv = require('json2csv').parse;
		const csv = json2csv(todos, ['id', 'nroguia','rutcliente','estado', 'pesototal','cliente','fechadespacho', 'nrobultos', 'producto', 'turno','nave','createdAt', 'updatedAt', '_version','_lastChangedAt', '_deleted']);
		downloadContent("datos.csv",csv);


	}
	return (
		<div >
			<br />
			<h1>Espere la descarga</h1>
		</div>
	)
  }

export default Exportar;
