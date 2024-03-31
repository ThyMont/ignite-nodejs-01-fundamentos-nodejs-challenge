import { Database } from "./database.js";

const database = new Database();

async function insertTask(task) {
  task = await database.insert("tasks", task);
  return task;
}

async function listTasks() {
  const lista = await database.findAll("tasks");
  return lista;
}

async function findTaskById(id) {
  const task = await database.findById("tasks", id);
  return task;
}

async function updateTask(id, { title, description }) {
  const task = await database.findById("tasks", id);
  task.title = title;
  task.description = description;
  const date = new Date();
  task.updatedAt = date;
  await database.update("tasks", task);
  return task;
}

async function deleteTask(id) {
  await database.delete("tasks", id);
}

export default { insertTask, listTasks, findTaskById, updateTask, deleteTask };
