import react from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

//localStorage.removeItem('TODOS_V1');
/*const defaultTodos =[
  {text: 'Cortar cebolla', completed:true},
  {text: 'Tomar el curso de intro a React.js', completed:false},
  {text: 'Llorar con la Llorona', completed:false},
  {text: 'No joda hombeeeeeeeeeee', completed:false},
  {text: 'Comunicar estados', completed:true}, 
];

localStorage.setItem('TODOS_V1', defaultTodos);*/


function App() {    
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
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
    <AppUI
      loading={loading}
      error={error}    
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}    
    />
  );
}
export default App;
