"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { navLinks } from "@/app/helpers/stub-data/nav-links";
import SideDrawer from "./Drawer";
import Logo from "./Logo";
import Button from "@/app/components/reusable/Button";
import ThemeToggle from "@/app/components/reusable/ThemeToggle";
import LanguageToggle from "@/app/components/reusable/LanguageToggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex p-3 lg:p-6 items-center justify-between fixed z-50 top-0 bg-white dark:bg-gray-900 w-screen shadow-lg dark:shadow-gray-800">
      <Logo />
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
