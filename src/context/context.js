import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isCashWindowOpen, setIsCashWindowOpen] = useState(false);
  const [isChangeWindowOpen, setIsChangeWindowOpen] = useState(false);

  const [billAmount, setBillAmount] = useState();
  const [cashAmount, setCashAmount] = useState();
  const [alertText, setAlertText] = useState("");
  const [alert, setAlert] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isCashWindowOpen,
        isChangeWindowOpen,
        billAmount,
        cashAmount,
        alertText,
        alert,
        setIsCashWindowOpen,
        setIsChangeWindowOpen,
        setBillAmount,
        setCashAmount,
        setAlert,
        setAlertText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalState = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalState };
