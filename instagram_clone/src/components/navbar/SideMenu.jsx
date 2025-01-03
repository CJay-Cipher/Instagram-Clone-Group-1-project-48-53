// import React, { useState } from "react";
// import "./sidebar.css";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { IoClose } from "react-icons/io5";

// const SideMenu = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen((prevState) => !prevState);
//     };

//     return (
//         <div className="side-bar">
//             <button className="menu-button" onClick={toggleMenu}>
//                 {isMenuOpen ? <IoClose /> : <BsThreeDotsVertical />}
//             </button>
//             <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
//                 <h2>Menu</h2>
//                 <ul>
//                     <li>Item 1</li>
//                     <li>Item 2</li>
//                     <li>Item 3</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default SideMenu;
