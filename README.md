## Summary

The purpose of this was to develop a basic app with CRUD operations.

This means that the app should be able to create, read, upadte and deletes products.

For creating new products, the method used was POST

For reading/getting the products, the method used was GET

For updating the products, the method used was PATCH

For deleting the products, the method used was DELETE

In case of the front end, the app was developed using React Library. Also, some extra libraries were applied to it. Like, React Router,
Material UI and CSS Transition Group.

On the other side, for the back end, it was mainly done with Node JS with use of the Express Framework. Also, for the data base MongoDB was used with the application of Mongoose.

Finally, environmental variables were used for sensitve data

## Endpoints

The available endpoints that can be found are:
'/' -> used for the get and post methods. In case of the former, for retrieving the list of products and for the latter, creating products

'/:pid/view' -> this endpoint is used when the user wants to check a certain product in detail

'/:pid' -> this one was used either for updating and deleting a specific product

## Deployment

Front end -> Firebase https://products-challenge-3eea7.firebaseapp.com/

Back end -> Heroku https://challenge-product.herokuapp.com/

Repo -> Github https://github.com/malks14/challenge-product

## Missing points

The only missing part of this challenge is uploading images to a product.
