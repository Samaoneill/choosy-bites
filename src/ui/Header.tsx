import { Link } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <div className="mb-4 flex items-center justify-between rounded-xl bg-food-500 p-4">
      <Link to="/">
        <Logo />
      </Link>
      <Menu />
    </div>
  );
}

export default Header;
