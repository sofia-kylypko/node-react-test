import React, { useEffect, useState } from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}]);
  // const apiHost = "localhost:5001"; //указать тут адрес деплоя
  const apiHost = 'https://node-react-test-server-2.onrender.com';

  useEffect(() => {
    // fetch("/data").then(
    fetch(`${apiHost}/data`).then(
      response => response.json()
    ).then(
      data => setBackendData(data)
    )
  }, []);

  console.log(backendData);

  return (
    <div>
      App
    </div>
  );
}

export default App;