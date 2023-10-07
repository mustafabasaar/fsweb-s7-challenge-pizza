import React from "react";
import HomePage from "./components/HomePage";
import Formpage from "./components/FormPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

const App = () => {
  const [price, setprice] = useState(85.5);

  return (
    <Router>
      <>
        <div>
          <Switch>
            <Route
              path="/Formpage"
              component={() => <Formpage price={price} />}
            />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </>
    </Router>
  );
};
export default App;
