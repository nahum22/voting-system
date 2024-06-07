import React from "react";

const OptionsVote = (vote) => {
  const id = "abra";

  //here we will send votes
  function vote(e) {
    const choise = e.target.textContent;
    //   console.log(id);
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
      {options.map((item, index) => {
        return (
          <div onClick={vote} key={index}>
            {item}{" "}
          </div>
        );
      })}
    </>
  );
};

export default OptionsVote;
