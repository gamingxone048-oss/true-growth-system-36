"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white/90 hover:text-white text-sm font-medium"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-white/10 bg-black/20 backdrop-blur-sm shadow-lg flex justify-center space-x-8 px-6 py-3"
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, to, onClick, ...rest }: { children: React.ReactNode; to?: string; onClick?: () => void; [key: string]: any }) => {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        {...rest}
        className="text-white/70 hover:text-white transition-colors duration-200 text-sm cursor-pointer border-none bg-transparent p-0 text-left"
      >
        {children}
      </button>
    );
  }
  
  return (
    <Link
      to={to || "#"}
      {...rest}
      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
    >
      {children}
    </Link>
  );
};