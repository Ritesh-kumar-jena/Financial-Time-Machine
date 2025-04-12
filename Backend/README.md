
# Financial Time Machine – Backend

## Overview
This is the backend of the **Financial Time Machine** project, a personal finance tool built with Node.js, Express, and MongoDB. The system allows users to manage their finances, project future savings, and track their financial journey over time.

## Features
- User Authentication (Signup, Login, Logout)
- JWT-based Auth Middleware with Token Blacklisting
- Add and Retrieve Financial Records
- Financial Projection for Next 12 Months
- Secure REST API Endpoints
- MongoDB with Mongoose ODM

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT for Authentication
- Bcrypt for Password Hashing
- CORS and Dotenv

## Environment Variables
```env
port=YOUR_PORT
database=YOUR_MONGODB_URL
key=YOUR_JWT_SECRET_KEY
```

## API Endpoints

### User Routes (`/users`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/users/signIn` | Register a new user |
| POST   | `/users/login` | Login and get access tokens |
| GET    | `/users/logout` | Logout and blacklist JWT token |
| PATCH  | `/users/edit/:id` | Update user information |
| DELETE | `/users/delete/:id` | Delete user account |

### Finance Routes (`/finance`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/finance/addFinance` | Add new financial data |
| GET    | `/finance/finance` | Get user’s financial data history |

### Projection Routes (`/projection`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/projection/projection` | Generate 12-month savings projection based on latest data |

## Middleware
- **auth.js** – Middleware to authenticate users using JWT and check for blacklisted tokens

## Database Models
- **User Model** – Stores user credentials (name, email, hashed password)
- **Finance Model** – Stores financial entries (income, expenses, savings, debts)
- **Blacklist Model** – Stores blacklisted JWT tokens for secure logout

## Getting Started
1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file and add your variables
4. Start the server with `npm run dev`

# URL:- https://financial-time-machine-rer6.onrender.com

## Author
[Ritesh Kumar Jena]
