import { Home } from "./pages";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Programs from "./pages/Programs";
import { Provider } from "react-redux";
import store from "./app/Store/store";
import { Route, Routes } from "react-router-dom";
// import AuthCheck from "./app/Features/AuthCheck";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
