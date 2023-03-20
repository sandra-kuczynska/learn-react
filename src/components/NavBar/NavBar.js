// import "./NavBar.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
  return (
    <div className="Navbar">
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default NavBar;
