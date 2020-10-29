import React ,{ useState ,useEffect } from 'react';
import { Button , TextField } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase';

function App() {
  // Declare a new state variable, which we'll call "todos" it will hold todo list
  const [todos, setTodos] = useState(['study react','study react hook']);
  // new state for input field
  const [input, setInput] = useState('');

  // when ever app loaded fetch todo list from databas
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({id:doc.id , todo: doc.data().todo})
        
      
      ))
    })
    // return () => {
    //   // cleanup
    // }
  }, [])
  
const addTodo=(event)=>{
    event.preventDefault();
     db.collection('todos').add({
       todo:input,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })   

      setInput('');
   
    
  }
  return (
    <div className="App">
     <h1>Todo App</h1>

      <form>
    
      <TextField value={input} id="standard-basic" label="Add todo" onChange={event=>setInput(event.target.value)}/>
      <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>Add</Button>
      </form>
      <ul>
        {todos.map(todo=>(
         <Todo todo={todo}></Todo>
        ))}
      </ul>

    </div>
  );

}

export default App;
