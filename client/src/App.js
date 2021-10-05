import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

//import all relevant components
import Form from "./components/Form/form";

//apollo client had in memory cache that stores the data from completed requests
//reference cache objects with we want to retrieve data or udpate the data stored
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return <Form />;
}

export default App;
