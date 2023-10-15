import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos =[
  {text: 'Cortar cebolla', complete:true},
  {text: 'Tomar el curso de intro a React.js', complete:false},
  {text: 'Llorar con la Llorona', complete:false},
  {text: 'No joda hombeeeeeeeeeee', complete:false},  
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

     <CreateTodoButton />      
    </React.Fragment>
  );
}
export default App;
