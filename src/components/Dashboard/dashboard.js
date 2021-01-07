import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const authData = useSelector((state) => state.firebase.auth);
  console.log(authData);

  return (
    <div className="flex-wrapper">
      <p> This is the home page</p>
    </div>
  );
};
export default Dashboard;
