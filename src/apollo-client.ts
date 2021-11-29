import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { API_URL, HASURA_ADMIN_SECRET } from "./config";

const httpLink = createHttpLink({
    uri: API_URL,
    headers: {
        "X-Hasura-Admin-Secret": HASURA_ADMIN_SECRET
    }
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;