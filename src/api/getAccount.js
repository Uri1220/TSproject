import { setAccount, setLoad } from "../store/reducer";

export default async function getAccount(dispatch) {
  return new Promise((resolve, reject) => {
    setLoad(dispatch, true);
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve({
        tickets: 7,
        balance: 5.6,
        address: "ouro1nynkd5t8tkplulwkel9p5eqxnzd3hl7q6pvrzy",
        data: {
          page: 1,
          pages: 3,
          limit: 6,
          total: 13,
          results: [
            {
              success: true,
              posmined: {
                symbol: "OURO",
                amount: 10,
              },
              hash: "hash",
              sender: "4980jgrjt948t04v5u23i-9i32l43324f234f23b ",
              amount: {
                symbol: "$",
                amount: 1240,
              },
              type: "send",
              timestamp: "09 июня 2021",
              height: "972GY1",
              recipient: "Получатель",
              fee: {},
              memo: "string",
            },
            {
              success: true,
              posmined: {
                symbol: "OURO",
                amount: 10,
              },
              hash: "hash",
              sender: "11980jgrjt948t04v5u23i-9i32l43324f234f23b ",
              amount: {
                symbol: "$",
                amount: 1240,
              },
              type: "reinvest",
              timestamp: "07 июня 2021",
              height: "345213",
              recipient: "Получатель",
              fee: {},
              memo: "string",
            },
            {
              success: true,
              posmined: {
                symbol: "OURO",
                amount: 1031,
              },
              hash: "hash",
              sender: "4980jgrjt948t04v5u23i-9i32l43324f234f23b ",
              amount: {
                symbol: "$",
                amount: 741240,
              },
              type: "send",
              timestamp: "09 июня 2021",
              height: "722GY1",
              recipient: "Получатель",
              fee: {},
              memo: "string",
            },
            {
              success: true,
              posmined: {
                symbol: "OURO",
                amount: 110,
              },
              hash: "hash",
              sender: "21980jgrj545t04v5u23i-9i32l43324f234f23b ",
              amount: {
                symbol: "$",
                amount: 134240,
              },
              type: "reinvest",
              timestamp: "04 июня 2021",
              height: "17532Y1",
              recipient: "Получатель",
              fee: {},
              memo: "string",
            },
            {
              success: true,
              posmined: {
                symbol: "OURO",
                amount: 5230,
              },
              hash: "hash",
              sender: "520jgrjt948t04v5u23i-9i32l43324f234f23b ",
              amount: {
                symbol: "$",
                amount: 95240,
              },
              type: "received",
              timestamp: "07 июня 2021",
              height: "5745Y1",
              recipient: "Получатель",
              fee: {},
              memo: "string",
            },
            {
              success: true,
              posmined: {
                symbol: "OURO",
                amount: 23510,
              },
              hash: "hash",
              sender: "1980jgrjt948t04v346fd4f234f23b ",
              amount: {
                symbol: "$",
                amount: 12240,
              },
              type: "received",
              timestamp: "08 июня 2021",
              height: "29653Y1",
              recipient: "Получатель",
              fee: {},
              memo: "string",
            },
          ],
        },
        BeneficiaryAccount: 46161632243262,
        fio: "NIKOLAY IVANOV",
        tel: "+7 888 888 88 88",
        email: "pochta@mail.ru",
      });
    }, 400);
  }).then((data) => {

    setAccount(dispatch, data);
    setLoad(dispatch, false);
  });
}
