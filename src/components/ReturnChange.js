import React from "react";
import { useGlobalState } from "../context/context";
import { notes } from "../notes";
function ReturnChange() {
  const { isChangeWindowOpen, alert, alertText } = useGlobalState();
  if (alert) {
    return (
      <>
        <h3 className="alert">{alertText}</h3>
      </>
    );
  }
  return (
    <>
      {isChangeWindowOpen && (
        <section className="change-amount-container">
          <div className="note-container">
            {notes.map((item) => {
              return <div key={item}>{item.note}</div>;
            })}
          </div>
          <div className="numberOfNotes-container">
            {notes.map((item) => {
              return <div> {item.numberOfNotes} </div>;
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default ReturnChange;
