import express, {Request, Response} from 'express';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);



app.listen(4000, () => console.log("Server running on port 4000!"));