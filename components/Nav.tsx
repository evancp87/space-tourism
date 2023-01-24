import React, { useState } from "react";
import Image from "next/image";
import Overlay from "../components/Overlay";
import Sidebar from "../components/Sidebar";

type Props = {};

function Nav({}: Props) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [overlay, setOverlay] = useState(false);

  // for open and closing of sidebar with hamburger
  const handleOpenSidebar = (e) => {
    e.stopPropagation();
    setOpenSidebar(!openSidebar);
    setOverlay(!overlay);
  };

  const handleCloseSidebar = (e) => {
    e.stopPropagation();
    setOpenSidebar(false);
    setOverlay(false);
  };

  return (
    <nav>
      <Image src="../assets/logo.svg" alt="logo" />
      <Image src="../assets/icon-hamburger.svg" alt="hamburger" />

      <ul>
        <li>00 Home</li>
        <li>01 Destination</li>
        <li>02 Crew</li>
        <li>03 Technology</li>
      </ul>

      {openSidebar && <Sidebar openSidebar={openSidebar} />}
      {openSidebar && <Overlay overlay={overlay} />}
    </nav>
  );
}

export default Nav;
