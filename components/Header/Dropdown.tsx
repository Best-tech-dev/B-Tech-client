"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface DropdownProps {
  label: string;
  items: string[];
}

export default function Dropdown({ label, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={{ position: "relative" }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button sx={{ color: "white", display: "flex", alignItems: "center" }}>
        {label}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ArrowDropDownIcon />
        </motion.div>
      </Button>

      {isOpen && (
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
            <MenuItem key={item} sx={{ px: 2 }}>
              {item}
            </MenuItem>
          ))}
        </motion.div>
      )}
    </Box>
  );
}
