import React, { useEffect, useState } from "react";
import Login from "./Login";
import axios from "axios";
import { AppProvider, useGlobalContext } from "./contex"; // Ensure the path is correct
import Voting from "./Voting";

function App() {
  let { check, Page, setPage, fetchData, isLoading, currentUser } =
    useGlobalContext();

  useEffect(() => {
    fetchData();
  }, []);

  // Directly render the Voting component with currentUser passed as a prop
  if (Page === 1) {
    return <Voting currentUser={currentUser} />;
  }

  // Render the Login component if Page is not 1 and isLoading is false
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Login />
    </>
  );
}

export default App;
