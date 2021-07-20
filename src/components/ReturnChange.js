import React from "react";
import { useGlobalState } from "../context/context";
import { denominations } from "../notes";
function ReturnChange() {
  const { isChangeWindowOpen, alert, alertText, numberOfNotes } =
    useGlobalState();
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
            {denominations.map((item) => {
              return (
                <div className="itemText" key={item}>
                  {item.note}
                </div>
              );
            })}
          </div>
          <div className="numberOfNotes-container">
            <h3>No. of Notes</h3>
            {numberOfNotes.map((item) => {
              return <div className="itemText"> {item} </div>;
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default ReturnChange;
