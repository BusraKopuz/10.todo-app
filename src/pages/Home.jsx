import React, { useState } from 'react'
import TodoCreate from '../components/TodoCreate'
import TodoList from '../components/TodoList'

import '../App.css';


function Home() {

    const [todos, setTodos] = useState([]);   //todoları toplayabilmek için bir state tanımladık. Bunu bütün componentlerimin göreceği app componentinde tanımladım.

    const createTodo = (newTodo) => {    // daha sonra todoyu oluşturacak bir fonksiyon yazdık
        setTodos([...todos, newTodo]); // elimdeki todo dizisini aç üstüne yenisini ekle
    }

    const removeTodo = (todoId) => {
        setTodos([...todos.filter((todo)=> todo.id!==todoId)]);
    }

    const updateTodo = (newTodo) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id !== newTodo.id) {
                return todo;
            }
            return newTodo;
        })

        setTodos([...updatedTodos]);
    }

    console.log(todos);
  return (
    <div className='App'>
        <div className='main'>
            <TodoCreate onCreateTodo = {createTodo} /> 
            {/* createTodo fonksiyonuna bu componentin erişebilmesi için onu onCreateTodo propsuyla buraya geçtik */}
            <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
            {/* todo listesine ihtiyaç olduğu için buradaki todosları todoslara prop geçtik */}
        </div>
    </div>  
  )
}

export default Home