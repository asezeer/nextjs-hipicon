import React from "react";
import Link from "next/link";
import Title from "../ui/Title";

const PaginationBar = () => {
  return (
    <nav aria-label="...">
      <div className="flex flex-col items-center w-full">
        <div className="mt-10">
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="page-item disabled px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/taki">Önceki</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/taki">1</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/taki">2</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/taki">3</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/taki">Sonraki</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PaginationBar;
