import users from './handlers/users';
import products from './handlers/products';
import reviews from './handlers/reviews';

export const GET    = 'GET';
export const POST   = 'POST';
export const PUT    = 'PUT';
export const DELETE = 'DELETE';

export const apis= [

  {
    method:GET,
    path:"/products",
    description:"[GET] Get all products",
    handler:products.getAll
  },

  {
    method:GET,
    path:"/products/:id",
    description: "[GET] Get a product by id",
    handler: products.getProduct
  },
  {
    method:GET,
    path:"/products/:id/reviews",
    description: "[GET] Get all reviews for this product ",
    handler: products.getAllReviews
  },
  //"/reviews":"",
  {
    method:GET,
    path:"/users",
    description:"[GET] Get all users",
    handler:users.getAll
  },

  {
    method:GET,
    path:"/users/:id",
    description: "[GET] Get a user",
    handler: users.getUser
  },

  {
    method:GET,
    path:"/users/:id/reviews",
    description:"[GET] Get all reviews made by the user",
    handler: users.getAllReviewsMade
  },
  {
    method:GET,
    path:"/reviews",
    description:"[GET] Get all reviews for products with average rating."+
     " Note: The average needs to be rounded to one decimal at front end logic.",
    handler:reviews.getOverall
  }
];

export default apis;
