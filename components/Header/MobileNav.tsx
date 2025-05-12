"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, IconButton, Button } from "@mui/material";
import { BsChevronDown } from "react-icons/bs";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { serviceItems, trainingItems, signInItems } from "@/constants/navLinks";

const navLinks = [
  { title: "About Us", href: "/about-us" },
  { title: "Services", subLinks: serviceItems },
  { title: "Courses", subLinks: trainingItems },
  { title: "Sign In", subLinks: signInItems },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSubMenu = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full bg-[#161a25] text-white flex flex-col z-50"
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <IconButton onClick={onClose}>
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-2 px-6 overflow-y-auto max-h-[85vh]">
        {navLinks.map(({ title, href, subLinks }) => (
          <div key={title}>
            {subLinks ? (
              // Parent link with sub-links
              <button
                className="w-full flex justify-between items-center py-2 text-sm font-medium"
                onClick={() => toggleSubMenu(title)}
              >
                {title}
                <BsChevronDown
                  className={`transition-transform ${
                    openMenu === title ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              // Normal link
              <Link
                href={href || "#"}
                className="block py-2 text-sm font-medium"
              >
                {title}
              </Link>
            )}

            {/* Sub-links */}
            {openMenu === title && subLinks && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pl-4 flex flex-col gap-1 overflow-hidden"
              >
                {/* {subLinks.map((sub, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="block py-1 text-white text-sm"
                  >
                    {sub}
                  </Link>
                ))} */}
              </motion.div>
            )}
          </div>
        ))}

        {/* CTA Button After Menus */}
        <Box className="mt-6">
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#001F24",
              fontSize: "12px",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </div>
    </motion.div>
  );
};

export default MobileNav;
