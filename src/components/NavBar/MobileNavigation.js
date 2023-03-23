import CustomizedMenus from "../StyledMenu/StyledMenu";
import styles from "./NavBar.module.css";

const MobileNavigation = () => {
  return (
    <div className={styles.MobileNavigation}>
      <CustomizedMenus />
    </div>
  );
};

export default MobileNavigation;
