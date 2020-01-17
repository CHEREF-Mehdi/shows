import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import ShowsList from "./components/ShowsList";

import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ShowDetail from "./components/ShowDetail";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ minHeight: "90vh" }}>
        <Switch>
          <Route exact path="/">
            <ShowsList />
          </Route>
          <Route exact path="/show/:showId">
            <ShowDetail />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
