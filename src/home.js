import { React, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [credentials, setCredentials] = useState({});
  const moveto = useNavigate();

  const apiHost = "http://localhost:5001";
  // check login
  const authStatus = () => {
    axios.get(`${apiHost}/check-session`, { withCredentials: true })
      .then(result => {
        // if(result.data.loggedIn === false){
        //   moveto('/');
        // } else {
          console.log(result);
          // return true;
        // }
        // setCredentials(result.data.user);
      })
      .catch(err => console.log(err));
      return false;
  }

  const handleLogOut = (event) => {
    event.preventDefault();
    console.log(1);
  }

  if(authStatus) {
    authStatus();
    return (
      <div>
        Home page
  
        <p>Loged as: </p>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    )
  } else{
    return (
      <div>
        Not logged in
      </div>
    )
  }
}

export default Home