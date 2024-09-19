import { useEffect, useRef, useState } from "react";
import { MdMenu } from "react-icons/md";
import { useLogout } from "../features/auth/useLogout";
import { useUser } from "../features/auth/useUser";
import MenuItem from "./MenuItem";

function Menu() {
  const { isAuthenticated } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { logout } = useLogout();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleDropdownLinkClick = (callback?: () => void) => {
    setIsDropdownOpen(false);
    if (callback) callback();
  };

  return (
    <nav className="relative text-white">
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center text-3xl"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <MdMenu />
        </button>

        {isDropdownOpen && (
          <ul className="absolute right-0 mt-2 w-48 overflow-hidden rounded-md bg-food-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {isAuthenticated ? (
              <>
                <MenuItem
                  to="saved-recipes"
                  onClick={() => handleDropdownLinkClick()}
                >
                  Saved Recipes
                </MenuItem>
                <MenuItem
                  to="/account"
                  onClick={() => handleDropdownLinkClick()}
                >
                  Account
                </MenuItem>
                <MenuItem
                  to="/"
                  onClick={() => handleDropdownLinkClick(logout)}
                >
                  Logout
                </MenuItem>
              </>
            ) : (
              <MenuItem to="login" onClick={() => handleDropdownLinkClick()}>
                Login
              </MenuItem>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Menu;
