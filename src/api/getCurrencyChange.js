import { setLoad, setOuroToUsd } from "../store/reducer";

export default async function getCurrencyChange(dispatch) {
  setLoad(dispatch, true);
  return new Promise((resolve, reject) => {
    setLoad(dispatch, true);
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve({
        update: 58,
        transfer: "0.04",
      });
    }, 400);
  }).then((data) => {
    setOuroToUsd(dispatch, data);

    setLoad(dispatch, false);
  });
  // axios
  //   .get("https://btc-alpha.com/api/v1/pairs")
  //   .then((data) => {
  //     const currencyUsd = data.data.find((i) => i.name === "OURO_USD");
  //     console.log(currencyUsd);
  //     minimum_order_value;
  //     setCurrency(dispatch, data.minimum_order_value);
  //     setLoad(dispatch, false);
  //   })
  //   .catch((err) => console.error(err));
}
