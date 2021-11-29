import { gql } from "@apollo/client";

import client from "../../apollo-client";


export const getJSONIdQuery = gql`
  query Tails($tail: String) {
    long_tails(where: { tail: { _eq: $tail } }) {
      json_id
    }
  }
`;

