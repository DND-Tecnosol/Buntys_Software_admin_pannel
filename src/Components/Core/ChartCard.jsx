import React from "react";

const ChartCard = ({ title, children }) => {
  return (
    <div className="container-fluide col-md-6 col-sm-12">
      <div class="card modal-dialog-scrollable" style={{height:'375px'}}>
        <div class="card-header">
          <h3 class="card-title">{title}</h3>
        </div>
        <div class="card-body">{children}</div>
      </div>
    </div>
  );
};

export default ChartCard;
