import './App.css';
import React from 'react';
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';

const todos = [
  {text:'Cortar Cebolla', completed: false},
  {text:'Tomar Curso Intro a React', completed: false},
  {text:'Llorar con la Llorona', completed: false},
]

function App() {
  return (
    <div /* React.Fragment */  className ='container'>
      <TodoCounter/>
          <TodoSearch/>
          <TodoList>
            {todos.map( todo =>(
              <TodoItem key={todo.text} text={todo.text}/>
            ))}
          </TodoList>
          <TodoCreateButton/>
    </div>
  );
}

export default App;
