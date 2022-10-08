const taskRoute = require("./task");
const routes = require('express').Router();

routes.use('/api/v1', taskRoute);


module.exports =  routes;
