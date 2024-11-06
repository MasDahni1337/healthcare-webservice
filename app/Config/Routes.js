const express = require("express");
const App = require("../Config/App.js");
const group = require("routergroup");
/**
 * Express Routes class for defining API routes.
 * @class
 * @extends App
 */
class Routes extends App {
  /**
   * Constructs a new Routes object.
   * Creates a new instance of the UsersController and HomeController.
   */
  constructor() {
    super();
    this.test = new this.TestController();
    this.product = new this.ProductController();
  }
  /**
   * Defines the routes for the API.
   * @returns {Routes} An instance of the Express router containing the defined routes.
   */
  defineRoutes() {
    const routes = express.Router();
    routes.use(group("/test", routes => {
      routes.get("/token", this.test.checkToken.bind(this.test));
    }));
    routes.use(group("/product", routes => {
      routes.get("/price", this.product.price.bind(this.product));
      routes.get("/detail", this.product.detail.bind(this.product));
      routes.get("/list", this.product.list.bind(this.product));
    }));
    return routes;
  }
}

module.exports = Routes;