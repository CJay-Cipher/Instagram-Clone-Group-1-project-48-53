import React from "react";
import Mlogo from "../../assets/m_logo.png";

function Numbers() {
    return (
        <div className="numbers">
            <img src={Mlogo} className="body-profile-pic" alt="user profile image" />
            <div className="counts">
                <h3>1,132</h3>
                <p>Posts</p>
            </div>
            <div className="counts">
                <h3>60K</h3>
                <p>Followers</p>
            </div>
            <div className="counts">
                <h3>4</h3>
                <p>Following</p>
            </div>
        </div>
    );
}

export default Numbers;
