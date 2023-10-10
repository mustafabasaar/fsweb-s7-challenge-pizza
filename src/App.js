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
const pizzaform = {
  boyut: { kucuk: false, orta: false, buyuk: false },
  hamur: "",
  malzemeler: {
    peperroni: false,
    domates: false,
    biber: false,
    sosis: false,
    misir: false,
    sucuk: false,
    kanadajambonu: false,
    ananas: false,
    cheddar: false,
    jalepano: false,
    kabak: false,
    tavuk: false,
    sogan: false,
    sarimsak: false,
  },
  notlar: "",
};
const App = () => {
  const [malzemeFiyat, setMalzemeFiyat] = useState(0);
  const [pizzaType, setPizzaType] = useState(initialForm);
  const [toplamFiyat, setToplamFiyat] = useState(initialForm[0].price);
  const [specialPizza, setSpecialPizza] = useState(pizzaform);
  const [count, setCount] = useState(1);
  const addUser = (siparis) => {
    setSpecialPizza([specialPizza, siparis]);
    console.log("sipariş geldii", specialPizza);
  };

  return (
    <Router>
      <>
        <div>
          <Switch>
            <Route
              path="/Formpage"
              component={() => (
                <Formpage
                  malzemeFiyat={malzemeFiyat}
                  setMalzemeFiyat={setMalzemeFiyat}
                  pizzaType={pizzaType}
                  toplamFiyat={toplamFiyat}
                  setToplamFiyat={setToplamFiyat}
                  specialPizza={specialPizza}
                  setSpecialPizza={setSpecialPizza}
                  count={count}
                  setCount={setCount}
                  addUser={addUser}
                  pizzaform={pizzaform}
                />
              )}
            />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </>
    </Router>
  );
};
export default App;
