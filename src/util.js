import { denominations } from "./notes";
function getChange(cashAmount, billAmount, setNumberOfNotes) {
  let newArr = [];
  let diff = parseInt(cashAmount) - parseInt(billAmount);
  for (let i = 0; i < denominations.length; i++) {
    if (diff === 0){
      newArr.push(0);
      break;
    }
    let count = 0;
    while (diff >= denominations[i].note) {
      diff = diff - denominations[i].note;
      count++;
      denominations[i].numberOfNotes++;
    }
    newArr.push(count);
  }
  setNumberOfNotes(newArr);
}
export { getChange };
