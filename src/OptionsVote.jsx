import React, { useEffect } from "react";
import { useGlobalContext } from "./contex";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OptionsVote = () => {
  const url = "https://6662028563e6a0189fec6e65.mockapi.io/api/users/";

  let {
    check,
    Page,
    setPage,
    fetchData,
    isLoading,
    currentUser,
    setCurrentUser,
  } = useGlobalContext();
  useEffect(() => {
    toast("Notice you have 30 seconds to finish voting", {
      position: "Top-left",
      className: "foo-bar",
      autoClose: 30000,
    });
    // Define the timeout ID
    const timer = setTimeout(() => {
      setPage(0);
    }, 30000);

    // Return a cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, []);

  const user = currentUser[0];

  //here we will send votes
  async function vote(e) {
    e.preventDefault();
    const choice = e.currentTarget.textContent;

    try {
      const result = await axios.put(url + user.id, {
        vote: choice,
      });
      toast.success("your vote succeded!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      user.vote = choice;

      setCurrentUser([user]);
      console.log("updated user", user);
    } catch (error) {
      toast.error("your vote failed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("There was an error updating the user!", error);
    }
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const options = shuffle(["cat", "dog", "lion", "cow"]);

  return (
    <>
      <ToastContainer />
      <div className="voting-options">
        {options.map((item, index) => {
          return (
            <button type="button" className="option" onClick={vote} key={index}>
              {item}
            </button>
          );
        })}
      </div>
      <div className="buttomImage"></div>
    </>
  );
};

export default OptionsVote;
