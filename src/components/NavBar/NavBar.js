import styles from "./NavBar.module.css";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
