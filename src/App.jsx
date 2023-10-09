import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Task } from "./Task";
function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <>
      <div className="addTask">
        <input
          type="search"
          onChange={handleNewTask}
          className="form-control"
          placeholder="Dalagaa asitti barreessi..."
        />
        <button className="btn btn-primary mt-3" onClick={addTask}>
          {"Dalagaa Ida'i"}
        </button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return (
            <Task
              key={key}
              id={task.id}
              taskName={task.taskName}
              completed={task.completed}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
