import React from "react";
import sublinks from "./data.jsx";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
  const { openSidebar, closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={isSidebarOpen?"sidebar-wrapper show":"sidebar-wrapper"}>
      <div className="sidebar">
        <button className="sidebar-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link, index) => {
            const { page, links } = link;
            return (
              <article className="sidebar-title" key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { icon, url, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
            links.ma;
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
