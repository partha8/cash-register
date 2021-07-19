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
            <h3>Notes</h3>
            {notes.map((item) => {
              return (
                <div className="itemText" key={item}>
                  {item.note}
                </div>
              );
            })}
          </div>
          <div className="numberOfNotes-container">
            <h3>No. of Notes</h3>
            {notes.map((item) => {
              return <div className="itemText"> {item.numberOfNotes} </div>;
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default ReturnChange;
