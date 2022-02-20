import express from 'express';
import { readdirSync } from 'fs';
const morgan = require('morgan');
import cors from 'cors';
import mongoose from 'mongoose';
require('dotenv').config();

const app = express();

//db connection
mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
        // useCreateIndex: true
    })
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log('DB Connection Error: ', err));

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// route middleware
readdirSync('./routes').map((routes) => app.use('/api', require(`./routes/${routes}`)));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
