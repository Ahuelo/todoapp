import React from "react";
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../TodoCreateButton';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    filterTodos,
    completeTodo,
    deleteTodo,
}) {
    return(
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
export { AppUI };