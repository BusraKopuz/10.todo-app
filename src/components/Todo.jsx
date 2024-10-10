import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import '../App.css';


function Todo ({todo, büşra, onUpdateTodo}) {
    const {id, content} = todo;

    const [editTable, setEditTable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        büşra(id);
    }

    const updateTodo = () => {

        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditTable(false);
    }


  return (
    <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', border:'1px solid lightgrey', padding:'10px', marginTop:'10px' }}>
        <div>
            {
                 editTable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                 style={{ width:'380px' }} 
                 className='todo-input' type='text'/> : content
            }
           
        </div>
        <div>
            <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
            {
                editTable ? <FaCheck className='todo-icons' onClick={updateTodo} /> 
                
                : <FaEdit className='todo-icons' onClick={()=> setEditTable(true)} />
            }
            
            
        </div>
    </div>
  )
}

export default Todo