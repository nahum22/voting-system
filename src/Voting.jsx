import OptionsVote from "./OptionsVote";
import "./voting.css";
import { AppProvider, useGlobalContext } from "./contex";
import { useEffect } from "react";
const Voting = (currentUser) => {
  const name = currentUser.currentUser[0].name;
  const vote = currentUser.currentUser[0].vote;

  return (
    <div className="voterInterface">
      <h1> welcome user to our votins system</h1>
      <h1>your voting status is:</h1>
      <OptionsVote />
    </div>
  );
};

export default Voting;
