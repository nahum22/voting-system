import React from "react";
import { useGlobalContext } from "./contex";
import axios from "axios";
const OptionsVote = () => {
  const url = "https://6662028563e6a0189fec6e65.mockapi.io/api/users/";

  let { check, Page, setPage, fetchData, isLoading, currentUser } =
    useGlobalContext();

  const user = currentUser[0];
  console.log(user);
  user.vote = 20;

  //here we will send votes
  async function vote(e) {
    const choice = e.target.textContent;

    try {
      // Replace 'your-api-endpoint' with the actual endpoint URL
      const result = await axios.put(url + user.id, {
        vote: choice,
      });
      // Assuming setResponse is a function to manage state in your component
    } catch (error) {
      console.error("There was an error updating the user!", error);
      // Optionally, handle the error in a way that's meaningful for your app
    }
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const options = shuffle(["cat", "dog", "lion", "cows"]);

  return (
    <>
      <div className="voting-options">
        {options.map((item, index) => {
          return (
            <button type="button" className="option" onClick={vote} key={index}>
              {item}{" "}
            </button>
          );
        })}
      </div>
      <div className="buttomImage"></div>
    </>
  );
};

export default OptionsVote;
