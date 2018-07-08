import express from 'express';
import apis from './apis';
import route, { router} from './apis/route';
import indexHandler from './apis/handlers';

const app = express();
app.use('/', router);
app.get('/', indexHandler);
apis.forEach( api => route(api.path, api.handler)(api.method) )

app.listen(3000, () => console.log('[DEV] Legoto API backend listening on port 3000!'))
