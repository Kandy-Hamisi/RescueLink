import { useContext } from "react";
import { authContext, useAuthContext } from "../context/UserContext";

const AuthCheck = ({ children }) => {
  const authContext = useAuthContext();
  if (!authContext.currentUser) {
    //if the user is not logged in or when currentUser object is null, redirect to login page
    // return Router.push("/login");
  }
  //   return router.push("/home");
};

export default AuthCheck;
