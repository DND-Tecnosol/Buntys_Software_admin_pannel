import React from 'react';

const ActiveTabsContainer = ({id,children,area_label,active}) => {
    return (
        <>
         <div class={"tab-pane fade "+active} id={id} role="tabpanel" aria-labelledby={area_label}>
            {children}
         </div>   
        </>
    );
}



export default ActiveTabsContainer;
