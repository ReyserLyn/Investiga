import Image from "next/image";
import Link from "next/link";

import DropdownMenuProfile from "../components/DropdownMenuProfile";
import NavbarOptions from "../components/NavbarOptions";
import SideBarPhone from "../components/SidebarPhone";

export default function Navbar() {
  return (
    <header className="w-full bg-white drop-shadow-sm z-50 mt-1">
      <div className="container md:container flex h-14 md:h-16 items-center px-4 md:px-6">
        <SideBarPhone />

        <Link
          href="/"
          className=" flex w-40 md:w-48 md:px-0 px-3 mx-auto md:ml-0 transition-all duration-300 hover:scale-105 hover:rotate-2"
          prefetch={false}
        >
          <Image
            src="/logo.svg"
            width="0"
            height="0"
            alt="Logo de investiga"
            className=" w-full h-auto lg:ml-3"
            priority
          />
          <span className="sr-only">Investiga</span>
        </Link>

        <NavbarOptions />

        <DropdownMenuProfile />
      </div>
    </header>
  );
}
