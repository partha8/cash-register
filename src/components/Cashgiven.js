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
  } = useGlobalState();
  const submitHandler = () => {
    if (cashAmount < billAmount) {
      setAlert(true);
      setAlertText("CashAmount Too Low!");
      setIsChangeWindowOpen(true);
    } else if (cashAmount === billAmount) {
      setAlert(true);
      setAlertText("No change required");
      setIsChangeWindowOpen(true);
    } else {
      getChange(cashAmount, billAmount);
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
            placeholder='Enter cash amount'
            onChange={(e) => setCashAmount(e.target.value)}
          />
          <button onClick={submitHandler}>submit</button>
        </section>
      )}
    </>
  );
}

export default Cashgiven;
