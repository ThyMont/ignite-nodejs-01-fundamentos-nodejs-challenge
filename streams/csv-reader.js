import fs from "node:fs";
import { parse } from "csv-parse";
import axios from "axios";

const csvFilePath = new URL("./tasks.csv", import.meta.url);

const csvStream = fs.createReadStream(csvFilePath);

const parser = parse({ delimiter: ",", skip_empty_lines: true, fromLine: 2 });

const urlServer = "http://localhost:3000/tasks";

async function start() {
  const entries = csvStream.pipe(parser);

  for await (const line of entries) {
    const data = { title: line[0], description: line[1] };
    try {
      const response = await axios.post(urlServer, data);
      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Erro na requisição:", error.message);
    }
    await wait(5000);
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

start();
