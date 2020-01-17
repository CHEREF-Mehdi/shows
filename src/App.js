import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import ShowsList from "./components/ShowsList";

import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ShowDetail from "./components/ShowDetail";

function App() {
  const [useFilter, setUseFilter] = React.useState(null);
  return (
    <Router>
      <Header setUseFilter={setUseFilter} />
      <div style={{ minHeight: "80vh" }}>
        <Switch>
          <Route exact path="/">
            <ShowsList useFilter={useFilter} />
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
