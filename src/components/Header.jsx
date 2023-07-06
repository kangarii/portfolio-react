import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container flex flex-row items-center justify-between mt-20">
        <div className="mx-2">
          <button className="bg-stone-900 font-semibold text-white px-3 py-1 rounded-lg">
            HOME
          </button>
        </div>
        <div className="mx-2">
          <button className="text-white font-semibold">PROJECT</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
