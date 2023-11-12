import {
  CHANGE_NOTLAR,
  CHANGE_BOYUT,
  CHANGE_MALZEMELER,
  CHANGE_HAMUR,
} from "../actions/pizzaFormAction";

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

export const pizzaFormReducer = (state = pizzaform, action) => {
  switch (action.type) {
    case CHANGE_BOYUT:
      return { ...state, boyut: action.payload };
    case CHANGE_HAMUR:
      return { ...state, hamur: action.payload };
    case CHANGE_MALZEMELER:
      return { ...state, malzemeler: action.payload };
    case CHANGE_NOTLAR:
      return { ...state, notlar: action.payload };
    default:
      return state;
  }
};
