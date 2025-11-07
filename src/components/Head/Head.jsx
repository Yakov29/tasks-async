import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTask, deleteTask, getTasks } from "../../redux/thunks/thunks";
import { filterTaskAction } from "../../redux/reducer";

import "./Head.css";

const Head = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.tasks);

  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleAdd = () => {
    const title = inputValue.trim();
    if (!title) return;

    const newTask = {
      title,
      completed: false,
    };

    dispatch(postTask(newTask));
    setInputValue("");
  };

  const handleRemove = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(filterTaskAction(filterValue));
  };

  const filteredTasks = filter
    ? tasks.filter((task) =>
        task.title.toLowerCase().includes(filter.toLowerCase())
      )
    : tasks;

  return (
    <header className="header">
      <div className="header__add-task">
        <input
          className="header__input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Назва таску"
        />
        <button onClick={handleAdd}>Додати</button>
      </div>

      <form className="header__filter" onSubmit={handleFilter}>
        <h3>Фільтр</h3>
        <input
          type="text"
          placeholder="text"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
        <button type="submit">Фільтрувати</button>
      </form>

      <div className="header__tasks">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <span>{task.title}</span>
            <button onClick={() => handleRemove(task.id)}>✖️</button>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Head;
