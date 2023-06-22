
import { useState } from "react";

const Todo = ({todo, removeTodo, completyTodo}) => {


    return ( 
            <div className="todo" style={{backgroundColor : todo.isCompleted ? '#2E692A' : ''}}>
              <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
              </div>
              <div>
                <button onClick={() => completyTodo(todo.id)} className="complete">Completar</button>
                <button onClick={() => removeTodo(todo.id)} className="delete">X</button>
              </div>
            </div>
      );
}
 
export default Todo;