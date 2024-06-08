import OptionsVote from "./OptionsVote";
import "./voting.css";
import { AppProvider, useGlobalContext } from "./contex";
import { useEffect } from "react";
const Voting = (currentUser) => {
  const name = currentUser.currentUser[0].name;
  const vote = currentUser.currentUser[0].vote;
  console.log(vote);
  let message = "pending for vote";
  if (["cat", "dog", "cow", "lion"].includes(vote)) {
    message = `you have voted for ${vote}`;
  }

  return (
    <div className="voterInterface">
      <h1> welcome user to our votins system</h1>
      <h1>your voting status is:{message}</h1>
      <OptionsVote />
    </div>
  );
};

export default Voting;
