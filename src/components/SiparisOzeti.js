import reactRouterDom from "react-router-dom";
import React from "react";

function SiparisOzeti(props) {
  const { siparisOzeti, pizzaType, count, toplamFiyat, malzemeFiyat } = props;
  return (
    <>
      <h1>Teknolojik Yemekler</h1>
      <div>
        <p>lezzetin yolda</p>
        <h4>SİPARİŞ ALINDI</h4>
      </div>
      <p>----------------------------------------</p>

      <h4>{pizzaType[0].name}</h4>
      <div>
        <p>Boyut:{siparisOzeti.boyut}</p>
        <p>Hamur:{siparisOzeti.hamur}</p>
        <p>Ek malzemeler:{siparisOzeti.malzemeler}</p>
      </div>
      <div>
        <h3>Sipariş Toplamı</h3>
        <h3>Seçimler {malzemeFiyat * count}₺ </h3>
        <h4>Toplam {(toplamFiyat + malzemeFiyat) * count}₺ </h4>
      </div>
    </>
  );
}
export default SiparisOzeti;
