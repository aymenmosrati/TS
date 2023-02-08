import { useState } from "react";

export const LoggedIn = () => {
  const [isLggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};
