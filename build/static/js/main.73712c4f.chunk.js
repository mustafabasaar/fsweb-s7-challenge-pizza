(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,a,t){e.exports=t(71)},41:function(e,a,t){},50:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(32),m=t.n(r),c=t(4),i=t(2);t(41);var o=function(){var e=Object(i.useHistory)();return n.a.createElement("div",{className:"background"},n.a.createElement("div",{className:"homepage-container"},n.a.createElement("div",{className:"homepage-topic"},n.a.createElement("h1",null,"Teknolojik Yemekler")),n.a.createElement("div",{className:"homepage-text"},n.a.createElement("h2",null,"KOD ACIKTIRIR"),n.a.createElement("h2",null,"P\u0130ZZA, DOYURUR")),n.a.createElement("button",{className:"homepage-button",onClick:function(){e.push("/FormPage")}},"ACIKTIM")))},s=t(11),u=t(10),p=t(9);t(50);var b=function(e){var a=e.count,t=e.setCount;return n.a.createElement("div",{className:"counter-container"},n.a.createElement("button",{onClick:function(){t(a+1)}}," +"),n.a.createElement("p",{className:"counter-display"},a),n.a.createElement("button",{onClick:function(){a>1&&t(a-1)},disabled:1===a},"-"))},k=t(19),d=t.n(k),E=t(1),h=(t(69),E.b().shape({boyut:E.b().shape({kucuk:E.a(),orta:E.a(),buyuk:E.a()}).test("boyut","En az bir boyut se\xe7ilmelidir",function(e){return e.kucuk||e.orta||e.buyuk}),hamur:E.d().required("Hamur tipi se\xe7melisiniz."),malzemeler:E.b().shape({peperroni:E.a(),domates:E.a(),biber:E.a(),sosis:E.a(),misir:E.a(),sucuk:E.a(),kanadajambonu:E.a(),ananas:E.a(),cheddar:E.a(),jalepano:E.a(),kabak:E.a(),tavuk:E.a(),sogan:E.a(),sarimsak:E.a()}).test("malzemeler","En fazla 10 malzeme se\xe7ilmelidir",function(e){return Object.values(e).filter(Boolean).length<=10}),notlar:E.d()}));var z=function(e){var a=e.toplamFiyat,t=e.setToplamFiyat,r=e.malzemeFiyat,m=e.setMalzemeFiyat,c=e.count,i=e.setCount,o=e.setSiparisOzeti,k=e.siparisOzeti,z=e.pizzaType,y=e.fiyatHesapla,v=e.formErrors,f=e.setFormErrors,g=e.setIsDisabled,N=e.isDisabled,j=e.specialPizza,O=e.setSpecialPizza,x=e.pizzaform,C=function(e,a){E.c(h,e).validate(a).then(function(){var a=Object(u.a)({},v,Object(s.a)({},e,""));f(a)}).catch(function(a){console.log("hata var hataa",a.errors[0]);var t=Object(u.a)({},v,Object(s.a)({},e,a.errors[0]));f(t)})},S=function(e){var a=e.target,t=a.name,l=a.value,n=a.type,r=a.checked;if("checkbox"===n&&t.includes("boyut")){var m=Object(u.a)({},j.boyut);for(var c in m)m[c]=!1;m[l]=r,O(Object(u.a)({},j,{boyut:m})),C(t,j)}else if("checkbox"===n&&t.includes("malzemeler")){var i=Object(u.a)({},j.malzemeler);i[l]=r,O(Object(u.a)({},j,{malzemeler:i})),C(t,j)}else"select-one"===n?(O(Object(u.a)({},j,{hamur:l})),C(t,j)):"text"===n&&O(Object(u.a)({},j,{notlar:l}))},F=function(){O(x),f({}),g(!0)};return Object(l.useEffect)(function(){var e;y(j.malzemeler),e=j,h.isValid(e).then(function(e){console.log(e,"valid"),!0===e?(console.log("Axios ile sunucuya g\xf6nderilebilir buton aktif edilebilir"),g(!1)):(console.log("hataMesaj\u0131G\xf6r\xfcnt\xfcle"),g(!0))})}),n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:"baslik-container"},n.a.createElement("div",{className:"form-baslik"},n.a.createElement("h1",null,"Teknolojik Yemekler")),n.a.createElement("div",{className:"header-links "},n.a.createElement(p.b,{exact:!0,to:"/",className:"nav-link",activeClassName:"active"},"Anasayfa-"),n.a.createElement(p.b,{exact:!0,to:"/",className:"nav-link",activeClassName:"active"},"Se\xe7enekler-"),n.a.createElement(p.b,{to:"/Formpage",className:"nav-link",activeClassName:"active"},"Sipari\u015f Olu\u015ftur"))),n.a.createElement("div",{className:"form-container"},n.a.createElement("h3",{className:"pizza-name"},z[0].name),n.a.createElement("div",{className:"pizza-area"},n.a.createElement("h2",{className:"pizza-price"},z[0].price,"\u20ba"),n.a.createElement("p",{id:"dort-dokuz"},"4.9"),n.a.createElement("p",{id:"ikiyuz"},"(200)")),n.a.createElement("p",{className:"pizza-explanation"},z[0].explanation),n.a.createElement("div",{className:"ilkform-container"},n.a.createElement("form",{className:"all-form"},n.a.createElement("div",{className:"boyut-hamur"},n.a.createElement("div",{className:"boyut-hamur_child"},n.a.createElement("h4",null,"Boyut Se\xe7",n.a.createElement("span",{id:"zorunluyildiz"},"*")),n.a.createElement("label",{className:"checkbox-container"},"K\xfc\xe7\xfck",n.a.createElement("input",{name:"boyut.kucuk",value:"kucuk",type:"checkbox",checked:j.boyut.kucuk,onChange:S}),n.a.createElement("span",{className:"checkmark"})),n.a.createElement("label",{className:"checkbox-container"},"Orta",n.a.createElement("input",{name:"boyut.orta",value:"orta",type:"checkbox",checked:j.boyut.orta,onChange:S}),n.a.createElement("span",{className:"checkmark"})),n.a.createElement("label",{className:"checkbox-container"},"B\xfcy\xfck",n.a.createElement("input",{name:"boyut.buyuk",value:"buyuk",type:"checkbox",checked:j.boyut.buyuk,onChange:S}),n.a.createElement("span",{className:"checkmark"}))),n.a.createElement("label",null,n.a.createElement("h4",null,"Hamur Se\xe7",n.a.createElement("span",{id:"zorunluyildiz"},"*")),n.a.createElement("select",{name:"hamur",value:j.hamur,onChange:S},n.a.createElement("option",{value:""},"Hamur Kal\u0131nl\u0131\u011f\u0131"),n.a.createElement("option",{value:"ince"},"\u0130nce Hamur"),n.a.createElement("option",{value:"normal"},"Normal Hamur"),n.a.createElement("option",{value:"kalin"},"Kal\u0131n Hamur")))),n.a.createElement("div",null,n.a.createElement("h2",null,"Ek Malzemeler"),n.a.createElement("p",{id:"kisit"},"En fazla 10 malzeme se\xe7ebilirsiniz.5\u20ba "),n.a.createElement("div",{className:"malzemeler-container"},n.a.createElement("div",{className:"malzemeblock-bir"},n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.peperroni",value:"peperroni",type:"checkbox",checked:j.malzemeler.peperroni,onChange:S}),"Peperroni"),n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.domates",value:"domates",type:"checkbox",checked:j.malzemeler.domates,onChange:S}),"Domates"),n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.biber",value:"biber",type:"checkbox",checked:j.malzemeler.biber,onChange:S}),"Biber"),n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.sosis",value:"sosis",type:"checkbox",checked:j.malzemeler.sosis,onChange:S}),"Sosis"),n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.misir",value:"misir",type:"checkbox",checked:j.malzemeler.misir,onChange:S}),"M\u0131s\u0131r")),n.a.createElement("div",{className:"malzemeblock-iki"},n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.sucuk",value:"sucuk",type:"checkbox",checked:j.malzemeler.sucuk,onChange:S}),"Sucuk"),n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.jalepano",value:"jalepano",type:"checkbox",checked:j.malzemeler.jalepano,onChange:S}),"Jalepano"),n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.cheddar",value:"cheddar",type:"checkbox",checked:j.malzemeler.cheddar,onChange:S})," ","Cheddar"),n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.ananas",value:"ananas",type:"checkbox",checked:j.malzemeler.ananas,onChange:S}),"Ananas"),n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.tavuk",value:"tavuk",type:"checkbox",checked:j.malzemeler.tavuk,onChange:S}),"Tavuk Izgara")),n.a.createElement("div",{className:"malzemeblock-uc"},n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.kabak",value:"kabak",type:"checkbox",checked:j.malzemeler.kabak,onChange:S})," ","Kabak"),n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.kanadajambonu",value:"kanadajambonu",type:"checkbox",checked:j.malzemeler.kanadajambonu,onChange:S})," ","Kanada Jambonu"),n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.sogan",value:"sogan",type:"checkbox",checked:j.malzemeler.sogan,onChange:S})," ","So\u011fan"),n.a.createElement("label",null,n.a.createElement("input",{name:"malzemeler.sarimsak",value:"sarimsak",type:"checkbox",checked:j.malzemeler.sarimsak,onChange:S}),"Sar\u0131msak")))),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"notlar"}),n.a.createElement("h2",null,"Sipari\u015f Notu"),n.a.createElement("input",{value:j.notlar,placeholder:"Sipari\u015fine eklemek istedi\u011fin bir not var m\u0131 ?",onChange:S,type:"text",id:"notlar",name:"notlar",autoFocus:!0}))),n.a.createElement("div",{className:"duz-cizgi"}),n.a.createElement("div",{className:"siparisverme-alan\u0131"},n.a.createElement(b,{toplamFiyat:a,setToplamFiyat:t,malzemeFiyat:r,setMalzemeFiyat:m,count:c,setCount:i,pizzaType:z}),n.a.createElement("div",{className:"hesap-alan\u0131"},n.a.createElement("h2",null,"Sipari\u015f Toplam\u0131"),n.a.createElement("h3",null,"Se\xe7imler ",n.a.createElement("span",{id:"fiyatlar"},r*c,"\u20ba ")),n.a.createElement("h4",null,"Toplam"," ",n.a.createElement("span",{id:"fiyatlar"},(a+r)*c,"\u20ba")),n.a.createElement(p.b,{to:"/SiparisOZeti"},n.a.createElement("button",{className:N?"renkli-dugme is-disabled":"renkli-dugme is-enabled",onClick:function(){N||d.a.post("https://reqres.in/api/users",j).then(function(e){console.log("baba bu data gelmeli ama",e.data);var a=Object.keys(e.data.boyut).filter(function(a){return!0===e.data.boyut[a]}).join(" "),t=Object.keys(e.data.malzemeler).filter(function(a){return!0===e.data.malzemeler[a]}).join(", "),l=Object(u.a)({},k,{boyut:a,malzemeler:t,hamur:e.data.hamur});o(l),console.log("sipari\u015f geldi ko\u015f\u015f\u015f\u015f",k),F()}).catch(function(e){console.log(e,"error"),alert("G\xf6nderilemedi")})},type:"button",disabled:N},"Sipari\u015f Ver"))),n.a.createElement("p",{className:"bosluk-b\u0131rak"})))))},y=t(35);t(70);var v=function(e){var a=e.siparisOzeti,t=e.pizzaType,l=e.count,r=e.toplamFiyat,m=e.malzemeFiyat;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"siparisozeti-container"},n.a.createElement("div",null,n.a.createElement("h1",{className:"siparis-baslik"},"Teknolojik Yemekler")),n.a.createElement("div",{className:"siparisozeti-yazilar"},n.a.createElement("p",null,"lezzetin yolda"),n.a.createElement("h4",null,"S\u0130PAR\u0130\u015e ALINDI"),n.a.createElement("div",{className:"duz-cizgi-iki"})),n.a.createElement("div",{className:"ozet-container"},n.a.createElement("div",null,n.a.createElement("h4",null,t[0].name)),n.a.createElement("div",null,n.a.createElement("p",null,"Boyut:",a.boyut),n.a.createElement("p",null,"Hamur:",a.hamur),n.a.createElement("p",null,"Ek malzemeler:",a.malzemeler)),n.a.createElement("div",{className:"toplamfiyat-sonuc"},n.a.createElement("h3",null,"Sipari\u015f Toplam\u0131"),n.a.createElement("h3",null,"Se\xe7imler ",m*l,"\u20ba "),n.a.createElement("h4",null,"Toplam ",(r+m)*l,"\u20ba ")))))},f={boyut:{kucuk:!1,orta:!1,buyuk:!1},hamur:"",malzemeler:{peperroni:!1,domates:!1,biber:!1,sosis:!1,misir:!1,sucuk:!1,kanadajambonu:!1,ananas:!1,cheddar:!1,jalepano:!1,kabak:!1,tavuk:!1,sogan:!1,sarimsak:!1},notlar:""},g=[{name:"Position Absoulete Ac\u0131 Pizza",price:85.5,explanation:"Frontend Dev olarak hala position:absolute kullan\u0131yorsan bu \xe7ok ac\u0131 pizza tam sana g\xf6re. Pizza, domates, peynir ve genellikle \xe7e\u015fitli di\u011fer malzemelerle kaplanm\u0131\u015f, daha sonra geleneksel olarak odun ate\u015finde bir f\u0131r\u0131nda y\xfcksek s\u0131cakl\u0131kta pi\u015firilen, genellikle yuvarlak, d\xfczle\u015ftirilmi\u015f mayal\u0131 bu\u011fday bazl\u0131 hamurdan olu\u015fan \u0130talyan k\xf6kenli lezzetli bir yemektir. K\xfc\xe7\xfck bir pizzaya bazen pizatta denir."}],N={name:g[0].name,boyut:"",malzemeler:"",hamur:""},j=function(){var e=Object(l.useState)(0),a=Object(c.a)(e,2),t=a[0],r=a[1],m=Object(l.useState)(g),s=Object(c.a)(m,2),u=s[0],b=(s[1],Object(l.useState)(g[0].price)),k=Object(c.a)(b,2),d=k[0],E=k[1],h=Object(l.useState)(1),j=Object(c.a)(h,2),O=j[0],x=j[1],C=Object(l.useState)(N),S=Object(c.a)(C,2),F=S[0],T=S[1],w=Object(l.useState)(f),I=Object(c.a)(w,2),P=I[0],A=I[1],H=Object(l.useState)(!0),R=Object(c.a)(H,2),D=R[0],K=R[1],M=Object(l.useState)({}),B=Object(c.a)(M,2),J=B[0],Y=B[1];function Z(e){var a=0;for(var t in e)!0===e[t]&&a++;r(5*a)}return n.a.createElement(p.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Barlow&family=Londrina+Solid:wght@300&family=Quattrocento:wght@700&family=Bebas+Neue&family=Chelsea+Market&family=Roboto&family=Roboto+Mono&family=Satisfy&display=swap",rel:"stylesheet"}),n.a.createElement("div",null,n.a.createElement(y.Switch,null,n.a.createElement(i.Route,{path:"/Formpage",exact:!0,component:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(z,{malzemeFiyat:t,setMalzemeFiyat:r,pizzaType:u,toplamFiyat:d,setToplamFiyat:E,count:O,setCount:x,siparisOzeti:F,setSiparisOzeti:T,fiyatHesapla:Z,specialPizza:P,setSpecialPizza:A,isDisabled:D,setIsDisabled:K,formErrors:J,setFormErrors:Y}))}})," ",n.a.createElement(i.Route,{path:"/SiparisOzeti",component:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{pizzaType:u,siparisOzeti:F,count:O,toplamFiyat:d,malzemeFiyat:t}))}}),n.a.createElement(i.Route,{path:"/",exact:!0,component:o})))))};m.a.render(n.a.createElement(j,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.73712c4f.chunk.js.map