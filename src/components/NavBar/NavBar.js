import "./NavBar.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
  return (
    <div class="Navbar">
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default NavBar;
