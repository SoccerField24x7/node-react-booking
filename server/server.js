import express from 'express';
import { readdirSync } from 'fs';
require('dotenv').config();

const app = express();

// route middleware
readdirSync('./routes').map((routes) => app.use('/api', require(`./routes/${routes}`)));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
