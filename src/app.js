import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 *
 * Header
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Cards
 *          - img
 *          - restaurant Name
 *          - rating
 * Footer
 */


// actual api data


// restaurant card



// ------------------------------------- BODY -----------------------------

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
