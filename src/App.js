import React, { useEffect, useState } from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/data").then(
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