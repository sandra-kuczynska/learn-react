import styles from "./NavBar.module.css";
import DesktopNavigation from "./components/DesktopNavigation";
import MobileNavigation from "./components/MobileNavigation";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
