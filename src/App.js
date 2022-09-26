import './App.css';
import React from 'react';
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';

const defaultTodos = [
  {text:'Cortar Cebolla', completed: true},
  {text:'Tomar Curso Intro a React', completed: false},
  {text:'Llorar con la Llorona', completed: false},
  {text:'Jugar con los pendejetes', completed: false},
]

function App() {
  const [todos,  setTodos ] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //Filtro de busqueda
  const filterTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
    };
  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
    };
  

  return (
    <div /* React.Fragment */  className ='container'>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}

      />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {filterTodos.map( todo =>(
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() =>completeTodo(todo.text)}
                onDelete={() =>deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <TodoCreateButton/>
    </div>
  );
}

export default App;
