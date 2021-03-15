import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const getAllRewards = gql`
  query allRewards($page: Int!, $filter: RewardFilter) {
    allRewards(page: $page, filter: $filter) {
      id
      name
      description
      image
      quantity
      points
      capPerAmbassador
    }
  }
`;
export default getAllRewards;
