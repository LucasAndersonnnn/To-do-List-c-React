import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSumit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category);
        setValue("")
        setCategory("")
    }

    
    

  return (
  <div className="todo-form">
        <h2>Criar Tarefas</h2>
        <form onSubmit ={handleSumit}>
            <input type="text" placeholder='Nome da Tarefa' value={value} onChange={(e) => setValue(e.target.value)}/>

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Escolha uma opção</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>

            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
);
}

export default TodoForm
