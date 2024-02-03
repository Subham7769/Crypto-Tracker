import "./style.css";
import phone from "../../assets/phone.png";
import gradient from "../../assets/gradient.png";
import Button from "../Common/Button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";


const LandingPage = () => {
  return (
    <main>
      <div className="textContainer">
        <motion.h1
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="Track-crypto-heading"
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="Real-Time-heading"
        >
          Real Time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="buttonContainer"
        >
          <NavLink to="/Dashboard">
            <Button text={"Dashboard"} outlined={false} />
          </NavLink>
          <RWebShare
            data={{
              text: "Crypto Tracker",
              url: "https://crypto-tracker-ashy-ten.vercel.app/",
              title: "Crypto Tracker",
            }}
          >
            <div>
              <Button text={"share"} outlined={true} />
            </div>
          </RWebShare>
        </motion.div>
      </div>
      <div className="imageContainer">
        <motion.img
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          src={phone}
          alt=""
          className="phone"
        />
        <img src={gradient} alt="" className="gradient" />
      </div>
    </main>
  );
};

export default LandingPage;
