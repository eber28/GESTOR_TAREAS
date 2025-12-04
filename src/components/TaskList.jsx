import { useState } from "react";

function TaskList({ tasks, toggleTask, deleteTask, updateTask }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editCategory, setEditCategory] = useState("");

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
    setEditDate(task.date);
    setEditCategory(task.category);
  };

  const saveEdit = (id) => {
    updateTask(id, {
      text: editText,
      date: editDate,
      category: editCategory,
    });

    setEditingId(null);
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li className="task-card" key={task.id}>

          {editingId === task.id ? (
            <div className="edit-container">
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />

              <input
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
              />

              <select
                value={editCategory}
                onChange={(e) => setEditCategory(e.target.value)}
              >
                <option value="Trabajo">Trabajo</option>
                <option value="Estudio">Estudio</option>
                <option value="Personal">Personal</option>
                <option value="Hogar">Hogar</option>
              </select>

              <button onClick={() => saveEdit(task.id)}>💾 Guardar</button>
              <button onClick={() => setEditingId(null)}>❌ Cancelar</button>
            </div>
          ) : (
            <>
              <div onClick={() => toggleTask(task.id)}>
                <span className={task.completed ? "task-completed" : ""}>
                  {task.text}
                </span>
                <div className="task-info">
                  <small>📅 {task.date || "Sin fecha"}</small>
                  <small>🏷️ {task.category}</small>
                </div>
              </div>

              <div className="buttons">
                <button onClick={() => startEditing(task)}>✏️</button>
                <button className="btn-delete" onClick={() => deleteTask(task.id)}>
                  ❌
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
