import repository from "./repository.js";

async function insertTask(task) {
  try {
    const date = new Date();
    task.completedAt = null;
    task.createdAt = date;
    task.updatedAt = date;
    task = await repository.insertTask(task);
    return task;
  } catch (error) {
    throw error;
  }
}

async function listarTasks() {
  try {
    const lista = await repository.listTasks();
    return lista;
  } catch (error) {
    throw error;
  }
}

export default { insertTask, listarTasks };
