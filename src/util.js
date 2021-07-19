
import { notes } from "./notes";

function getChange(cashAmount, billAmount) {
  let diff = parseInt(cashAmount) - parseInt(billAmount);
  for (let i = 0; i < notes.length; i++) {
    if (diff === 0) break;
    while (diff >= notes[i].note) {
      diff = diff - notes[i].note;
      notes[i].numberOfNotes++;
      console.log(notes[i].note, notes[i].numberOfNotes);
    }
  }
}
export { getChange };
