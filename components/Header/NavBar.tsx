"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Toolbar, Box, IconButton, Button } from "@mui/material";
import { BsTextIndentLeft } from "react-icons/bs";
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
      sx={{
        backgroundColor: "#161a25",
        color: "white",
        borderBottom: "1px solid #7ca412",
      }}
    >
      <Toolbar disableGutters>
        {/* CONTAINER for center alignment */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1440px",
            margin: "0 auto",
            px: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box>
            <Link href="/">
              <Image
                src="/logo-main.png"
                alt="Website Logo"
                width={150}
                height={40}
                priority
                className="w-40 h-auto"
              />
            </Link>
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
            {mobileNavOpen ? (
              <CloseIcon />
            ) : (
              <BsTextIndentLeft size={24} className="text-white" />
            )}
          </IconButton>

          {/* Contact Us */}
          <Box className="hidden lg:block">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                padding: "10px 20px",
                border: "1px solid #7ca412",
                borderRadius: "100px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#001F24",
                  transform: "scale(0.95)",
                },
                "&:active": { transform: "scale(0.95)" },
              }}
              component={Link}
              href="#contact"
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Toolbar>

      {/* Mobile Navigation Overlay */}
      {mobileNavOpen && (
        <MobileNav isOpen={mobileNavOpen} onClose={toggleMobileNav} />
      )}
    </AppBar>
  );
};

export default Navbar;
