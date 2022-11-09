import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="text-[2rem] font-dancing font-bold">
      <button className="px-[5px] py-[10px] lowercase hover:text-primary">
        <Link href="/">Hipicon</Link>
      </button>
    </div>
  );
};

export default Logo;
