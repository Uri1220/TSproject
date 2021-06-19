export default function getDescriptionTransactions(type) {
  if (type === "send") {
    return "Отправлено";
  }
  if (type === "received") {
    return "Реинвест";
  }
  return "Обмен";
}
