import React from "react";

const ChartCard = ({ title, children }) => {
  return (
    <div className="container-fluide col-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{title}</h3>
        </div>
        <div class="card-body">{children}</div>
      </div>
    </div>
  );
};

export default ChartCard;
