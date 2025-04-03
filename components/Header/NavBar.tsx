"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AppBar, Toolbar, Box, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#161a25", color: "white" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box>
          <Image
            src="/logo-main.png"
            alt="Website Logo"
            width={150}
            height={40}
          />
        </Box>

        {/* Desktop Nav Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <NavLinks />
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          onClick={toggleMobileNav}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {mobileNavOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Navigation Overlay */}
      {mobileNavOpen && <MobileNav toggleMobileNav={toggleMobileNav} />}
    </AppBar>
  );
};

export default Navbar;
