import { config } from 'dotenv';
import e, { Application, NextFunction, Request, Response } from 'express';

config();

const app: Application = e();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Express server with TypeScript');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});