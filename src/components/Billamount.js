import React from "react";
import { useGlobalState } from "../context/context";

function Billamount() {
  const { billAmount, setBillAmount,setIsCashWindowOpen } = useGlobalState();
  return (
    <section className="bill-amount-container">
      <input
        type="number"
        value={billAmount}
        placeholder='Enter Bill Amount'
        onChange={(e) => setBillAmount(e.target.value)}
      />
      <button onClick={()=> setIsCashWindowOpen(true) }>submit</button>
    </section>
  );
}

export default Billamount;
