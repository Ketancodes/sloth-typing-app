import type { TestResult, TestConfig } from "../../types/test";
import Dashtop from "./Dashtop";
import Dashgraph from "./Dashgraph";
import Dashstats from "./Dashstats";
import Dashaction from "./Dashaction";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";

interface DashProps {
  result: TestResult;
  onReset: () => void;
  onRepeat: () => void;
  testConfig: TestConfig;
}

const dashboardVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};
export default function Dashboard({
  result,
  onReset,
  onRepeat,
  testConfig,
}: DashProps) {
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <>
      <motion.div
        className="mt-2 mx-3 sm:ml-6 sm:mr-0 font-[Courier_Prime] font-medium"
        variants={dashboardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-0">
          <motion.div className="w-full lg:w-[30%]" variants={sectionVariants}>
            <Dashtop result={result} />
          </motion.div>

          <motion.div
            className="h-62.5 w-full md:mx-auto md:w-[75%] lg:w-[70%]"
            variants={sectionVariants}
          >
            <Dashgraph result={result} testConfig={testConfig} />
          </motion.div>
        </div>

        <motion.div variants={sectionVariants}>
          <Dashstats result={result} testConfig={testConfig} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Dashaction
            onReset={onReset}
            onRepeat={onRepeat}
            onToggle={openHistory}
            onToggleHistory={() => setOpenHistory((prev) => !prev)}
            result={result}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
