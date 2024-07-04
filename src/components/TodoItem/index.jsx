// Todo.js
import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import './index.css'

function Todo({
  index,
  item,
  isEditing,
  currentEditedItem,
  handleDeleteTodo,
  handleComplete,
  handleEdit,
  handleUpdateTitle,
  handleUpdateDescription,
  handleUpdateToDo,
}) {
  return isEditing ? (
    <div className="edit__wrapper">
      <input
        placeholder="Updated Title"
        onChange={(e) => handleUpdateTitle(e.target.value)}
        value={currentEditedItem.title}
      />
      <textarea
        placeholder="Updated Description"
        rows={4}
        onChange={(e) => handleUpdateDescription(e.target.value)}
        value={currentEditedItem.description}
      />
      <button type="button" onClick={handleUpdateToDo} className="primaryBtn">
        Update
      </button>
    </div>
  ) : (
    <div className="todo-list-item">
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>

      <div>
        <AiOutlineDelete
          className="icon"
          onClick={() => handleDeleteTodo(index)}
          title="Delete?"
        />
        <BsCheckLg
          className="check-icon"
          onClick={() => handleComplete(index)}
          title="Complete?"
        />
        <AiOutlineEdit
          className="check-icon"
          onClick={() => handleEdit(index, item)}
          title="Edit?"
        />
      </div>
    </div>
  );
}

export default Todo;
