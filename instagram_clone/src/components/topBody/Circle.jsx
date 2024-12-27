import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

function Circle() {
    return (
        <div className="circle-container">
            <div className="circle">
                <div className="circle-image-box even">
                    <IoMdHeartEmpty className="circle-image" />
                </div>
                <p>Temlates</p>
            </div>
            <div className="circle">
                <div className="circle-image-box">
                    <IoMdHeartEmpty className="circle-image" />
                </div>
                <p>Reviews</p>
            </div>
            <div className="circle">
                <div className="circle-image-box even">
                    <IoMdHeartEmpty className="circle-image" />
                </div>
                <p>Mentions</p>
            </div>
            <div className="circle">
                <div className="circle-image-box">
                    <IoMdHeartEmpty className="circle-image" />
                </div>
                <p>Tips</p>
            </div>
            <div className="circle">
                <div className="circle-image-box even">
                    <IoMdHeartEmpty className="circle-image" />
                </div>
                <p>Blog</p>
            </div>
        </div>
    );
}

export default Circle;
