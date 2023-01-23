import React from 'react';

const TabsBtn = ({title,id,href,aria_control,ariaselected,active}) => {
    return (
        <>
            <li class="nav-item">
                <a class={"nav-link border-0 "+active} id={id} data-toggle="pill" href={href} role="tab" aria-controls={aria_control} aria-selected={ariaselected ? true : false}>{title}</a>
            </li>
        </>
    );
}

export default TabsBtn;
