'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Avatar, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import logo from "@/Assets/Icon/logo.svg"
import darkLogo from "@/Assets/Icon/dark-logo.svg"
import menuIconone from "@/Assets/Icon/menu-icon-1.svg"
import menuIconTwo from "@/Assets/Icon/menu-icon-2.svg"
import Link from "next/link";

const Header = ({ isActive }: { isActive: boolean }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }
    setOpenDrawer(open);
  };

  const menuItems = [
    { name: "PROGRAMS", href: "/programmes" },
    { name: "TRAINERS", href: "/trainers" },
    { name: "PRICING", href: "/pricing-plans" },
    { name: "NEW TO KNOX", href: "/new-to-knox" },
    { name: "RESET:RETREATS", href: "/reset-retreats" },
    { name: "SHOP", href: "/shop" }
  ];

  return (
    <div className="flex items-center justify-between w-full pt-6 px-5 absolute z-10 md:px-10 lg:px-5">
      <Image
        src={isActive ? darkLogo : logo}
        alt="Logo"
        width={0}
        height={0}
        className="w-24 md:w-32 lg:w-12 object-cover"
      />
      
      <ul className="hidden lg:flex gap-4 md:gap-6 lg:gap-8 text-sm md:text-base font-normal">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link 
              href={item.href} 
              className={`${isActive ? "text-black" : "text-white"} hover:opacity-80`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="flex items-center gap-5">
        <Button
          variant="contained"
          sx={{
            backgroundColor: isActive ? "#C8E76E" : "#D9D9D966",
            color: isActive ? "black" : "white",
            borderRadius: "20px",
            padding: "6px 20px",
            whiteSpace: "nowrap",
            display: { xs: "none", md: "none", lg: "block" },
          }}
        >
          SCHEDULE/BOOK CLASSES
        </Button>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 32, height: 32,display: { xs: "none", md: "none", lg: "flex" } }}
        />
      </div>
      
      <div className="lg:hidden flex items-center gap-5">
      <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 32, height: 32 }}
        />
        <IconButton onClick={toggleDrawer(true)}>
          <div className="flex flex-col items-end gap-1">
          <Image
            src={menuIconone}
            alt="Menu"
            width={0}
            height={0}
            className="w-7 h-0.5 object-cover"
            />
             <Image
            src={menuIconTwo}
            alt="Menu"
            width={0}
            height={0}
            className="w-4 h-0.5 object-cover"
            />
            </div>
        </IconButton>
        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} onClick={toggleDrawer(false)}>
                <ListItemButton>
                  <Link href={item.href}>
                    <ListItemText primary={item.name} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;