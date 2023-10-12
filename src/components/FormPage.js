import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Counter from "./Counter";
import axios from "axios";
import * as yup from "yup";
import "./FormPage.css";

const pizzaSchema = yup.object().shape({
  boyut: yup
    .object()
    .shape({
      kucuk: yup.boolean(),
      orta: yup.boolean(),
      buyuk: yup.boolean(),
    })
    .test(
      "boyut",
      "En az bir boyut seçilmelidir",
      (value) => value.kucuk || value.orta || value.buyuk
    ),
  hamur: yup.string().required("Hamur tipi seçmelisiniz."),
  malzemeler: yup
    .object()
    .shape({
      peperroni: yup.boolean(),
      domates: yup.boolean(),
      biber: yup.boolean(),
      sosis: yup.boolean(),
      misir: yup.boolean(),
      sucuk: yup.boolean(),
      kanadajambonu: yup.boolean(),
      ananas: yup.boolean(),
      cheddar: yup.boolean(),
      jalepano: yup.boolean(),
      kabak: yup.boolean(),
      tavuk: yup.boolean(),
      sogan: yup.boolean(),
      sarimsak: yup.boolean(),
    })
    .test(
      "malzemeler",
      "En fazla 10 malzeme seçilmelidir",
      (value) => Object.values(value).filter(Boolean).length <= 10
    ),
  notlar: yup.string(),
});

function FormPage(props) {
  const {
    toplamFiyat,
    setToplamFiyat,
    malzemeFiyat,
    setMalzemeFiyat,
    count,
    setCount,
    setSiparisOzeti,
    siparisOzeti,
    pizzaType,
    fiyatHesapla,
    formErrors,
    setFormErrors,
    setIsDisabled,
    isDisabled,
    specialPizza,
    setSpecialPizza,
    pizzaform,
  } = props;

  const kontrolFonksiyonuAlanlar = (name, value) => {
    yup
      .reach(pizzaSchema, name)
      .validate(value)
      .then(() => {
        // Hata yoksa hata mesajını temizle
        const newFormErrors = {
          ...formErrors,
          [name]: "",
        };
        setFormErrors(newFormErrors);
      })
      .catch((err) => {
        console.log("hata var hataa", err.errors[0]);
        const newFormErrors = {
          ...formErrors,
          [name]: err.errors[0],
        };
        setFormErrors(newFormErrors);
      });
  };
  const kontrolFonksiyonu = (usersData) => {
    pizzaSchema.isValid(usersData).then(function (valid) {
      console.log(valid, "valid");
      if (valid === true) {
        console.log("Axios ile sunucuya gönderilebilir buton aktif edilebilir");
        setIsDisabled(false);
      } else {
        console.log("hataMesajıGörüntüle");
        setIsDisabled(true);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name.includes("boyut")) {
      const guncelBoyut = { ...specialPizza.boyut };

      for (const key in guncelBoyut) {
        guncelBoyut[key] = false;
      }
      guncelBoyut[value] = checked;
      setSpecialPizza({
        ...specialPizza,
        boyut: guncelBoyut,
      });

      kontrolFonksiyonuAlanlar(name, specialPizza);
    } else if (type === "checkbox" && name.includes("malzemeler")) {
      const guncelMalzemeler = { ...specialPizza.malzemeler };

      guncelMalzemeler[value] = checked;
      fiyatHesapla(guncelMalzemeler);
      setSpecialPizza({
        ...specialPizza,
        malzemeler: guncelMalzemeler,
      });

      kontrolFonksiyonuAlanlar(name, specialPizza);
    } else if (type === "select-one") {
      setSpecialPizza({
        ...specialPizza,
        hamur: value,
      });
      kontrolFonksiyonuAlanlar(name, specialPizza);
    } else if (type === "text") {
      setSpecialPizza({
        ...specialPizza,
        notlar: value,
      });
    }
  };

  const handleSubmit = () => {
    if (!isDisabled) {
      axios
        .post("https://reqres.in/api/users", specialPizza)
        .then(function (response) {
          console.log("baba bu data gelmeli ama", response.data);

          const seciliBoyut = Object.keys(response.data.boyut).filter(
            (anahtar) => response.data.boyut[anahtar] === true
          );
          const seciliBoyutString = seciliBoyut.join(" ");

          const seciliMalzeme = Object.keys(response.data.malzemeler).filter(
            (anahtar) => response.data.malzemeler[anahtar] === true
          );
          const seciliMalzemeString = seciliMalzeme.join(", ");

          let yeniSiparisOzeti = {
            ...siparisOzeti,
            boyut: seciliBoyutString,
            malzemeler: seciliMalzemeString,
            hamur: response.data.hamur,
          };
          setSiparisOzeti(yeniSiparisOzeti);
          console.log("sipariş geldi koşşşş", siparisOzeti);

          resetForm();
        })
        .catch(function (error) {
          console.log(error, "error");
          alert("Gönderilemedi");
        });
    }
  };
  const resetForm = () => {
    setSpecialPizza(pizzaform);
    setFormErrors({});
    setIsDisabled(true);
  };
  useEffect(() => {
    fiyatHesapla(specialPizza.malzemeler);
    kontrolFonksiyonu(specialPizza);
  });

  return (
    <>
      <header className="baslik-container">
        <div className="form-baslik">
          <h1>Teknolojik Yemekler</h1>
        </div>
        <div className="header-links ">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Anasayfa-
          </NavLink>
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Seçenekler-
          </NavLink>
          <NavLink to="/Formpage" className="nav-link" activeClassName="active">
            Sipariş Oluştur
          </NavLink>
        </div>
      </header>
      <div className="form-container">
        <h3 className="pizza-name">{pizzaType[0].name}</h3>
        <div className="pizza-area">
          <h2 className="pizza-price">{pizzaType[0].price}₺</h2>
          <p id="dort-dokuz">4.9</p>
          <p id="ikiyuz">(200)</p>
        </div>
        <p className="pizza-explanation">{pizzaType[0].explanation}</p>

        <div className="ilkform-container">
          <form className="all-form">
            <div className="boyut-hamur">
              <div className="boyut-hamur_child">
                <h4>
                  Boyut Seç<span id="zorunluyildiz">*</span>
                </h4>
                <label className="checkbox-container">
                  Küçük
                  <input
                    name="boyut.kucuk"
                    value="kucuk"
                    type="checkbox"
                    checked={specialPizza.boyut.kucuk}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  Orta
                  <input
                    name="boyut.orta"
                    value="orta"
                    type="checkbox"
                    checked={specialPizza.boyut.orta}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                </label>

                <label className="checkbox-container">
                  Büyük
                  <input
                    name="boyut.buyuk"
                    value="buyuk"
                    type="checkbox"
                    checked={specialPizza.boyut.buyuk}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <label>
                <h4>
                  Hamur Seç<span id="zorunluyildiz">*</span>
                </h4>
                <select
                  name="hamur"
                  value={specialPizza.hamur}
                  onChange={handleChange}
                >
                  <option value="">Hamur Kalınlığı</option>
                  <option value="ince">İnce Hamur</option>
                  <option value="normal">Normal Hamur</option>
                  <option value="kalin">Kalın Hamur</option>
                </select>
              </label>
            </div>
            <div>
              <h2>Ek Malzemeler</h2>
              <p id="kisit">En fazla 10 malzeme seçebilirsiniz.5₺ </p>
              <div className="malzemeler-container">
                <div className="malzemeblock-bir">
                  <label>
                    <input
                      name="malzemeler.peperroni"
                      value="peperroni"
                      type="checkbox"
                      checked={specialPizza.malzemeler.peperroni}
                      onChange={handleChange}
                    />
                    Peperroni
                  </label>
                  <label>
                    <input
                      name="malzemeler.domates"
                      value="domates"
                      type="checkbox"
                      checked={specialPizza.malzemeler.domates}
                      onChange={handleChange}
                    />
                    Domates
                  </label>
                  <label>
                    <input
                      name="malzemeler.biber"
                      value="biber"
                      type="checkbox"
                      checked={specialPizza.malzemeler.biber}
                      onChange={handleChange}
                    />
                    Biber
                  </label>
                  <label>
                    <input
                      name="malzemeler.sosis"
                      value="sosis"
                      type="checkbox"
                      checked={specialPizza.malzemeler.sosis}
                      onChange={handleChange}
                    />
                    Sosis
                  </label>
                  <label>
                    <input
                      name="malzemeler.misir"
                      value="misir"
                      type="checkbox"
                      checked={specialPizza.malzemeler.misir}
                      onChange={handleChange}
                    />
                    Mısır
                  </label>
                </div>
                <div className="malzemeblock-iki">
                  <label>
                    <input
                      name="malzemeler.sucuk"
                      value="sucuk"
                      type="checkbox"
                      checked={specialPizza.malzemeler.sucuk}
                      onChange={handleChange}
                    />
                    Sucuk
                  </label>
                  <label>
                    <input
                      name="malzemeler.jalepano"
                      value="jalepano"
                      type="checkbox"
                      checked={specialPizza.malzemeler.jalepano}
                      onChange={handleChange}
                    />
                    Jalepano
                  </label>
                  <label>
                    <input
                      name="malzemeler.cheddar"
                      value="cheddar"
                      type="checkbox"
                      checked={specialPizza.malzemeler.cheddar}
                      onChange={handleChange}
                    />{" "}
                    Cheddar
                  </label>
                  <label>
                    <input
                      name="malzemeler.ananas"
                      value="ananas"
                      type="checkbox"
                      checked={specialPizza.malzemeler.ananas}
                      onChange={handleChange}
                    />
                    Ananas
                  </label>
                  <label>
                    <input
                      name="malzemeler.tavuk"
                      value="tavuk"
                      type="checkbox"
                      checked={specialPizza.malzemeler.tavuk}
                      onChange={handleChange}
                    />
                    Tavuk Izgara
                  </label>
                </div>
                <div className="malzemeblock-uc">
                  <label>
                    <input
                      name="malzemeler.kabak"
                      value="kabak"
                      type="checkbox"
                      checked={specialPizza.malzemeler.kabak}
                      onChange={handleChange}
                    />{" "}
                    Kabak
                  </label>
                  <label>
                    <input
                      name="malzemeler.kanadajambonu"
                      value="kanadajambonu"
                      type="checkbox"
                      checked={specialPizza.malzemeler.kanadajambonu}
                      onChange={handleChange}
                    />{" "}
                    Kanada Jambonu
                  </label>
                  <label>
                    <input
                      name="malzemeler.sogan"
                      value="sogan"
                      type="checkbox"
                      checked={specialPizza.malzemeler.sogan}
                      onChange={handleChange}
                    />{" "}
                    Soğan
                  </label>
                  <label>
                    <input
                      name="malzemeler.sarimsak"
                      value="sarimsak"
                      type="checkbox"
                      checked={specialPizza.malzemeler.sarimsak}
                      onChange={handleChange}
                    />
                    Sarımsak
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="notlar"></label>
              <h2>Sipariş Notu</h2>
              <input
                value={specialPizza.notlar}
                placeholder="Siparişine eklemek istediğin bir not var mı ?"
                onChange={handleChange}
                type="text"
                id="notlar"
                name="malzemeler.notlarr"
                autoFocus
              />
            </div>
          </form>
          <div className="duz-cizgi"></div>
          <div className="siparisverme-alanı">
            <Counter
              toplamFiyat={toplamFiyat}
              setToplamFiyat={setToplamFiyat}
              malzemeFiyat={malzemeFiyat}
              setMalzemeFiyat={setMalzemeFiyat}
              count={count}
              setCount={setCount}
              pizzaType={pizzaType}
            />
            <div className="hesap-alanı">
              <h2>Sipariş Toplamı</h2>
              <h3>
                Seçimler <span id="fiyatlar">{malzemeFiyat * count}₺ </span>
              </h3>
              <h4>
                Toplam{" "}
                <span id="fiyatlar">
                  {(toplamFiyat + malzemeFiyat) * count}₺
                </span>
              </h4>
              <NavLink to="/SiparisOZeti">
                <button
                  className={
                    isDisabled
                      ? "renkli-dugme is-disabled"
                      : "renkli-dugme is-enabled"
                  }
                  onClick={handleSubmit}
                  type="button"
                  disabled={isDisabled}
                >
                  Sipariş Ver
                </button>
              </NavLink>
            </div>
            <p className="bosluk-bırak"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPage;
