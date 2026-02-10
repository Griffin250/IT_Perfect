"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { navLinks } from "@/app/helpers/stub-data/nav-links";
import SideDrawer from "./Drawer";
import Button from "@/app/components/reusable/Button";
import ThemeToggle from "@/app/components/reusable/ThemeToggle";
import LanguageToggle from "@/app/components/reusable/LanguageToggle";
import Logo from "../../../../assets/IT_Perfect_Logo.png";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex p-2 lg:p-4 items-center justify-between fixed z-50 top-0 bg-white dark:bg-gray-900 w-screen shadow-lg dark:shadow-gray-800">
      <Link href="/">
        <Image
          src={Logo}
          width={200}
          height={100}
          alt="IT Perfect Logo"
          className="cursor-pointer w-24 h-24 dark:invert"
          priority={true}
        />
      </Link>
      <nav className="hidden lg:flex">
        <ul className="flex gap-4 flex-row capitalize">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.name}
                className={`p-3 hover:rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-white rounded-md dark:bg-primary"
                    : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
                }`}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="hidden lg:flex flex-row items-center gap-3">
        <LanguageToggle />
        <ThemeToggle />
        <Link href="/contact">
          <Button className="rounded-[1.875rem]">Get Started</Button>
        </Link>
      </div>

      <div className="flex lg:hidden items-center gap-2">
        <LanguageToggle />
        <SideDrawer
          buttonChildren={
            <MenuOutlinedIcon
              fontSize="large"
              className="m-3 hover:bg-gray-100  hover:rounded-md"
            />
          }
        />
      </div>
    </header>
  );
}
