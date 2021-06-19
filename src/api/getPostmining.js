import { setLoad, setPosming } from "../store/reducer";

export default async function getPostmining(dispatch) {
  return new Promise((resolve, reject) => {
    setLoad(dispatch, true);
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve({
        dayPercent: 0.2125,
        coefficientStacture: 145,
        lastTransactionCondition: 7,
        startDayPercent: 0.2789,
        cofficentAccumulation: 2.36,
        cofficentCorrections: 2.36,
        everySeconds: [0.065, 0.062, 0.067, 0.034],
        commissionReinvest: 0.02,
      });
    }, 400);
  }).then((data) => {
    setPosming(dispatch, data);
    setLoad(dispatch, false);
  });
}
