import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./Components/SignUpForm";
import { selectUser } from "./features/userSlice";
import Homepage from "./Pages/Homepage";

function App() {

  const user = useSelector(selectUser);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={user ? <Homepage /> : <SignUpForm />} />
          <Route path="/Homepage" exact element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
