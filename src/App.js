import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./componets/customers";
import Rentals from "./componets/rental";
import NotFound from "./componets/notFound";
import Movies from "./componets/movies";
import MovieForm from "./componets/movieForm";
import NavBar from "./componets/navBar";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
