import React, { useState } from "react";
import { Query } from "react-apollo";
import getAllRewards from "./Task.query.jsx";
import Task from "./Task.jsx";
import Select from "react-select";

function MyTask() {
  const [value, setValue] = useState({ campaign_id: "001" });

  return (
    <Query
      query={getAllRewards}
      variables={{
        page: 0,
        filter: value,
      }}
    >
      {({ loading, error, data, refetch }) => {
        if (loading) return <p>Loading…</p>;
        if (error) return <p>Error :(</p>;
        const handleSelect = (e) => {
          let filterValue = e.value;
          let changeFilter = {
            campaign_id: "001",
            points: filterValue,
          };
          refetch({ variables: { page: 0, filter: changeFilter } });
          setValue(changeFilter);
        };

        const rewardsOptions = data.allRewards;
        let options = rewardsOptions.map((reward) => ({
          label: reward.points,
          value: reward.points,
        }));
        return (
          <div className="mytask">
            <h1 className="rewards__title">
              Rewards for <span>Campaign&nbsp;X</span>
            </h1>
            <Select
              className="rewards__filter"
              onChange={handleSelect}
              options={options}
            ></Select>
            <Task rewards={data}></Task>;
          </div>
        );
      }}
    </Query>
  );
}

export default MyTask;

// quantity: $quantity, points: $points, capPerAmbassador: $capPerAmbassador
