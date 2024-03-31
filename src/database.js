import fs from "node:fs/promises";
import { randomUUID } from "node:crypto";

const databasePath = new URL("../db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(databasePath)
      .then((resp) => {
        this.#database = JSON.parse(resp);
      })
      .catch(() => this.#persist());
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database, null, 2));
  }

  insert(table, data) {
    data.id = randomUUID();
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }
    this.#persist();
    return data;
  }

  findById(table, id) {
    if (!Array.isArray(this.#database[table])) {
      throw new Error("Tabela não encontrada");
    }
    const item = this.#database[table].find((v) => v.id === id);
    if (item) {
      return item;
    }
    throw new Error(`${id} não encontrado`);
  }
}
