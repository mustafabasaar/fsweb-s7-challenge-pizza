import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Counter from "./Counter";
import axios from "axios";
import * as yup from "yup";

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
      "En az 3 ve en fazla 10 malzeme seçilmelidir",
      (value) =>
        Object.values(value).filter(Boolean).length >= 3 &&
        Object.values(value).filter(Boolean).length <= 10
    ),
  notlar: yup.string(),
});

function FormPage(props) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const {
    pizzaType,
    toplamFiyat,
    setToplamFiyat,
    malzemeFiyat,
    setMalzemeFiyat,
    specialPizza,
    setSpecialPizza,
    count,
    setCount,
    pizzaform,
    addUser,
  } = props;
  useEffect(() => {
    kontrolFonksiyonu(specialPizza);
  }, [specialPizza]);

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
        // Hata varsa hata mesajını ayarla
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
  useEffect(() => {
    pizzaSchema
      .validate(specialPizza)
      .then(function (validPizza) {
        if (validPizza === true) {
          console.log(
            "Axios ile sunucuya gönderilebilir buton aktif edilebilir",
            validPizza
          );
          setIsDisabled(false);
        } else {
          console.log("hataMesajıGörüntüle");
          setIsDisabled(true);
        }
      })
      .catch(function (error) {
        console.error("Pizza doğrulanamadı. Hatalar:", error.errors);
      });
  }, [specialPizza]);
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
      console.log(specialPizza);
      kontrolFonksiyonuAlanlar(name, specialPizza);
    } else if (type === "checkbox" && name.includes("malzemeler")) {
      const guncelMalzemeler = { ...specialPizza.malzemeler };
      guncelMalzemeler[value] = checked;
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

  useEffect(() => {
    fiyatHesapla(specialPizza.malzemeler);
    console.log("data son hali", specialPizza);
  }, [specialPizza]);

  function fiyatHesapla(obj) {
    let count = 0;
    for (const key in obj) {
      if (obj[key] === true) {
        count++;
      }
    }
    setMalzemeFiyat(count * 5);
  }
  const resetForm = () => {
    setSpecialPizza(pizzaform);
    setFormErrors({});
    setIsDisabled(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      axios
        .post("https://reqres.in/api/users", specialPizza)
        .then(function (response) {
          console.log(response.data, "response");
          addUser(response.data);
          resetForm();
        })
        .catch(function (error) {
          console.log(error, "error");
          alert("Gönderilemedi");
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
          <NavLink to="/">Anasayfa-</NavLink>
          <NavLink to="/">Seçenekler-</NavLink>
          <NavLink to="/Formpage">Sipariş Oluştur</NavLink>
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
        <form>
          <div>
            <p>Pizza Boyutu:</p>
            <label>
              Küçük
              <input
                name="boyut.kucuk"
                value="kucuk"
                type="checkbox"
                checked={specialPizza.boyut.kucuk || false}
                onChange={handleChange}
              />
            </label>
            <label>
              Orta
              <input
                name="boyut.orta"
                value="orta"
                type="checkbox"
                checked={specialPizza.boyut.orta}
                onChange={handleChange}
              />
            </label>
            <label>
              Büyük
              <input
                name="boyut.buyuk"
                value="buyuk"
                type="checkbox"
                checked={specialPizza.boyut.buyuk}
                onChange={handleChange}
              />
            </label>
            {formErrors["boyut"] && (
              <p className="error-text">{formErrors["boyut"]}</p>
            )}
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
              {formErrors["hamur"] && (
                <p className="error-text">{formErrors["hamur"]}</p>
              )}
            </label>
            <div>
              <label>
                Peperroni
                <input
                  name="malzemeler.peperroni"
                  value="peperroni"
                  type="checkbox"
                  checked={specialPizza.malzemeler.peperroni || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Domates
                <input
                  name="malzemeler.domates"
                  value="domates"
                  type="checkbox"
                  checked={specialPizza.malzemeler.domates || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Biber
                <input
                  name="malzemeler.biber"
                  value="biber"
                  type="checkbox"
                  checked={specialPizza.malzemeler.biber || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Sosis
                <input
                  name="malzemeler.sosis"
                  value="sosis"
                  type="checkbox"
                  checked={specialPizza.malzemeler.sosis || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                misir
                <input
                  name="malzemeler.misir"
                  value="misir"
                  type="checkbox"
                  checked={specialPizza.malzemeler.misir || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Sucuk
                <input
                  name="malzemeler.sucuk"
                  value="sucuk"
                  type="checkbox"
                  checked={specialPizza.malzemeler.sucuk || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Kanada Jambonu
                <input
                  name="malzemeler.kanadajambonu"
                  value="kanadajambonu"
                  type="checkbox"
                  checked={specialPizza.malzemeler.kanadajambonu || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Cheddar
                <input
                  name="malzemeler.cheddar"
                  value="cheddar"
                  type="checkbox"
                  checked={specialPizza.malzemeler.cheddar || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Ananas
                <input
                  name="malzemeler.ananas"
                  value="ananas"
                  type="checkbox"
                  checked={specialPizza.malzemeler.ananas || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Tavuk Izgara
                <input
                  name="malzemeler.tavuk"
                  value="tavuk"
                  type="checkbox"
                  checked={specialPizza.malzemeler.tavuk || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Jalepano
                <input
                  name="malzemeler.jalepano"
                  value="jalepano"
                  type="checkbox"
                  checked={specialPizza.malzemeler.jalepano || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Kabak
                <input
                  name="malzemeler.kabak"
                  value="kabak"
                  type="checkbox"
                  checked={specialPizza.malzemeler.kabak || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Soğan
                <input
                  name="malzemeler.sogan"
                  value="sogan"
                  type="checkbox"
                  checked={specialPizza.malzemeler.sogan || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Sarımsak
                <input
                  name="malzemeler.sarimsak"
                  value="sarimsak"
                  type="checkbox"
                  checked={specialPizza.malzemeler.sarimsak || false}
                  onChange={handleChange}
                />
              </label>
              {formErrors["malzemeler"] && (
                <p className="error-text">{formErrors["malzemeler"]}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="notlar">Sipariş Notu:</label>
            <input
              value={specialPizza.notlar}
              placeholder="Siparişine eklemek istediğin bir not var mı ?"
              onChange={handleChange}
              type="text"
              id="notlar"
              name="malzemeler.notlarr"
            />
            {formErrors["notlar"] && (
              <p className="error-text">{formErrors["notlar"]}</p>
            )}
          </div>
        </form>
        <Counter
          toplamFiyat={toplamFiyat}
          setToplamFiyat={setToplamFiyat}
          malzemeFiyat={malzemeFiyat}
          setMalzemeFiyat={setMalzemeFiyat}
          count={count}
          setCount={setCount}
          pizzaType={pizzaType}
        />
        <div>
          <h3>Sipariş Toplamı</h3>
          <h4>Seçimler {malzemeFiyat * count}₺ </h4>
          <h4>Toplam {(toplamFiyat + malzemeFiyat) * count}₺</h4>
        </div>
        <button onClick={handleSubmit} type="submit" disabled={isDisabled}>
          Sipariş Ver
        </button>
      </div>
    </>
  );
}

export default FormPage;
