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

export default { insertTask, listTasks };
