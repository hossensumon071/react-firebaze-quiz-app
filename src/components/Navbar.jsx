import Account from "./Account";
import logo from "../assets/images/logo-bg.png"
import classes from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={classes.brand}>
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </a>
          </li>
        </ul>
        <Account/>
      </nav>
    </div>
  );
};

export default Navbar;
