import React from "react";
import HomePage from "./components/HomePage";
import Formpage from "./components/FormPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
const initialForm = [
  {
    name: "Position Absoulete Acı Pizza",
    price: 85.5,
    explanation:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
  },
];
const App = () => {
  const [pizzaType, setpizzaType] = useState(initialForm);

  return (
    <Router>
      <>
        <div>
          <Switch>
            <Route
              path="/Formpage"
              component={() => <Formpage pizzaType={pizzaType} />}
            />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </>
    </Router>
  );
};
export default App;
