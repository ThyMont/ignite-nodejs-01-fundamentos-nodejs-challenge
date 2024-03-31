import service from "./service.js";

async function insertTask(req, res) {
  const task = req.body;
  const { title, description } = task;
  if (!title || !description) {
    return res
      .writeHead(400)
      .end(JSON.stringify({ message: "'title' e 'description' são obrigatórios" }));
  }
  try {
    await service.insertTask(task);
    return res.writeHead(201).end(JSON.stringify(task));
  } catch (error) {
    return res
      .writeHead(500)
      .end(JSON.stringify({ message: "Não foi possível concluir a transação" }));
  }
}

async function listTasks(req, res) {
  try {
    const lista = await service.listarTasks();
    return res.writeHead(201).end(JSON.stringify({ tasks: lista, results: lista.length }));
  } catch (error) {
    return res
      .writeHead(500)
      .end(JSON.stringify({ message: "Não foi possível concluir a transação" }));
  }
}

async function findTaskById(req, res) {
  try {
    const { id } = req.params;
    const task = await service.findTaskById(id);
    return res.writeHead(201).end(JSON.stringify(task));
  } catch (error) {
    return res
      .writeHead(500)
      .end(JSON.stringify({ message: "Não foi possível concluir a transação" }));
  }
}

async function updateTask(req, res) {
  try {
    const taskForm = req.body;
    const { title, description } = taskForm;
    if (!title || !description) {
      return res
        .writeHead(400)
        .end(JSON.stringify({ message: "'title' e 'description' são obrigatórios" }));
    }
    const { id } = req.params;
    const task = await service.updateTask(id, taskForm);
    return res.writeHead(201).end(JSON.stringify(task));
  } catch (error) {
    return res.writeHead(500).end(JSON.stringify({ message: error.message }));
  }
}

async function deleteTask(req, res) {
  try {
    const { id } = req.params;
    await service.deleteTask(id);
    return res.writeHead(204).end();
  } catch (error) {
    return res.writeHead(500).end(JSON.stringify({ message: error.message }));
  }
}

export default { insertTask, listTasks, findTaskById, updateTask, deleteTask };
