import React from "react";

const Button = () => {
    const buttonStyle = {
        padding: "10px 30px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
    };
    const buttonClick = (name) => {
        alert(`${name} Stop click me`);
    };

    return (
        <div>
            <button onClick={() => buttonClick("CJay")} style={buttonStyle}>
                Click Me
            </button>
        </div>
    );
};

export default Button;
