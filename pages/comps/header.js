import React from "react";
import Link from "next/link";
import "../../public/static/css/header.scss"

const Header = () => {
  return (
    <div className="motherDiv">
      <Link href="/">
        <h1 className="head">Pokedex</h1>
      </Link>
    </div>
  );
};

export default Header;
