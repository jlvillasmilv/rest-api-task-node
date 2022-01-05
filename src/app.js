import express from "express";
import morgan from "morgan";
import TasksRoutes from "./routes/tasks.routes";
import cors from "cors";

const app = express();

app.use(cors({}))
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use('/api/tasks', TasksRoutes);

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome' });
});

export default app;