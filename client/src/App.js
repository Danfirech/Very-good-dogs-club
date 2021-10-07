import React from "react";
import { setContext } from "@apollo/client/link/context";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
// import Form from "./components/Form/form";
//import Login from "./pages/Login";
import Signup from "./pages/Signup";

// function App() {
//   return <Form />;
// }

// export default App;
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

//import all relevant components
import Form from "./components/Form/form";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

//apollo client had in memory cache that stores the data from completed requests
//reference cache objects with we want to retrieve data or udpate the data stored
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API

  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
console.log("test");

function App() {
  return (
    <ApolloProvider client={client}>
      <NavBar />
      <Profile />
    </ApolloProvider>
  );
}
export default App;
