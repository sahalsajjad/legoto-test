import {Router} from 'express';
import apis from '.';
import indexHandler from './handlers';

export const GET    = 'GET';
export const POST   = 'POST';
export const PUT    = 'PUT';
export const DELETE = 'DELETE';

const router = Router();
export {router};

export const route = (expression, handler) => method => {
    if (expression === "/") {
      return router.get("/", indexHandler)
    }

    switch (method) {
      case GET:
        return router.get(expression, handler)

      case POST:
        return router.post(expression, handler)

      case PUT:
        return router.put(expression, handler)

      case DELETE:
        return router.delete(expression, handler)

      default:
        // Instead of error, we are returning the dir of endpoints
        return router.get('/', indexHandler)
    }
}

export default route;
