import { motion } from "framer-motion";

const SwitchLang = ({ isArabic, ...props }) => {
  const className = `switchLang ${!isArabic ? "on" : "off"}`;

  return (
    <motion.div animate className={className} {...props}>
      <motion.div
        animate
        className="flex items-center justify-center text-black"
      >
        {isArabic ? "العربية" : "Eng"}
      </motion.div>
    </motion.div>
  );
};

export default SwitchLang;
