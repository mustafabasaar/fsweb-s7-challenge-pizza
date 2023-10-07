import React from "react";
import { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { NavLink } from "react-router-dom";

function FormPage(props) {
  const { price } = props;
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
        <h3>Position Absoulete Acı Pizza </h3>
        <p>{price}₺</p>
        <span>4.9</span>
        <span>(200)</span>
        <p>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved
        </p>
      </div>
    </>
  );
}
export default FormPage;
