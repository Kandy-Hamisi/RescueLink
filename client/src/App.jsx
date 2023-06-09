import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <BrowserRouter>
//       <Routes path="/" element={<Home />}>
//         <Route path="login" element={<Login />} />
//         <Route path="signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   )
// );
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
