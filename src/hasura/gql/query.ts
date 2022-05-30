import gql from "graphql-tag";

export const getAddressQuery = gql`
    query fetchAddress($address_id: Int!) {
        address_by_pk(id: $address_id) {
            id
            street
            city
            country
        }
    }
`;
