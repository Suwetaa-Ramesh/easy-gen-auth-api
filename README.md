# Auth API with NestJS and TypeScript

This project is an authentication API built using [NestJS](https://nestjs.com/) and TypeScript. It supports user registration, login, and JWT-based authentication. The API also integrates Swagger for easy access to documentation.

## Getting Started

### Step 1: Clone the repository

Clone the repository to your local machine.

```bash
git clone https://github.com/yourusername/auth-api-nestjs.git
cd auth-api-nestjs
```

### Step 2: Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### Step 3: Configure MongoDB URI 
Before running the application, you need to connect it to a MongoDB database. 

A. **Using MongoDB Atlas (Cloud Database)**

 ***Create a MongoDB Atlas account***:  
   Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), create a new cluster, and generate a **database user** and **connection URI**.

 ***Copy the MongoDB URI***:  
   After setting up, copy the connection string from Atlas (it will look like this):

   ```bash
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase
   ```

B. **Using Local MongoDB (Local Instance)**

   Configure and get MongoDB Connection URI for Local Use:

### Step 4: Configure environment variables

Create a .env file in the root of the project and add the following environment variables.

```bash
MONGODB_DB_URI=<connectionString>
JWT_SECRET_KEY=secretKey
REACT_BASE_URL=http://localhost:5173

```
- MONGODB_DB_URI → The MongoDB connection string (Atlas or local).

- JWT_SECRET_KEY → Secret key for JWT authentication. Use a strong, unique value.

- REACT_BASE_URL → The frontend application’s base URL (default: http://localhost:5173).

 Replace <Your MongoDB URI here> with the MongoDB URI you generated in the steps above.

### Step 4: Generate TypeScript build

```bash
npm run build
```

### Step 5: Run the application

```bash
npm run start:dev
```

Your API will be running on http://localhost:3000.

### Step 6: Access Swagger Documentation

Once the API is running, you can access the API documentation via Swagger UI by navigating to:

```bash
http://localhost:3000/api

```