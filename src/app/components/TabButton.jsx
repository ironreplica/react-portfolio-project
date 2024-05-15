import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  //Props
  const buttonClasses = active
    ? "text-lightest border-b border-custom2"
    : "text-light";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-lightest ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
