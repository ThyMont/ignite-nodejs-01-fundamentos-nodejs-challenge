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

async function insertTaskCsv(file) {
  try {
    for await (const record of file) {
      // Report current line
      console.log(record);
      // Fake asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    // const date = new Date();
    // task.completedAt = null;
    // task.createdAt = date;
    // task.updatedAt = date;
    // task = await repository.insertTask(task);
    // return task;
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

async function findTaskById(id) {
  try {
    const task = await repository.findTaskById(id);
    return task;
  } catch (error) {
    throw error;
  }
}

async function updateTask(id, taskForm) {
  try {
    const task = await repository.updateTask(id, taskForm);
    return task;
  } catch (error) {
    throw error;
  }
}

async function deleteTask(id) {
  try {
    await repository.deleteTask(id);
  } catch (error) {
    throw error;
  }
}

async function completeTask(id) {
  try {
    const task = await findTaskById(id);
    console.log(task);
    const updatedTask = await repository.completeTask(task);
    return updatedTask;
  } catch (error) {
    throw error;
  }
}

export default {
  insertTask,
  listarTasks,
  findTaskById,
  updateTask,
  deleteTask,
  completeTask,
  insertTaskCsv,
};
