import { React, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [credentials, setCredentials] = useState("");
  const moveto = useNavigate();

  const apiHost = "http://localhost:5001";
  // check login

  const handleLogOut = (event) => {
    event.preventDefault();
    fetch(`${apiHost}/clean-credentials`,
      {
        credentials: 'include' // Include cookies in the request
      })
      .then(setCredentials(""))
      .catch(err => console.log('Fetch Error:', err));
  }

  fetch(`${apiHost}/get-credentials`,
    {
      credentials: 'include' // Include cookies in the request
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data); // Check the data received
      setCredentials(data.name);
    })
    .catch(err => console.log('Fetch Error:', err));

  if (credentials == null) {
    moveto("/");
  }

  return (
    <div>
      Home page

      <p>Loged as: {credentials}</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )

}

export default Home