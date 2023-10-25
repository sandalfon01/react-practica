import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import react from 'react';
import { useLocalStorage } from './useLocalStorage';


/*const defaultTodos =[
  {text: 'Cortar cebolla', completed:true},
  {text: 'Tomar el curso de intro a React.js', completed:false},
  {text: 'Llorar con la Llorona', completed:false},
  {text: 'No joda hombeeeeeeeeeee', completed:false},
  {text: 'Comunicar estados', completed:true}, 
];

localStorage.setItem('TODOS_V1', defaultTodos);*/
//localStorage.removeItem('TODOS_V1');


function App() {    
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = react.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos= todos.length;
  const searchedTodos = todos.filter((todo) => {return todo.text.toLowerCase().includes(searchValue.toLowerCase())});  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);  
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);  
  };
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

     <CreateTodoButton />      
    </>
  );
}
export default App;
