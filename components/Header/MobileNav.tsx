import React, { useState } from "react";
import { Box, Button, Collapse } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  productItems,
  coursesItems,
  portalItems,
  otherItems,
} from "@/constants/navLinks";

const MobileNav = ({ toggleMobileNav }: { toggleMobileNav: () => void }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#161a25",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        zIndex: 50,
      }}
    >
      {/* Home */}
      <Button
        sx={{ color: "white", fontSize: "1.2rem" }}
        onClick={toggleMobileNav}
      >
        Home
      </Button>

      {/* Submenus */}
      {[
        { title: "Our Services", items: productItems, key: "services" },
        { title: "Our Courses", items: coursesItems, key: "courses" },
        { title: "Portal", items: portalItems, key: "portal" },
        { title: "Others", items: otherItems, key: "others" },
      ].map(({ title, items, key }) => (
        <Box key={key} sx={{ width: "80%" }}>
          <Button
            onClick={() => toggleDropdown(key)}
            sx={{
              color: "white",
              fontSize: "1.2rem",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {title}
            <motion.div animate={{ rotate: openDropdown === key ? 180 : 0 }}>
              <ArrowDropDownIcon />
            </motion.div>
          </Button>
          <Collapse in={openDropdown === key}>
            <Box
              sx={{ pl: 4, display: "flex", flexDirection: "column", gap: 1 }}
            >
              {items.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "white", fontSize: "1rem", textAlign: "left" }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Collapse>
        </Box>
      ))}

      {/* Close Menu */}
      <Button
        sx={{
          backgroundColor: "#001F24",
          color: "white",
          "&:hover": { transform: "scale(0.95)" },
        }}
        onClick={toggleMobileNav}
      >
        Close Menu
      </Button>
    </Box>
  );
};

export default MobileNav;
