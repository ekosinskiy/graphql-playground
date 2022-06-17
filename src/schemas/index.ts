import {gql} from 'apollo-server';

export const schemas = gql`
  type Zip {
    zip: String
    city: String
    county: String
  }

  type Query {
    searchZip(zipCode: String): Zip
  }
`;
