export const CHANGE_NOTLAR = "changes nots on the form";
export const CHANGE_BOYUT = "changes size on the form";
export const CHANGE_MALZEMELER = "changes suplies on the form";
export const CHANGE_HAMUR = "changes dough the form";

export const changeNotlar = (value) => {
  return {
    type: CHANGE_NOTLAR,
    payload: value,
  };
};
export const changeBoyut = (value) => {
  return {
    type: CHANGE_BOYUT,
    payload: value,
  };
};
export const changeMalzemeler = (value) => {
  return {
    type: CHANGE_MALZEMELER,
    payload: value,
  };
};
export const changeHamur = (value) => {
  return {
    type: CHANGE_HAMUR,
    payload: value,
  };
};
