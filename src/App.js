import React from 'react';
// Importa o componente filho (ajuste o caminho se o arquivo estiver dentro de 'src/components/')
import ListaDeTarefas from './components/ListaDeTarefas'; 

export default function App() {
  // 1. Definição dos dados para teste
  const listaComItens = ['Comprar pão', 'Estudar React', 'Praticar exercícios'];
  const listaVazia = [];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Painel de Tarefas</h1>

      <h3>Teste 1 (Com tarefas):</h3>
      {/* Passa o array preenchido para a prop 'tarefas' */}
      <ListaDeTarefas tarefas={listaComItens} />

      <h3>Teste 2 (Sem tarefas):</h3>
      {/* Passa o array vazio para a prop 'tarefas' */}
      <ListaDeTarefas tarefas={listaVazia} />
    </div>
  );
}