import NavLinks from "./NavLinks";
import styles from "./NavBar.module.css";

const MobileNavigation = () => {
  return (
    <nav className={styles.MobileNavigation}>
      <NavLinks />
    </nav>
  );
};

export default MobileNavigation;
