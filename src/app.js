//IMPORTACAO COM SUCRASE INVES DE EXL : const express = require("express");
import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
}
// MANEIRA NOVA IMPORTAR COM SUCRASE INVES DE module.exports = new App().server;
export default new App().server

