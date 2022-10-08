const express = require('express');
const router = express.Router();
const {getAllTask, createTask, getOneTask, deleteTask, updateTask} = require('../controllers/task');


router.post("/task", createTask);
router.get("/task", getAllTask);
router.get("/task/:id", getOneTask);
router.delete("/task/:id", deleteTask);
router.put("/task/:id", updateTask);


module.exports = router;
