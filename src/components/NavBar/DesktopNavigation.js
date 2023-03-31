import NavLinks from "./NavLinks";
import styles from "./NavBar.module.css";

const DesktopNavigation = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLinks />
    </nav>
  );
};

export default DesktopNavigation;
