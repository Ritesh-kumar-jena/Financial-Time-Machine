
# Financial Time Machine - Frontend

## 🚀 Overview
This is the frontend of the **Financial Time Machine** project – a personal finance tracker with future savings projection. The app is built using **React** and styled with **Chakra UI**. It communicates with a backend server to manage users, financial entries, and project monthly savings growth based on user data.

## 🔥 Features
- User Authentication (Signup, Login, Logout)
- Add and View Monthly Financial Data (Income, Expenses, Savings, Debts)
- 12-Month Savings Projection based on current financial data
- Auth-protected Routes
- Toast Notifications for UX feedback
- Responsive and Clean UI with Chakra UI

## ⚙️ Technologies Used
- React
- Chakra UI
- Axios
- React Router DOM
- Context API (for Auth management)

## 📦 Folder Structure
```
src/
│
├── components/
│   └── Navbar.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── SignUp.jsx
│   ├── Finance.jsx
│   └── Projection.jsx
│
├── routes/
│   └── AllRoutes.jsx
│
├── App.js
└── index.js
```

## 🌐 Backend API
The frontend communicates with the backend hosted at:  
**`https://financial-time-machine-rer6.onrender.com`**

## 🔐 Authentication
- JWT-based authentication stored in Context API
- Protected routes using custom `<PrivateRoute />` logic (optional)
- Tokens sent via Axios headers for secured access

## 🔗 Available Routes
| Route          | Path              | Description                  |
|----------------|-------------------|------------------------------|
| Home           | `/`               | Landing Page (optional)     |
| Login          | `/login`          | User Login Page             |
| Sign Up        | `/signup`         | Register a new user         |
| Finance        | `/finance`        | Add/View Monthly Finances   |
| Projection     | `/projection`     | 12-Month Projection View    |

## 🌈 Chakra UI Styling
- All UI components are designed using Chakra UI for consistency and responsiveness.
- Custom themes and colors can be added as needed.

## ✅ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/financial-time-machine-frontend.git
cd financial-time-machine-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

### 4. Update API URLs (if needed)
All API requests are made to:
```
https://financial-time-machine-rer6.onrender.com
```

## 📃 Example `.env` (if required)
```env
REACT_APP_BASE_URL=https://financial-time-machine-rer6.onrender.com
```

## 👨‍💻 Author
**Ritesh Kumar Jena**  
Frontend built as part of the Financial Time Machine MERN stack project.
