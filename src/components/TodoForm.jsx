import React from 'react'

const TodoForm = () => {
  return (
  <div className="todo-form">
        <h2>Criar Tarefas</h2>
        <form>
            <input type="text" placeholder='Nome da Tarefa'/>
            <select>

                <option value="Trabalho">Selecione uma categoria</option>
                <option value="Pessoal">Selecione uma categoria</option>
                <option value="Estudos">Selecione uma categoria</option>

            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
);
}

export default TodoForm
