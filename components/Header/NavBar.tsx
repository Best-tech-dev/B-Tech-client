"use client";

import React, { useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { motion } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import LoginButton from "@/ui/LoginButton";

// Import dropdown items from constants
import {
  productItems,
  coursesItems,
  portalItems,
  otherItems,
} from "@/constants/navLinks";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDropdownOpen = (menu: string) => {
    setOpenDropdown(menu);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#161a25",
        boxShadow: 2,
        color: "white",
      }}
      className=""
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Website logo */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <Image
              src="/logo-main.png"
              alt="Website Logo"
              width={200}
              height={40}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              {anchorElNav ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {/* Mobile menu items */}
            </Menu>
          </Box>

          {/* Desktop Nav Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Button sx={{ color: "white" }}>Home</Button>

            {/* Our Services Sub-links */}
            <Box
              sx={{ position: "relative" }}
              onMouseEnter={() => handleDropdownOpen("services")}
              onMouseLeave={handleDropdownClose}
            >
              <Button
                sx={{ color: "white", display: "flex", alignItems: "center" }}
              >
                Our Services
                <motion.div
                  animate={{ rotate: openDropdown === "services" ? 180 : 0 }}
                >
                  <ArrowDropDownIcon />
                </motion.div>
              </Button>
              {openDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#161a25",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: 4,
                    minWidth: 150,
                    padding: "8px 0",
                  }}
                >
                  {productItems.map((item) => (
                    <MenuItem key={item} sx={{ px: 2 }}>
                      {item}
                    </MenuItem>
                  ))}
                </motion.div>
              )}
            </Box>

            {/* Our Courses Sub-links */}
            <Box
              sx={{ position: "relative" }}
              onMouseEnter={() => handleDropdownOpen("courses")}
              onMouseLeave={handleDropdownClose}
            >
              <Button
                sx={{ color: "white", display: "flex", alignItems: "center" }}
              >
                Our Courses
                <motion.div
                  animate={{ rotate: openDropdown === "courses" ? 180 : 0 }}
                >
                  <ArrowDropDownIcon />
                </motion.div>
              </Button>
              {openDropdown === "courses" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#161a25",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: 4,
                    minWidth: 150,
                    padding: "8px 0",
                  }}
                >
                  {coursesItems.map((item) => (
                    <MenuItem key={item} sx={{ px: 2 }}>
                      {item}
                    </MenuItem>
                  ))}
                </motion.div>
              )}
            </Box>

            {/* Portal Sub-links */}
            <Box
              sx={{ position: "relative" }}
              onMouseEnter={() => handleDropdownOpen("portal")}
              onMouseLeave={handleDropdownClose}
            >
              <Button
                sx={{ color: "white", display: "flex", alignItems: "center" }}
              >
                Portal
                <motion.div
                  animate={{ rotate: openDropdown === "portal" ? 180 : 0 }}
                >
                  <ArrowDropDownIcon />
                </motion.div>
              </Button>
              {openDropdown === "portal" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#161a25",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: 4,
                    minWidth: 150,
                    padding: "8px 0",
                  }}
                >
                  {portalItems.map((item) => (
                    <MenuItem key={item} sx={{ px: 2 }}>
                      {item}
                    </MenuItem>
                  ))}
                </motion.div>
              )}
            </Box>

            {/* Other Sub Links */}
            <Box
              sx={{ position: "relative" }}
              onMouseEnter={() => handleDropdownOpen("others")}
              onMouseLeave={handleDropdownClose}
            >
              <Button
                sx={{ color: "white", display: "flex", alignItems: "center" }}
              >
                Others
                <motion.div
                  animate={{ rotate: openDropdown === "others" ? 180 : 0 }}
                >
                  <ArrowDropDownIcon />
                </motion.div>
              </Button>
              {openDropdown === "others" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#161a25",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: 4,
                    minWidth: 150,
                    padding: "8px 0",
                  }}
                >
                  {otherItems.map((item) => (
                    <MenuItem key={item} sx={{ px: 2 }}>
                      {item}
                    </MenuItem>
                  ))}
                </motion.div>
              )}
            </Box>
          </Box>

          {/* Login and Sign Up Buttons */}
          <Box className="hidden lg:block">
            {/* <LoginButton /> */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#001F24",
                "&:hover": { transform: "scale(0.95)" },
              }}
            >
              Send a Brief
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
