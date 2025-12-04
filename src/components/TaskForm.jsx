import { useState } from "react";

function TaskForm({ addTask }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Personal");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask({
      id: Date.now(),
      text,
      date,
      category,
      completed: false,
    });

    setText("");
    setDate("");
    setCategory("Personal");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Trabajo">Trabajo</option>
        <option value="Estudio">Estudio</option>
        <option value="Personal">Personal</option>
        <option value="Hogar">Hogar</option>
      </select>

      <button className="btn-add">Agregar</button>
    </form>
  );
}

export default TaskForm;
