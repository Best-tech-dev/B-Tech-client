"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AccordionContext = React.createContext<{
  openItem: string | null;
  setOpenItem: React.Dispatch<React.SetStateAction<string | null>>;
}>({ openItem: null, setOpenItem: () => {} });

export function Accordion({ children }: { children: React.ReactNode }) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className="space-y-4 mt-16">{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-[#71990b] rounded-xl overflow-hidden">
      {children}
    </div>
  );
}

export function AccordionTrigger({ id, title }: { id: string; title: string }) {
  const { openItem, setOpenItem } = React.useContext(AccordionContext);
  const isOpen = openItem === id;

  return (
    <button
      className="w-full flex items-center justify-between p-4 text-left font-semibold text-lg md:text-xl text-black bg-brand-primary"
      onClick={() => setOpenItem(isOpen ? null : id)}
    >
      {title}
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="h-5 w-5 text-black" />
      </motion.span>
    </button>
  );
}

export function AccordionContent({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { openItem } = React.useContext(AccordionContext);
  const isOpen = openItem === id;

  return (
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden px-4  text-black"
    >
      {isOpen && (
        <div className="pt-2 pb-4 space-y-4 text-sm md:text-base">
          {children}
        </div>
      )}
    </motion.div>
  );
}
