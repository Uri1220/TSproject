import React from "react";

export type StateType = {
  registerShow: {};
  codeShow: {};
  login: {};
  buyTicketShow: {};
  loader: {};
  account: any;
  outoToUSD: any;
  // USDToouto: any;
  showForm: {};
  typeOrder: {};
  buyOURO: any;
  posmining: any;
};
export const intialState = {
  registerShow: false,
  login: false,
  buyTicketShow: false,
  loader: true,
  outoToUSD: null,
  codeShow: false,
  account: null,
  showForm: false,
  typeOrder: "all",
  buyOURO: { dollar: 1, ouro: 25, payment__select:"BTC" },
  posmining: null,
};
export const ContextApp = React.createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({
  state: intialState,
  dispatch: () => null,
});

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
  ? {
    type: Key;
  }
  : {
    type: Key;
    payload: M[Key];
  };
};

type Payload = {
  REGISTER_SHOW: {};
  LOGIN: {};
  BUY_TICKET_SHOW: {};

  LOADER: {};
  CODESHOW: {};
  SHOW_FORM: {};
  TYPE_ORDER: {};
  SET_ACCOUNT: {};
  OURO_TO_USD: {};
  BUY_OURO: {}
  POSSMINING: {};
};

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];
const REGISTER_SHOW = "REGISTER_SHOW";
const LOGIN = "LOGIN";
const LOADER = "LOADER";
const CODESHOW = "CODESHOW";
const OURO_TO_USD = "OURO_TO_USD";
const BUY_TICKET_SHOW = "BUY_TICKET_SHOW";

const SHOW_FORM = "SHOW_FORM";
const TYPE_ORDER = "TYPE_ORDER";
const BUY_OURO = "BUY_OURO"
const POSSMINING = "POSSMINING";
const SET_ACCOUNT = "SET_ACCOUNT";
export const reducer = (state: StateType, action: Actions) => {
  switch (action.type) {
    case POSSMINING:
      return { ...state, posmining: action.payload };
    case OURO_TO_USD:
      return { ...state, outoToUSD: action.payload };
    case SET_ACCOUNT:
      return { ...state, account: action.payload };
    case CODESHOW:
      return { ...state, codeShow: action.payload };
    case LOADER:
      return { ...state, loader: action.payload };
    case REGISTER_SHOW:
      return { ...state, registerShow: action.payload };
    case LOGIN:
      return { ...state, login: action.payload };
    case BUY_TICKET_SHOW:
      return { ...state, buyTicketShow: action.payload };
    case SHOW_FORM:
      return { ...state, showForm: action.payload };
    case TYPE_ORDER:
      return { ...state, typeOrder: action.payload };
    case BUY_OURO:
      return { ...state, buyOURO: action.payload };
    default:
      return state;
  }
};
export const setRegisterShow = (dispatch: Function, payload: boolean) =>
  dispatch({ type: REGISTER_SHOW, payload });
export const setCodeShow = (dispatch: Function, payload: boolean) =>
  dispatch({ type: CODESHOW, payload });
export const setLogin = (dispatch: Function, payload: boolean) =>
  dispatch({ type: LOGIN, payload });
export const setLoad = (dispatch: Function, payload: boolean) =>
  dispatch({ type: LOADER, payload });
export const setBuyTicketShow = (dispatch: Function, payload: boolean) =>
  dispatch({ type: BUY_TICKET_SHOW, payload });
export const setShowForm = (dispatch: Function, payload: boolean) =>
  dispatch({ type: SHOW_FORM, payload });
export const setTypeOrder = (dispatch: Function, payload: string) =>
  dispatch({ type: TYPE_ORDER, payload });
export const setAccount = (dispatch: Function, payload: {}) =>
  dispatch({ type: SET_ACCOUNT, payload });
export const setOuroToUsd = (dispatch: Function, payload: {}) =>
  dispatch({ type: OURO_TO_USD, payload });
export const setBuyOURO = (dispatch: Function, payload: any) =>
  dispatch({ type: BUY_OURO, payload });
export const setPosming = (dispatch: Function, payload: {}) =>
  dispatch({ type: POSSMINING, payload });
