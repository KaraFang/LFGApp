import React from "react";

const Scroll = (props) => {
    return (
        <div className="bg-stone-900 overflow-y-scroll h-[800px]">
            {props.children}
        </div>
    );
};

export default Scroll;