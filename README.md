# MERN E-commerce App

## Used Packages (npm)

### For Frontend (client & admin)

- syled-components
- @mui/material
- @emotion/react
- @emotion/styled
- @mui/icons-material
- react-router-dom
- react-stripe-checkout
- axios
- react-redux
- @reduxjs/toolkit
- dotenv
- redux-persist
- timeago.js
- firebase

### For Backend

MongoDB used for creating database.
Stripe for payment service provider.

- express
- mongoose
- dotenv
- nodemon
- crypto-js
- jsonwebtoken
- stripe
- cors

## E-Commerce Application Client Usage

To be able to login please enter:

email: test@abc.com

password: test

- If desired, you can register a new user and login with that user.
- The products selected from the home page are added directly to the Cart. If desired, color, number and size can be selected from each product's specific page and can be added to the Cart.
- Each homepage button (like SHOW ALL or SHOP NOW) leads to that category's page.
- Color and size are selected and filtered from Filter Products.
- In the Sort Products section, the prices of the products can be sorted as ascending and descending.
- With Sign Out, it is possible to log out by deleting user items from localStorage.
- An order is created by making a stripe payment with the checkout button on the cart page. For each order, the token created when the user logs in must be verified.

### When testing interactively of stripe payment:
- Use a card number, such as 4242 4242 4242 4242.
- Use a valid future date, such as 12/34.
- Use any three-digit CVC (four digits for American Express cards).
- Use any value you like for other form fields.
- After the payment process is successful, it is directed to the Success page. In case of successful order, Order Number(id) appears on the screen. With the Go to Homepage button, redirection is made and the cart is cleared.
