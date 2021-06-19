
export default  function getClassNameTransactions(type) {
    
  if (type === "send") {
    return "hand__circle--left";
  }
  if (type === "received") {
    return "hand__circle--right";
  }
  return "hand__circle--tblue";
}
