import React from 'react'
import db from './firebase'
import { Button } from '@material-ui/core';

function Todo(props) {

   

    return (
        <div>
             <li>{props.todo.todo}</li>
             <Button type="button" variant="contained"  color="primary" onClick={event=>{db.collection('todos').doc(props.todo.id).delete()}}>Delete</Button>

        </div>
    )
}

export default Todo
