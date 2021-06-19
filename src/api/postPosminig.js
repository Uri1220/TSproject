import { setCodeShow, setLoad } from "../store/reducer";

export default async function postPhoneAuth(values, dispatch) {
  return new Promise((resolve, reject) => {
    setLoad(dispatch, true);
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve(values.phone);
    }, 400);
  }).then(() => {
    setLoad(dispatch, false);
    setCodeShow(dispatch, true);
  });
}
