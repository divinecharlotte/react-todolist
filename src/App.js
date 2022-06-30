import React,{useState} from 'react';
import'./index.css';

function Todo({todo, index,completeTodo,deleteTodo}) {
  return <div style={{textDecoration:todo.isComlpleted ? 'line-through': ''}} 
  className="todo">{todo.text}
  <div>
    <button onClick = {() => completeTodo(index)}>completed</button>
    <button onClick = {() => deleteTodo(index)}>x</button>
    </div>
  
  </div>
  
}

 function TodoForm({addtodo}) {
const [value,setValue] =useState('');
const handleSubmit = e => {
  e.preventDefault();
  if(!value) return;
  addtodo(value);
  setValue('');

}
    return (
    <form onSubmit={handleSubmit}>
      <input type="text"
       className='input'
        value={value}
        placeholder= "add todo`...."
        onChange ={e => setValue(e.target.value)} />
    </form>
  )
}


function App() {
const [todos,setTodos] = useState([
  {
    text:'learb about React',
    isComlpleted: false
  },
  {
    text:'meet friends',
    isComlpleted: false
  },
  {
    text:'buils my to do project',
    isComlpleted: false
  }

]);
const addTodo = text =>{
  const newTodos =[...todos,{text}];
  setTodos(newTodos);
}
const completeTodo= index =>{
  const newTodos =[...todos];
  newTodos[index].isComlpleted =true;
  setTodos(newTodos);
}
const deleteTodo = index =>{
  const newTodos =[...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);

}
return(
  <div className="app">
    <div className="todo-list">
      {todos.map((todo, index)=> (
        <Todo key={index} 
        index={index} 
        todo ={todo}
         completeTodo={completeTodo} 
         deleteTodo={deleteTodo}/>
      ))}
      <TodoForm addtodo={addTodo}/>
    </div>
  </div>
);
}

export default App
