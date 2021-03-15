import React from "react";

const Task = (props) => {
  const rewards = props.rewards.allRewards;
  const listItems = rewards.map((reward) => (
    <div key={reward.id} className="reward-card">
      <img src={reward.image} alt={reward.name} />
      <div className="reward-card__content">
        <h2 className="h4">{reward.name}</h2>
        <p>{reward.description}</p>
        <p className="reward-card__data">
          <span>
            Points: <strong>{reward.points}</strong>
          </span>
          <span>
            Cap: <strong>{reward.capPerAmbassador}</strong>
          </span>
          <span>
            Quantity: <strong>{reward.quantity}</strong>
          </span>
        </p>
      </div>
    </div>
  ));
  return <div className="rewards">{listItems}</div>;
};

Task.propTypes = {};

export default Task;
