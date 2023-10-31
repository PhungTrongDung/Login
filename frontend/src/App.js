import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Component/css/App.css';
import SignUp from './Component/signup';
import SignIn from './Component/signin';
import ShowUser from './Component/showuser';

function App() {


  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:3001/signin')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  //     .catch((err) => {
  //       console.log(err.message);

  //     });
  // })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<ShowUser />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
