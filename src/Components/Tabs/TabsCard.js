import React from "react";

const TabsCard = ({children}) => {
  return (
    <>
      <div class="card-tabs">
        <div class="card-header p-0 pt-1 border-bottom-0">
          <ul
            class="nav nav-tabs"
            id="custom-tabs-three-tab"
            role="tablist"
          >
            {children}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TabsCard;
