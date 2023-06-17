import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const AuthCheck = ({ children }) => {
  const currentUser = useSelector((state) => state.currentUser.data);
  // const [currentUser, setCurrentUser] = useState();
  const loading = useSelector((state) => state.currentUser.loading);
  console.log(currentUser);

  if (loading) {
    return (
      <div className="flex h-full w-full justify-center">
        <h1 className="text-6xl">Loading...</h1>
      </div>
    );
  } else {
    // return <Navigate to="/login" />;
    if (currentUser) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  }
};
export default AuthCheck;
