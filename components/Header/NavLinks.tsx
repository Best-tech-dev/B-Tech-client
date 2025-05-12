"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Box, Button, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { serviceItems, trainingItems, signInItems } from "@/constants/navLinks";

type NavItem = {
  label: string;
  href: string;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

type NavDropdown = {
  title: string;
  items: NavGroup[] | NavItem[]; // Allow both grouped and flat
  key: string;
};

const NavLinks = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  const dropdowns: NavDropdown[] = [
    { title: "Services", items: serviceItems, key: "services" },
    { title: "Trainings", items: trainingItems, key: "courses" },
    { title: "Sign In", items: signInItems, key: "portal" },
  ];

  return (
    <>
      {/* About Us */}
      <Button
        sx={{
          color: "white",
          "&:hover": {
            color: "#7ca412",
            backgroundColor: "transparent",
          },
        }}
        component={Link}
        href="/about-us"
      >
        About Us
      </Button>

      {/* Grouped Dropdowns */}
      {dropdowns.map(({ title, items, key }) => (
        <Box
          key={key}
          sx={{ position: "relative" }}
          onMouseEnter={() => {
            setOpenDropdown(key);
            setHoveredGroup(null);
          }}
          onMouseLeave={() => {
            setOpenDropdown(null);
            setHoveredGroup(null);
          }}
        >
          <Button
            sx={{
              color: "white",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                color: "#7ca412",
                backgroundColor: "transparent",
              },
            }}
          >
            {title}
            <motion.div animate={{ rotate: openDropdown === key ? 180 : 0 }}>
              <ArrowDropDownIcon />
            </motion.div>
          </Button>

          {/* Main Dropdown */}
          {openDropdown === key && (
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
                padding: "8px 0",
                zIndex: 20,
                minWidth: 200,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {Array.isArray(items) && "items" in items[0]
                ? // Grouped menu (NavGroup[])
                  (items as NavGroup[]).map((group) => (
                    <Box
                      key={group.label}
                      onMouseEnter={() => setHoveredGroup(group.label)}
                      onMouseLeave={() => setHoveredGroup(null)}
                      sx={{
                        position: "relative",
                        px: 2,
                        py: 1,
                        "&:hover": { backgroundColor: "#1e2535" },
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {group.label}
                      </Box>

                      {hoveredGroup === group.label && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: "100%",
                            backgroundColor: "#1e2535",
                            borderRadius: 4,
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            padding: "8px 0",
                            zIndex: 30,
                            minWidth: 180,
                          }}
                        >
                          {group.items.map((item) => (
                            <MenuItem
                              key={item.href}
                              component={Link}
                              href={item.href}
                              sx={{
                                px: 2,
                                py: 1,
                                color: "white",
                                fontSize: "0.875rem",
                                "&:hover": {
                                  backgroundColor: "#2a3248",
                                },
                              }}
                            >
                              {item.label}
                            </MenuItem>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))
                : // Flat list (NavItem[])
                  (items as NavItem[]).map((item) => (
                    <MenuItem
                      key={item.href}
                      component={Link}
                      href={item.href}
                      sx={{
                        px: 2,
                        py: 1,
                        color: "white",
                        fontSize: "0.875rem",
                        "&:hover": {
                          backgroundColor: "#2a3248",
                        },
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
            </motion.div>
          )}
        </Box>
      ))}

      {/* Blog */}
      <Button
        sx={{
          color: "white",
          "&:hover": {
            color: "#7ca412",
            backgroundColor: "transparent",
          },
        }}
        component={Link}
        href="#blog"
      >
        Blog
      </Button>
    </>
  );
};

export default NavLinks;
