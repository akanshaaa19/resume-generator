import React, {useContext} from "react";
import AuthContext from "../../store/auth-context";

function Header() {

    const ctx = useContext(AuthContext);


  return (
    <header className="py-3 px-16 flex text-2xl font-extrabold bg-[#1B1B1B] items-center justify-between w-screen">
        <i className="fa-solid fa-2x fa-folder text-white"></i>
      <button onClick={ctx.logOutHandeler}>
        <i className="fa-solid fa-right-from-bracket fa-2x text-white"></i>
      </button>
    </header>
  );
}

export default Header;
