import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
import style from './home.module.css'
import { v4 as uuidv4 } from "uuid"

/* const dummyTodos = [
    {
        id: 1, 
        title: "First Todo",
        desc : "Description of the First todo..."
    },
    {
        id: 2, 
        title: "Second Todo",
        desc : "Description of the Second todo..."
    }
] */
function Home() {
  const [todos, settodos] = useState([]);

  const handleAddTodo = (todo) => {
    // console.log(todo);
    settodos((prev) => {
      return [...prev, { id: uuidv4(), todo }];
    })
    // console.log(todos);
  }

  // const handleRemoveTodo = (id) => {
  // alert(id);
  // const filterTodos = todos.filter((todo) => todo.id !== id);
  //   settodos(filterTodos);
  //   settodos((prevtodos) => {
  //     const filterTodos = prevtodos.filter((todo) => todo.id !== id);
  //     return filterTodos;
  //   })
  // }

  const handleEditTodo = (id, title, desc) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
        todo.desc = desc;
      }
      return todo;
    });
    settodos(updatedTodos);
  }

  const handleRemoveTodo = (id) => {
    settodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      return updatedTodos;
    });
  };
  
  

  return (
    <div className={style.container}>
      <h1 style={{ color: 'white' }}>Todo List App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      {/* <Todos todos={dummyTodos}/> */}
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} handleEditTodo={handleEditTodo} />
    </div>
  )
};

export default Home