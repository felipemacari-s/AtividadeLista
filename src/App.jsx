import ListaDeTarefas from './components/ListaDeTarefas';

import React from 'react';
import ListaDeTarefas from './ListaDeTarefas'; // Certifique-se de que ListaDeTarefas.jsx está na pasta 'src'


export default function App() {

    const listaComItens = ['Comprar pão', 'Estudar React'];
    const listaVazia = [];

    return (
    <div style={{padding: '20px'}}>
        <h3>Exemplo 1 (com tarefas):</h3>
        <ListaDeTarefas tarefas={listaComItens} />
        
        <h3>Exemplo 2 (sem tarefas):</h3>

        <ListaDeTarefas tarefas={listaVazia}/>

    </div>
    );
    
}