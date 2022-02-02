import express from 'express';
import { readdirSync } from 'fs';

const app = express();

// route middleware
readdirSync('./routes').map((routes) => app.use('/api', require(`./routes/${routes}`)));

app.listen(8000, () => console.log(`Server is running on port 8000`));
