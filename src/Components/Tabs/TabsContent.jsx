import React from 'react';

const TabsContent = ({ children }) => {
    return (
        <>
            <div class="tab-content" id="custom-tabs-three-tabContent">
                {children}
            </div>
        </>
    );
}

export default TabsContent;
