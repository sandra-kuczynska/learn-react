import styles from "./NavBar.module.css";
import Navigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
