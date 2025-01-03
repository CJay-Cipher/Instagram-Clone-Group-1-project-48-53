import React from "react";
import { FiUserPlus } from "react-icons/fi";

function Intro() {
    return (
        <div className="intro">
            <h4>Mediamodifier•Building Brands</h4>
            <p>Product/service</p>
            <p>We provide essential tools to help entrepreneurs grow their business online.</p>
            <a href="mediamodifier.com">mediamodifier.com</a>

            <p className="signed">
                Signed <span>by tini_send</span>
            </p>
            <div className="connect-user">
                <button>Follow</button>
                <button>Message</button>
                <button>
                    <FiUserPlus size={20} />
                </button>
            </div>
        </div>
    );
}

export default Intro;
