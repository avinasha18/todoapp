# Todo App

Welcome to the Todo App! This is a simple and intuitive application to help you keep track of your tasks. You can add new todos, mark them as completed, and delete them as needed. The app saves your tasks locally so they persist even after you close the browser.

## Features

- **Add Todos**: Create new tasks with a title and description.
- **Edit Todos**: Modify the details of your existing tasks.
- **Delete Todos**: Remove tasks that you no longer need.
- **Complete Todos**: Mark tasks as completed and move them to the completed list.
- **Persist Data**: All tasks are saved in your browser's local storage.

## How to Use

1. **Clone the Repository**: Start by cloning this repository to your local machine.
    ```bash
    git clone https://github.com/avinasha18/todo-app.git
    ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies.
    ```bash
    cd todo-app
    npm install
    ```

3. **Run the App**: Start the development server to run the app.
    ```bash
    npm start
    ```

4. **Open in Browser**: Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Project Structure

The app is divided into a few main components:

- **TodoApp**: This is the main component that manages the overall state and logic of the app.
- **TodoList**: This component is responsible for displaying the list of todos or completed todos.
- **Todo**: This component handles the rendering and editing of individual todos.

### TodoApp Component

This is where all the state management happens. It keeps track of all todos, completed todos, and the current todo being edited. It also handles adding, deleting, and completing todos.

### TodoList Component

This component takes care of displaying the list of todos. Depending on the current view (all todos or completed todos), it renders the appropriate list.

### Todo Component

This component renders an individual todo item. It handles the display, deletion, and editing of a single todo.

## Code Explanation

Each component is well-commented to help you understand what each part of the code does. Here are some highlights:

- **Adding a Todo**: When you add a new todo, it gets saved to the `allTodos` state and also to local storage.
- **Editing a Todo**: You can edit the title and description of an existing todo. The updated todo is saved back to the state and local storage.
- **Completing a Todo**: When you mark a todo as complete, it's moved from the `allTodos` list to the `completedTodos` list with a timestamp.
- **Persisting Data**: The app uses local storage to save your todos and completed todos. This means your tasks will be there even if you refresh the page or close the browser.

## Local Storage

The app uses the browser's local storage to save your tasks. This ensures that your todos are always available, even if you close the browser or refresh the page.

## Feedback and Contributions

Feel free to fork this repository and make your changes. If you have any suggestions or improvements, don't hesitate to create a pull request or open an issue. Your feedback is greatly appreciated!

## License

This project is open-source and available under the MIT License. Feel free to use and modify it as you see fit.

---

That's it! Enjoy using the Todo App, and happy coding!
