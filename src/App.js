import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './routes/Login';
import Main from './routes/Main';
import RegisterPage from './routes/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </Router>
  );
}

export default App;
