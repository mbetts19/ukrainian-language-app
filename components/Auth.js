import { useState } from "react";

export default function Auth() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // Simulate a login action
    setUser({ name: "Miroslav" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="text-center p-4">
      {user ? (
        <>
          <p className="text-lg">Welcome, {user.name}!</p>
          <button onClick={handleLogout} className="btn btn-primary m-2">Logout</button>
        </>
      ) : (
        <button onClick={handleLogin} className="btn btn-primary m-2">Login</button>
      )}
    </div>
  );
}