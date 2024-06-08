import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [LoginStatus, setLoginStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [data, setData] = useState([]); // State to hold the fetched data
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [votingOptions, setVotingOptions] = useState(true); // State to track loading status

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6662028563e6a0189fec6e65.mockapi.io/api/users"
      );
      setData(response.data);
      setIsLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching users:", error);
      setIsLoading(false); // Ensure loading is set to false even if an error occurs
    }

    return false;
  };

  const [Page, setPage] = useState(0);

  const check = (user, data) => {
    setVotingOptions(shuffle(["dog", "cat", "cow", "lion"]));

    const result = data.filter((item) => {
      return item.email === user[1] && item.name === user[0];
    });
    setCurrentUser(result);
    return result;
  };

  // Use useEffect to log currentUser whenever it change

  return (
    <AppContext.Provider
      value={{
        check,
        fetchData,
        isLoading,
        isSidebarOpen,
        data,
        Page,
        setPage,
        setCurrentUser,
        currentUser,
        votingOptions
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
