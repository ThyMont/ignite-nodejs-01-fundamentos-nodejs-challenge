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
    const item = this.#database[table].find((v) => v.id === id);
    if (item) {
      return item;
    }
    throw new Error(`${id} não encontrado`);
  }

  findAll(table) {
    console.log(table);
    const lista = this.#database[table];
    if (lista) {
      return lista;
    } else {
      return [];
    }
  }

  update(table, data) {
    const index = this.#database[table].findIndex((v) => v.id === data.id);
    console.log(index);
    if (index > -1) {
      this.#database[table][index] = data;
      this.#persist();
      return data;
    }
    throw new Error(`${data.id} não encontrado`);
  }

  delete(table, id) {
    const index = this.#database[table].findIndex((v) => v.id === id);
    if (index > -1) {
      this.#database[table].splice(index, 1);
      this.#persist();
      return;
    }
    throw new Error(`${id} não encontrado`);
  }
}
