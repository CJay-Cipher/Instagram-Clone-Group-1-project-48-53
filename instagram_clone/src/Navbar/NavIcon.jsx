import React from "react";

const NavIcon = ({ Icon, IconTitle }) => {
    return (
        <div className="nav-icon">
            <Icon size="30px" color="#fff" />
            {/* <h5>{IconTitle}</h5> */}
        </div>
    );
};

export default NavIcon;
