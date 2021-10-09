import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import all relevent pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Profile from "./pages/Profile";
import Header from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";

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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/me">
            <Profile />
          </Route>
          <Route exact path="/profile/:username">
            <Profile />
          </Route>
          <Route exact path="/single">
            <Single />
          </Route>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
