import React from "react";
import "./navBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <h2>
        <span>📕</span> Contacts
      </h2>
      <div className="profile">
        <img
          src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="profile picture"
        ></img>
        <h3>Utkrist</h3>
      </div>
    </div>
  );
}

export default NavBar;
