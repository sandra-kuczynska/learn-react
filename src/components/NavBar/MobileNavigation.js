import NavLinks from "./NavLinks";
import styles from "./NavBar.module.css";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <FiMenu
      className={styles.Hamburger}
      size="20px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <IoMdClose
      className={styles.Hamburger}
      size="20px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className={styles.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
