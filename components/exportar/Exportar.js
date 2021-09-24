import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../../models';

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
		downloadContent("dato.json",JSON.stringify(todos));
	}
	return (
		<div >
			<br />
			<h1>Espere la descarga</h1>
		</div>
	)
  }

export default Exportar;