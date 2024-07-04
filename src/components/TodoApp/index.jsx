// TodoApp.js
import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList'; // Import the TodoList component
import './index.css';

function TodoApp() {
  // State variables to manage todos and completed todos
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState('');
  const [currentEditedItem, setCurrentEditedItem] = useState('');

  // Fetch todos and completed todos from local storage on component mount
  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem('todolist'));
    const savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));

    if (savedTodo) setTodos(savedTodo);
    if (savedCompletedTodo) setCompletedTodos(savedCompletedTodo);
  }, []);

  // Function to add a new todo
  const handleAddTodo = () => {
    if (!newTitle.trim() || !newDescription.trim()) return;

    const newTodoItem = { title: newTitle, description: newDescription };
    const updatedTodoArr = [...allTodos, newTodoItem];

    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
    setNewTitle(''); // Reset title input
    setNewDescription(''); // Reset description input
  };

  // Function to delete a todo by index
  const handleDeleteTodo = (index) => {
    const reducedTodo = allTodos.filter((_, idx) => idx !== index);

    setTodos(reducedTodo);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
  };

  // Function to mark a todo as complete
  const handleComplete = (index) => {
    const now = new Date();
    const completedOn = now.toLocaleString();

    const filteredItem = { ...allTodos[index], completedOn };
    const updatedCompletedArr = [...completedTodos, filteredItem];

    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index); // Delete the todo from the current list
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
  };

  // Function to delete a completed todo by index
  const handleDeleteCompletedTodo = (index) => {
    const reducedTodo = completedTodos.filter((_, idx) => idx !== index);

    setCompletedTodos(reducedTodo);
    localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
  };

  // Function to start editing a todo
  const handleEdit = (index, item) => {
    setCurrentEdit(index);
    setCurrentEditedItem(item);
  };

  // Function to update the title of the currently edited todo
  const handleUpdateTitle = (value) => {
    setCurrentEditedItem((prev) => ({ ...prev, title: value }));
  };

  // Function to update the description of the currently edited todo
  const handleUpdateDescription = (value) => {
    setCurrentEditedItem((prev) => ({ ...prev, description: value }));
  };

  // Function to save the updated todo
  const handleUpdateToDo = () => {
    const newToDo = [...allTodos];
    newToDo[currentEdit] = currentEditedItem;

    setTodos(newToDo);
    localStorage.setItem('todolist', JSON.stringify(newToDo));
    setCurrentEdit('');
  };

  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        {/* Input section for adding new todos */}
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="What's the task title?"
            />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="What's the task description?"
            />
          </div>
          <div className="todo-input-item">
            <button
              type="button"
              onClick={handleAddTodo}
              className="primaryBtn"
            >
              Add
            </button>
          </div>
        </div>

        {/* Toggle buttons for Todo and Completed screens */}
        <div className="btn-area">
          <button
            className={`secondaryBtn ${!isCompleteScreen && 'active'}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen && 'active'}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        {/* TodoList component */}
        <TodoList
          isCompleteScreen={isCompleteScreen}
          allTodos={allTodos}
          completedTodos={completedTodos}
          currentEdit={currentEdit}
          currentEditedItem={currentEditedItem}
          handleDeleteTodo={handleDeleteTodo}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
          handleUpdateTitle={handleUpdateTitle}
          handleUpdateDescription={handleUpdateDescription}
          handleUpdateToDo={handleUpdateToDo}
          handleDeleteCompletedTodo={handleDeleteCompletedTodo}
        />
      </div>
    </div>
  );
}

export default TodoApp;
