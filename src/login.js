import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {

  // const [backendData, setBackendData] = useState([{}]);
  const apiHost = "http://localhost:5001"; //указать тут адрес деплоя
  // const apiHost = 'https://node-react-test-server-2.onrender.com';

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const moveto = useNavigate();

  // check if already logged in

  const handleLogin = (event) => {
    axios.defaults.withCredentials = true;
    event.preventDefault();
    axios.get(`${apiHost}/login`, { params: { email, password } })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          moveto('/home');
        } else {
          setErrorMessage(result.data);
        }
      })
      .catch(err => console.log(err));
  };

  // console.log(backendData);

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input onChange={(e) => setEmail(e.target.value)} type='text'></input>
        </label>
        <br />
        <label>
          Password
          <input onChange={(e) => setPassword(e.target.value)} type='password'></input>
        </label>
        <br />
        <button>Submit</button>
      </form>
      <p>{errorMessage}</p>
    </div>
  );

}

export default Login;