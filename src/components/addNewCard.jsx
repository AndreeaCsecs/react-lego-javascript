import React, { useState } from "react";

const AddNewCard = (props) => {
  const [name, setName] = useState("");
  const [followers, setFollowers] = useState("");
  const [difference, setDifference] = useState("");

  const onButtonClick = () => {
    const user = { name, followers, difference };
    props.addUser(user);
  };

  return (
    <div className="add-card">
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        value={followers}
        placeholder="followers"
        onChange={(e) => setFollowers(Number(e.target.value))}
      ></input>
      <input
        type="text"
        value={difference}
        placeholder="difference"
        onChange={(e) => setDifference(e.target.value)}
      ></input>
      <button onClick={onButtonClick}>Create New Card</button>
    </div>
  );
};

export default AddNewCard;
