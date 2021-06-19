import { setLoad } from "../store/reducer";

export default async function postTransferOuro(values, dispatch) {
  return new Promise((resolve, reject) => {
    setLoad(dispatch, true);
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve(values);
    }, 400);
  }).then((data) => {
    setLoad(dispatch, false);
  });
}
