import React from "react";
import { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { NavLink } from "react-router-dom";

const pizzaform = { boyut: {}, hamur: "" };

function FormPage(props) {
  const { pizzaType } = props;
  const { specialPizza, setspecialPizza } = useState(pizzaform);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Seçilen Pizza Boyutları:", specialPizza.boyut);
    console.log("Seçilen Hamur Kalınlığı:", specialPizza.hamur);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedPizzaSize = { ...specialPizza.boyut };

      if (checked) {
        updatedPizzaSize[value] = true;
      } else {
        delete updatedPizzaSize[value];
      }

      setspecialPizza({
        ...specialPizza,
        boyut: updatedPizzaSize,
      });
    } else if (type === "select-one") {
      setspecialPizza({
        ...specialPizza,
        hamur: value,
      });
    }
  };
  return (
    <>
      <header>
        <div className="form-baslik">
          <h1>Tekonolojik Yemekler</h1>
        </div>
        <div className="form-links">
          <NavLink
            to="/"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
              };
            }}
          >
            Anasayfa-
          </NavLink>
          <NavLink
            to="/"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
              };
            }}
          >
            Seçenekler-
          </NavLink>
          <NavLink
            to="/Formpage"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
              };
            }}
          >
            Sipariş Oluştur
          </NavLink>
        </div>
      </header>
      <div>
        <h3>{pizzaType[0].name}</h3>
        <p>
          {pizzaType[0].price}₺ <span>4.9 (200)</span>{" "}
        </p>

        <p>{pizzaType[0].explanation}</p>
      </div>
      <div className="ilkform-container">
        <form onSubmit={handleSubmit}>
          <div>
            <p>Pizza Boyutu:</p>
            <label>
              Küçük
              <input
                type="checkbox"
                name="boyut"
                value="kucuk"
                checked={specialPizza.boyut.kucuk}
                onChange={handleChange}
              />
            </label>
            <label>
              Orta
              <input
                name="boyut"
                type="checkbox"
                value="orta"
                checked={specialPizza.boyut.orta}
                onChange={handleChange}
              />
            </label>
            <label>
              Büyük
              <input
                name="boyut"
                type="checkbox"
                value="buyuk"
                checked={specialPizza.boyut.buyuk}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Hamur Kalınlığı:
              <select
                name="hamur"
                value={specialPizza.hamur}
                onChange={handleChange}
              >
                <option value="">Seçiniz</option>
                <option value="ince">İnce Hamur</option>
                <option value="normal">Normal Hamur</option>
                <option value="kalin">Kalın Hamur</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
export default FormPage;
