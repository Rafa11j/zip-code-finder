import { app } from './infrastructure/server';

app.listen(process.env.PORT || 3333);
