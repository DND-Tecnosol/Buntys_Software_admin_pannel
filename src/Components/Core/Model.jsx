import React from 'react';

const Model = ( {title,id,children }) => {
    return (
        <>
            <div
                class="modal fade"
                id={id}
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content border-0">
                        <div class="modal-header border-0">
                            <h5 class="modal-title" id="exampleModalLabel">
                                {title}
                            </h5>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Model;
