"Food Delivery App"

Project Description:

A full-stack food delivery app that allows users to browse menus, add items to the cart, and place orders. It also includes an admin interface to manage restaurants, menu items, and customer orders. The app is built using React.js for the frontend, Node.js for the backend, and MongoDB for the database.

Technologies Used:

Frontend: HTML, CSS, JavaScript, React.js

Backend: Node.js, Express.js

Database: MongoDB

Version Control: Git, GitHub

FEATURES:

1. User-friendly interface for browsing restaurants and menus

2. Search and filter functionality to find specific food items

3. Add to cart and checkout process

4. User authentication (login/signup)

5. Order history for users

6. Admin panel to manage restaurants and orders

7. Responsive design for all device sizes (desktop, tablet, mobile)

Project Setup:
Prerequisites
Ensure you have the following installed:

* Node.js
* MongoDB
Installation:

1.Clone the repository:

git clone https://github.com/your-username/food-delivery-app.git

2. Install backend dependencies:

cd backend
npm install

3.Install frontend dependencies:

npm create vite@latest,
project name,
select React, JavaScript,
npm install,
cd front-end,
npm run dev

Environment Variables
Create a .env file in the backend directory with the following variables:

env
Copy code
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret-key
PORT=4000
Running the Application
Start the backend server:

cd backend
npm run server

Start the frontend server:

cd front-end
npm run dev
Open your browser and visit http://localhost:5173 to see the frontend, and http://localhost:4000/api for the backend, and visit http://localhost:5174 to see the admin panel

