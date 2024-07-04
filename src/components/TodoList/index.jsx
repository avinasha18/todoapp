// TodoList.js
import React from 'react';
import Todo from '../TodoItem';
import './index.css'
import { AiOutlineDelete } from 'react-icons/ai';

function TodoList({
  isCompleteScreen,
  allTodos,
  completedTodos,
  currentEdit,
  currentEditedItem,
  handleDeleteTodo,
  handleComplete,
  handleEdit,
  handleUpdateTitle,
  handleUpdateDescription,
  handleUpdateToDo,
  handleDeleteCompletedTodo,
}) {
  return (
    <div className="todo-list">
      {!isCompleteScreen
        ? allTodos.map((item, index) => (
            <Todo
              key={index}
              index={index}
              item={item}
              isEditing={currentEdit === index}
              currentEditedItem={currentEditedItem}
              handleDeleteTodo={handleDeleteTodo}
              handleComplete={handleComplete}
              handleEdit={handleEdit}
              handleUpdateTitle={handleUpdateTitle}
              handleUpdateDescription={handleUpdateDescription}
              handleUpdateToDo={handleUpdateToDo}
            />
          ))
        : completedTodos.map((item, index) => (
            <div className="todo-list-item" key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>
                  <small>Completed on: {item.completedOn}</small>
                </p>
              </div>

              <div>
                <AiOutlineDelete
                  className="icon"
                  onClick={() => handleDeleteCompletedTodo(index)}
                  title="Delete?"
                />
              </div>
            </div>
          ))}
    </div>
  );
}

export default TodoList;
