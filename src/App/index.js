import './App.css';
import React from 'react';
import { AppUI } from './appUI';

/* const defaultTodos = [
  {text:'Cortar Cebolla', completed: true},
  {text:'Tomar Curso Intro a React', completed: false},
  {text:'Llorar con la Llorona', completed: false},
  {text:'Jugar con los pendejetes', completed: false},
] */

function UselocalStorage (itemName, initialValue){
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item,  setItem ] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  return [
    item, saveItem
  ];
}

function App() {
  const [todos, saveTodos] = UselocalStorage('TODOS_V1', []);
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
    saveTodos(newTodos);
    };
  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    };
  

  return (
    <AppUI
      totalTodos ={totalTodos}
      completedTodos ={completedTodos}
      searchValue ={searchValue}
      setSearchValue ={setSearchValue}
      filterTodos ={filterTodos}
      completeTodo ={completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
