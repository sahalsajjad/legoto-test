# Legoto (Sample API) for hiring challenge

----
## The scope of this API
This API is intended as submission for Legoto hiring challenge. Tests are not written, and is only tested with Postman SDK.

## The Data model
There are 3 main data entities used for this challenge.

1. Users
2. Products
3. Reviews

Document collection is used for storing **users** and **products** with bare minimum fields, intended for demonstration purpose only. **Reviews** are stored in a graph (**reviews_graph**), whose edges stored in a edgesCollection named reviewed is defined from **Users** to **Products**.

##### Users

- username
- fullname
- country
- memberSince

##### Products
- name
- country
- category

##### Reviewed
- (from) Users
- (to) Products
- rating

There are **100** documents in the **products** collection and there are **200** documents in the **users** collection.
**10,113** edges are present in the **reviewed** edgeCollection of the **reviews_graph** each representing a review made by a user on a particular product.

## API Docs
###### Index Route
> /


Lists all endpoints.


    "endpoints": [
        {
            "path": "/products",
            "description": "[GET] Get all products"
        },
        {
            "path": "/products/:id",
            "description": "[GET] Get a product by id"
        },
        {
            "path": "/products/:id/reviews",
            "description": "[GET] Get all reviews for this product "
        },
        {
            "path": "/users",
            "description": "[GET] Get all users"
        },
        {
            "path": "/users/:id",
            "description": "[GET] Get a user"
        },
        {
            "path": "/users/:id/reviews",
            "description": "[GET] Get all reviews made by the user"
        },
        {
            "path": "/reviews"
        }
    ]

###### Products
> /products

*Lists all products. Pagination is not implemented*

> /products/:id

> eg: /products/230422

*One product matching the id is returned*
> /products/:id/reviews


*Lists all reviews written on that product with that particular id*

###### Users
> /users

*Lists all users.*

> /users/:id

> eg: /users/238056

*One particular user matching the id is returned*
> /users/:id/reviews


*Lists all reviews written by this particular user  with the id*

> /reviews


*Lists all products with their average rating*

## Hosted version
You don't have to set anything up. Just start testing the api by visiting http://ec2-54-175-222-120.compute-1.amazonaws.com:3000/

either with a tool like POSTMAN or the browser.

## Setting up
This project makes the following assumptions:


DBNAME = "legoto"

DBPASS = ""

DBUSER = "legoto"

#### Generating data
In the ArangoDB web interface, create two collections (document store) named **users** and **products** respectively. Create an edge collection named **reviewed** with _from edge (users) and _to edge (products). Then, proceed to creating a graph named **reviews_graph**.
And now you can import the data files in json format located at folder **data**.
Please Note that queries depend on the actual exact names of collections as specified above.

#### Running locally
cd to the directory containing the legoto project, and run `npm run start`. If everything works as expected, you should see
`[DEV] Legoto API backend listening on port 3000!
`


### Acknowledgement
The dummy data used in this solution is obtained from free data provided by *generatedata.com*
