import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

function Submenu() {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef();
  useEffect(() => {
    const { center, bottom } = location;
    container.current.style.left = `${center}px`;
    container.current.style.top = `${bottom}px`;
  }, [location]);
  return (
    <aside className={isSubmenuOpen ? "submenu show" : "submenu"} ref={container}>
      <h4>{page}</h4>
      <div className="show-links">
        {links.map((link,index)=>{
          const {label,icon,url}=link;
          return <a key={index} href={url}>{icon}{label}</a>
        })}
      </div>
    </aside>
  );
}

export default Submenu;
