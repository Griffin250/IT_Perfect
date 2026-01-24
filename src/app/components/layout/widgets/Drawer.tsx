"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { navLinks } from "@/app/helpers/stub-data/nav-links";
import Link from "next/link";
import Logo from "./Logo";
import Button from "@/app/components/reusable/Button";
import ThemeToggle from "@/app/components/reusable/ThemeToggle";

interface Props {
  buttonChildren: React.ReactNode;
}

export default function SideDrawer({ buttonChildren }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Logo className="m-6 ml-3 bg-white" />
      <Divider />
      <List>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <ListItem
              key={link.name}
              className={`p-3 hover:rounded-md capitalize transition-colors ${
                isActive
                  ? "bg-primary text-white rounded-md"
                  : "bg-white hover:bg-gray-100"
              }`}
              disablePadding
            >
              <Link href={link.href} className="w-full">
                <ListItemText>{link.name}</ListItemText>
              </Link>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding className="p-3">
          <div className="w-full flex items-center gap-3">
            <Link href="/contact" className="flex-1">
              <Button className="rounded-[1.875rem] w-full">Get Started</Button>
            </Link>
            <ThemeToggle />
          </div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <button className="lg:hidden" onClick={toggleDrawer(true)}>
        {buttonChildren}
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
