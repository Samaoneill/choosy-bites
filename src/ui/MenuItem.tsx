import { NavLink } from "react-router-dom";

interface MenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
  to: string;
}

function MenuItem({ to, onClick, children }: MenuItemProps) {
  return (
    <li className="hover:bg-food-200">
      <NavLink
        to={to}
        className="block px-4 py-2 text-sm text-gray-700"
        onClick={onClick}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default MenuItem;
