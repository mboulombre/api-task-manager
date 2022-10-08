const TaskModel = require('../models/task');


    

const createTask = (req, res) => {
    const element = req.body;

        const elementCreate = new TaskModel({
            name: element.name,
            completed: element.completed || false
        })

        elementCreate.save().then((storeData) => {
                if(storeData){
                    res.status(200).json({
                        "status": "Sucess",
                        "data": storeData
                    })
                }
        }).catch((error) => {
            res.json({
                "status": "Error",
                "data": error
            })
        })

};


const getAllTask = async (req, res) => {
    try {
            const allTasks =  await TaskModel.find();
            res.status(200).json({
                "status": "Success",
                "data":  allTasks
            })
            
        } catch (error) {
            res.status(404).json({
                "status": "Error",
                "data":  error
            })   
        }

};

const getOneTask =  async (req, res) => {
    // res.json({"message":"Get one task"})
    const id = req.params.id;

    try {
         const oneElement = await TaskModel.findById(id);
                if(oneElement){
                    res.status(200).json({
                        "statut": "Success",
                        "data": oneElement
                    })
                }

    } catch (error) {
        res.status(404).json({
            "statut": "error",
            "data": "Element was not found."
        })
    }
}
const deleteTask = async (req, res) => {
    const id = req.params.id;
    try {
         const deleteElement =  await TaskModel.findByIdAndDelete(id);
            // console.log("deleteElement: ", deleteElement);
            res.statut(200).json({
                    "statut": "Error",
                    "message": "delete successful",
                    "data": deleteElement
            }) 
    } catch (error) {
            res.status(404).json({
                "statut": "Error",
                "message": "l'ement was not found."
            })
    }
}
const updateTask = async (req, res) => {
    const elementTask = req.boby;
    const id = req.params.id;
   
        try {
                const el = await TaskModel.findByIdAndUpdate({_id: id}, req.boby); 
                    if(el){
                        res.status(200).json({
                            "status": "Success",
                            "message": "updated successful",
                            "data": el
                    })
                    }
        } catch (error) {
                res.status(404).json({
                    'status': "Error",
                    "message": " impossible element was not found."
                })
        }
}



module.exports = {
    getAllTask,
    createTask,
    getOneTask,
    deleteTask,
    updateTask
}