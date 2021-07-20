import React from "react";
import { useGlobalState } from "../context/context";
import { getChange } from "../util";

function Cashgiven() {
  const {
    isCashWindowOpen,
    cashAmount,
    setCashAmount,
    setIsChangeWindowOpen,
    billAmount,
    setAlertText,
    setAlert,
    setNumberOfNotes,
  } = useGlobalState();
  const submitHandler = (e) => {
    e.preventDefault();
    if (parseInt(cashAmount) < parseInt(billAmount)) {
      setAlert(true);
      setAlertText("Cash Amount Too Low!");
      setIsChangeWindowOpen(true);
    } else if (cashAmount === billAmount) {
      setAlert(true);
      setAlertText("No change required");
      setIsChangeWindowOpen(true);
    } else {
      getChange(
        parseInt(cashAmount),
        parseInt(billAmount),
        setNumberOfNotes
      );
      setIsChangeWindowOpen(true);
    }
  };
  return (
    <>
      {isCashWindowOpen && (
        <section className="cash-amount-container">
          <input
            type="number"
            value={cashAmount}
            placeholder="Enter cash amount"
            onChange={(e) => setCashAmount(e.target.value)}
          />
          <button onClick={(e) => submitHandler(e)}>submit</button>
        </section>
      )}
    </>
  );
}

export default Cashgiven;
