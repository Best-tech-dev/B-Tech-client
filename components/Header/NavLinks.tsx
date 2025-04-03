import React, { useState } from "react";
import { Box, Button, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  productItems,
  coursesItems,
  portalItems,
  otherItems,
} from "@/constants/navLinks";

const NavLinks = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Home */}
      <Button sx={{ color: "white" }}>Home</Button>

      {/* Submenus */}
      {[
        { title: "Our Services", items: productItems, key: "services" },
        { title: "Our Courses", items: coursesItems, key: "courses" },
        { title: "Portal", items: portalItems, key: "portal" },
        { title: "Others", items: otherItems, key: "others" },
      ].map(({ title, items, key }) => (
        <Box
          key={key}
          sx={{ position: "relative" }}
          onMouseEnter={() => setOpenDropdown(key)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Button
            sx={{ color: "white", display: "flex", alignItems: "center" }}
          >
            {title}
            <motion.div animate={{ rotate: openDropdown === key ? 180 : 0 }}>
              <ArrowDropDownIcon />
            </motion.div>
          </Button>

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
                minWidth: 150,
                padding: "8px 0",
              }}
            >
              {items.map((item) => (
                <MenuItem key={item} sx={{ px: 2, color: "white" }}>
                  {item}
                </MenuItem>
              ))}
            </motion.div>
          )}
        </Box>
      ))}
    </>
  );
};

export default NavLinks;
