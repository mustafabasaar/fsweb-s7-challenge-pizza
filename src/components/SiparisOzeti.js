import React from "react";
import "./SiparisOzeti.css";
function SiparisOzeti(props) {
  const { siparisOzeti, pizzaType, count, toplamFiyat, malzemeFiyat } = props;
  return (
    <>
      <div className="siparisozeti-container">
        <div>
          <h1 className="siparis-baslik">Teknolojik Yemekler</h1>
        </div>
        <div className="siparisozeti-yazilar">
          <p>lezzetin yolda</p>
          <h4>SİPARİŞ ALINDI</h4>
          <div className="duz-cizgi-iki"></div>
        </div>
        <div className="ozet-container">
          <div>
            <h4>{pizzaType[0].name}</h4>
          </div>
          <div>
            <p>Boyut:{siparisOzeti.boyut}</p>
            <p>Hamur:{siparisOzeti.hamur}</p>
            <p>Ek malzemeler:{siparisOzeti.malzemeler}</p>
          </div>
          <div className="toplamfiyat-sonuc">
            <h3>Sipariş Toplamı</h3>
            <h3>Seçimler {malzemeFiyat * count}₺ </h3>
            <h4>Toplam {(toplamFiyat + malzemeFiyat) * count}₺ </h4>
          </div>
        </div>
      </div>
    </>
  );
}
export default SiparisOzeti;
