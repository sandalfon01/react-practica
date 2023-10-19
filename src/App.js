import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import react from 'react';


const defaultTodos =[
  {text: 'Cortar cebolla', completed:true},
  {text: 'Tomar el curso de intro a React.js', completed:false},
  {text: 'Llorar con la Llorona', completed:false},
  {text: 'No joda hombeeeeeeeeeee', completed:false},
  {text: 'Comunicar estados', completed:true}, 
];

function App() {
  const [todos, setTodos] = react.useState(defaultTodos);
  const [searchValue, setSearchValue] = react.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos= todos.length;

  const searchedTodos = todos.filter((todo) => {return todo.text.toLowerCase().includes(searchValue.toLowerCase())});

  console.log('los usuarios estan buscando todos de ' + searchValue);
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
          
          />
        ))}
      </TodoList>

     <CreateTodoButton />      
    </>
  );
}
export default App;
