import { Database } from "./database.js";

const database = new Database();

async function insertTask(task) {
  task = await database.insert("tasks", task);
  return await task;
}

export default { insertTask };
