import React from 'react'

const Filter = ({filter, setFilter}) => {
  return (
    <div className="filter">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
    </select>
    </div>
  )
}

export default Filter
