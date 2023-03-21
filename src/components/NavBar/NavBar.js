import styles from "./NavBar.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default NavBar;
