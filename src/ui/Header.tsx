import { Link, NavLink } from "react-router-dom";
import Logout from "../features/auth/Logout";
import { useUser } from "../features/auth/useUser";
import Logo from "./Logo";

function Header() {
  const { isAuthenticated } = useUser();

  return (
    <div className="mb-4 flex items-center justify-between rounded-xl bg-food-500 p-4">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="text-white">
        {isAuthenticated ? (
          <ul>
            <li>
              <NavLink to="account">Account</NavLink>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        ) : (
          <NavLink to="login">Login</NavLink>
        )}
      </nav>
    </div>
  );
}

export default Header;
