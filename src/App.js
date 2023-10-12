import React, { useEffect } from "react";
import HomePage from "./components/HomePage";
import Formpage from "./components/FormPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import axios from "axios";
import SiparisOzeti from "./components/SiparisOzeti";
import { useHistory } from "react-router-dom";
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

const initialForm = [
  {
    name: "Position Absoulete Acı Pizza",
    price: 85.5,
    explanation:
      "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizatta denir.",
  },
];
const siparisOzetiForm = {
  name: initialForm[0].name,
  boyut: "",
  malzemeler: "",
  hamur: "",
};

const App = () => {
  const [malzemeFiyat, setMalzemeFiyat] = useState(0);
  const [pizzaType, setPizzaType] = useState(initialForm);
  const [toplamFiyat, setToplamFiyat] = useState(initialForm[0].price);
  const [count, setCount] = useState(1);
  const [siparisOzeti, setSiparisOzeti] = useState(siparisOzetiForm);
  const [specialPizza, setSpecialPizza] = useState(pizzaform);
  const [isDisabled, setIsDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState({});

  function fiyatHesapla(obj) {
    let sayac = 0;
    for (const key in obj) {
      if (obj[key] === true) {
        sayac++;
      }
    }
    setMalzemeFiyat(sayac * 5);
  }

  return (
    <Router>
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&family=Londrina+Solid:wght@300&family=Quattrocento:wght@700&family=Bebas+Neue&family=Chelsea+Market&family=Roboto&family=Roboto+Mono&family=Satisfy&display=swap"
          rel="stylesheet"
        ></link>

        <div>
          <Switch>
            <Route
              path="/Formpage"
              exact
              component={() => (
                <>
                  <Formpage
                    malzemeFiyat={malzemeFiyat}
                    setMalzemeFiyat={setMalzemeFiyat}
                    pizzaType={pizzaType}
                    toplamFiyat={toplamFiyat}
                    setToplamFiyat={setToplamFiyat}
                    count={count}
                    setCount={setCount}
                    siparisOzeti={siparisOzeti}
                    setSiparisOzeti={setSiparisOzeti}
                    fiyatHesapla={fiyatHesapla}
                    specialPizza={specialPizza}
                    setSpecialPizza={setSpecialPizza}
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                    formErrors={formErrors}
                    setFormErrors={setFormErrors}
                  />
                </>
              )}
            />{" "}
            <Route
              path="/SiparisOzeti"
              component={() => (
                <>
                  <SiparisOzeti
                    pizzaType={pizzaType}
                    siparisOzeti={siparisOzeti}
                    count={count}
                    toplamFiyat={toplamFiyat}
                    malzemeFiyat={malzemeFiyat}
                  />
                </>
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
