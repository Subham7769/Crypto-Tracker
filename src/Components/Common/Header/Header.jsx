import "./style.css";
import CommonNavlinks from "./CommonNavlinks.jsx";
import TemporaryDrawer from "./Drawer.jsx";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [show, setShow] = useState(false);
  function setTheme(e) {
    toast("Theme Changed");
    document.documentElement.style.setProperty("--primary", e.target.id);
  }

  return (
    <>
      <ToastContainer />
      <nav>
        <h1>
          CryptoTracker <span style={{ color: "var(--primary)" }}>.</span>
        </h1>

        <CommonNavlinks className={"desktopMenu"} />
        <div className="mobile-drawer">
          {" "}
          <TemporaryDrawer />{" "}
        </div>
      </nav>

      <AnimatePresence>
        {show && (
          <motion.div
            className="themes"
            id="themes"
            initial={{ y: "-100vh" }}
            animate={{ y: "0vh" }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.3 }}
          >
            <div
              onClick={(e) => setTheme(e)}
              style={{ backgroundColor: "#1e90ff" }}
              id="#1e90ff"
            >
              dodgerblue
            </div>
            <div
              onClick={(e) => setTheme(e)}
              style={{ backgroundColor: "#ffa500" }}
              id="#ffa500"
            >
              Orange
            </div>
            <div
              onClick={(e) => setTheme(e)}
              style={{ backgroundColor: "#da70d6" }}
              id="#da70d6"
            >
              Pink
            </div>
            <div
              onClick={(e) => setTheme(e)}
              style={{ backgroundColor: "	#d2b48c" }}
              id="	#d2b48c"
            >
              Tan
            </div>
            <div
              onClick={(e) => setTheme(e)}
              style={{ backgroundColor: "#9acd32" }}
              id="#9acd32"
            >
              Yellowgreen
            </div>
            <div
              onClick={(e) => setTheme(e)}
              style={{ backgroundColor: "#663399" }}
              id="#663399"
            >
              Purple
            </div>
            <div
              onClick={(e) => setTheme(e)}
              style={{ backgroundColor: "#dc143c" }}
              id="#dc143c"
            >
              Crimson
            </div>
            <div
              onClick={(e) => setTheme(e)}
              style={{ backgroundColor: "#ffd700" }}
              id="#ffd700"
            >
              Gold
            </div>
            <div
              onClick={(e) => setTheme(e)}
              style={{ backgroundColor: "#008080" }}
              id="#008080"
            >
              Sky
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: 8 }}
        animate={{ y: 15 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
        className="Themeslider"
      >
        <KeyboardArrowDownIcon
          className="slidericon"
          onClick={() => setShow(!show)}
        />
      </motion.div>
    </>
  );
};

export default Header;
