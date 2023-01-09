import React from "react";

const User = (props) => {
  return (
    <section className="platform">
      <div className="icon">
        <img src={props.icon} alt="icon" />
        <p>{props.name}</p>
      </div>
      <div className="followers">
        <button
          className="update-followers-button"
          onClick={() => props.decrease(props.name)}
        >
          -
        </button>
        {props.followers > 9999
          ? Math.floor(props.followers / 1000) + "K"
          : props.followers}
        <button
          className="update-followers-button"
          onClick={() => props.increase(props.name)}
        >
          +
        </button>
      </div>
      <div className="subscribers">F O L O W E R S</div>
      <div>
        {props.difference > 0 ? (
          <span className="trend-ascend">{props.difference}▲</span>
        ) : (
          <span className="trend-descend">{props.difference}▼</span>
        )}
      </div>
    </section>
  );
};

export default User;
