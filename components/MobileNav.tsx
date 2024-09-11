"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center ">
        <CiMenuFries className="text-[32px] text-blue-700 " />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        {/* <div>logo</div> */}

        <div className="mt-32 mb-40 text-center text2xl ">
          <Link href="/">
            <h1 className="text-4xl font-semibold ">
              Swastik<span className="text-blue-700">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-6">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={` ${link.path=== pathname && "text-blue-700 border-b-2 border-blue-700"} text-xl capitalize hover:text-blue-700 transition-all ` }
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
