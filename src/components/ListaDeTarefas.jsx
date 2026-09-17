import React from 'react';

export default function ListaDeTarefas({tarefas}) {
    return(
        <div>
            {/* Operador ternário para decidir a exibição conforme o tamanho do array */}
            {tarefas && tarefas.length > 0 ? (
                <ul>
                    {tarefas.map((tarefa, index)=>(
                        <li key={index}>{tarefa}</li>
                    ))}
                </ul>
            ) : (
                <p>Nenhuma tarefas para exibir.</p>
            
            )}
        </div>
    );
}
