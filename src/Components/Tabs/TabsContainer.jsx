import React from 'react';

const TabsContainer = ({id,chidren,area_label}) => {
    return (
        <>
           <div class="tab-pane fade" id={id} role="tabpanel" aria-labelledby={area_label}>
{chidren}
           </div> 
        </>
    );
}

export default TabsContainer;
