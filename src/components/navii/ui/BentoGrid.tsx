import { motion } from "framer-motion";
import { ReactNode } from "react";
import { containerVariants, itemVariants } from "./SectionWrapper";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className = "" }: BentoGridProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
}

export const BentoItem = ({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1
}: BentoItemProps) => {
  const colClasses = colSpan === 2 ? "md:col-span-2" : "";
  const rowClasses = rowSpan === 2 ? "row-span-2" : "";

  return (
    <motion.div
      variants={itemVariants}
      className={`${colClasses} ${rowClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};
