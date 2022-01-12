import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <>
        
      <div className='Homepage'>
        <h1>
          Assignment 4
        </h1>
        <div className='loginsection'>
          <h3>Already a user?</h3>
          <br />
          <Link to='/login'><button className='btn-btn-secondary'>Login</button></Link>
        </div>
        <div className='registersection'>
          <h3>New user? Please register</h3>
          <br />
          <Link to='/register'><button className='btn-btn-secondary'>Register</button></Link>
        </div>
      </div>
    </>

  );
}

export default App;
