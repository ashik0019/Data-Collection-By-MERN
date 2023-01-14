import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import configureAllRoutes from './routes/index.js';
import { handleError } from './middlewares/index.js';
// config environment variable
dotenv.config({ path: './.env' });
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// all routes connect
configureAllRoutes(app);

// Handle unmatched routes
app.all('*', (req, res) => {
    return res.status(404).json({ success: false, msg: 'Route not found' });
  });
  
// Handle error
app.use(handleError);

export default app;