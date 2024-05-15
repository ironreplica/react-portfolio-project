import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#c6cdd5] sm:text-xl rounded md:p-0 hover:text-[#ecf2f8]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
