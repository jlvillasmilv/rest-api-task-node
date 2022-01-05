import Task from '../models/Task';
import { getPagination } from '../libs/getPaginations';

export const findAllTasks = async (req, res) => {
    try {
        const {size, page} = req.query;
        const {limit, offset} = getPagination(page, size);
        const task = await Task.paginate({}, {offset, limit});
        res.json(task);
        
    } catch (error) {
         res.status(500).json({
            message: error.message || 'Error'
        })
    }
    
}

export const createTask = async (req, res) => {
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        done: req.body.done ? req.body.done : false,
        });
    const taskSaved = await newTask.save();
    res.json(taskSaved);

}

export const findOneTask = async (req, res) => {

    try {
        
        const {id} = req.params;
        const task = await Task.findById(id);

        if (!task){
            return res
            .status(404)
            .json({message: 'Task not exist'});

        }
        res.json(task);
        
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error'
        })
    }

    
}

export const deleteTask = async (req, res) => {

    try {

        await Task.findByIdAndDelete(req.params.id);
        res.json({
            msg: `${req.params.id} was successfully deleted.`
        });
        
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error'
        })
    }

   
}

export const findAllDoneTasks = async (req, res) => {
    const tasks = await Task.find({done: true});
    res.json(tasks);
}

export const updateTask = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        msg: `Task ${req.params.id} update successfully.`
    });
}