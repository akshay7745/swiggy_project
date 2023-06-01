import React from "react";

const Authentication = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  return (
    <div>
      {!isAuth && (
        <button
          style={{ backgroundColor: "transparent" ,border:"none"}}
          onClick={() => setIsAuth(true)}
        >
          Login
        </button>
      )}
      {isAuth && (
        <button
          style={{ backgroundColor: "transparent",border:"none" }}
          onClick={() => setIsAuth(false)}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Authentication;
