import React from "react";

const Page = ({ title, children }) => {
  return (
    <div className="page-container">
      <h1 className="header-title">{title}</h1>
      {children}
    </div>
  );
};

export default Page;
