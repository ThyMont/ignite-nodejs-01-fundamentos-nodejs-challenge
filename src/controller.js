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
    console.log(lista);
    return res.writeHead(201).end(JSON.stringify({ data: lista, results: lista.length }));
  } catch (error) {
    return res
      .writeHead(500)
      .end(JSON.stringify({ message: "Não foi possível concluir a transação" }));
  }
}

export default { insertTask, listTasks };
