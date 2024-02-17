import React, { createContext, useContext, useEffect, useState } from "react";
// Step 1: Create a context
const GlobalStateContext = createContext();

// Step 2: Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    user: null,
    imageBaseUrl: "https://manishdesignstudio.in/manishdesignbackend/public/storage/",
    cart_products:[]
  });
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("manish_design_user")))
    setGlobalState({ ...globalState, user: JSON.parse(localStorage.getItem("manish_design_user"))});
    // if(localStorage.getItem("manish_design_user")){
    //   setGlobalState({ ...globalState, cart_products: JSON.parse(localStorage.getItem("manish_design_user")).cart_products});
    // }
  }, []);
  useEffect(() => {
    
    if(globalState.user){
      setGlobalState({ ...globalState, cart_products: JSON.parse(localStorage.getItem("manish_design_user")).cart_products});
    }
  
  }, [globalState.user]);
  return <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>{children}</GlobalStateContext.Provider>;
};
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
