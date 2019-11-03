import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div>
          <FontAwesomeIcon icon={["fab", "apple"]} />
        </div>
        <div>
          <FontAwesomeIcon icon={["fab", "android"]} />
        </div>
        <div>
          <FontAwesomeIcon icon={["fab", "windows"]} />
        </div>
      </div>
      <div className="sidebar__rule"></div>
      <div className="sidebar__container">
        <div>
          <div className="sidebar__container--portrait"></div>
        </div>
        <div>
          <div className="sidebar__container--landscape"></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
