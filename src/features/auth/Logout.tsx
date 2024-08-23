import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isPending: isLoading } = useLogout();

  return (
    <button disabled={isLoading} onClick={() => logout()}>
      {!isLoading ? <p>Logout</p> : <p>...Loading</p>}
    </button>
  );
}

export default Logout;
