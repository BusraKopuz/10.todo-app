import React, { useState } from 'react'

import '../App.css';

function TodoCreate({ onCreateTodo }) { //artık buradaki props değerimiz createTodo fonk. gösteryor.

    const [newTodo, setNewTodo] = useState('');

    const clearInput = ()=> {
        setNewTodo('');
    }

    const createTodo = () => { //onclik olunca bu foknsiyone gel
        if (!newTodo) return; // ekrandan hiçbir değer girilmemişse ekleme yapma

        const request = { //eğer değer girildiyse bir id oluştur
            id: Math.floor(Math.random() * 9999999999),
            content: newTodo //contentede ekrandan girilen değeri koy
        }

        onCreateTodo(request); // daha sonra bu fonksiyonu çağır
        clearInput();
    }
  return (
    <div className='todo-create'>
        <input
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}
        className='todo-input' type="text" placeholder='Todo giriniz' />
        <button onClick={createTodo} className='todo-create-button '>Todo Oluştur</button>
    </div>
  )
}

export default TodoCreate