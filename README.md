# Authorisation System Frontend With Reactjs
This is the frontend of an authorization system developed using **React.js**, designed for user registration and login functionalities. This project communicates with a backend server built with **Django** and **PostgreSQL** to authenticate users and handle sessions.

## Features

- **User Registration**: New users can register by entering their details.
- **User Login**: Existing users can log in with their email and password.
- **Token-based Authentication**: Secure communication with the backend via tokens.
- **Responsive Design**: Works seamlessly on all screen sizes.

### Axios

Axios is used to handle HTTP requests to the backend.

### User Login

For user login, this function sends a POST request to the `/login` endpoint. The backend responds with a token used for authenticated requests.

```javascript
const loginUser = async (loginData) => {
    try {
        const response = await axios.post('/login', loginData);
        const { token } = response.data;
        localStorage.setItem('authToken', token);
        console.log('Login successful');
    } catch (error) {
        console.error('Error logging in:', error.response.data);
    }
};
```

## Folder Structure

```plaintext
src/
├── endpoints/    # API
├── routes/       # Application pages (Login, Register, Dashboard)
├── App.js         # Main App component
└── index.js       # Entry point
