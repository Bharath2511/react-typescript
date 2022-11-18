import { useState } from "react";
export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {};
  const handleLogout = () => {};
  return (
    <div>
      <button>Login</button>
      <button>Logout</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};
