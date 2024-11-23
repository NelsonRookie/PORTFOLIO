import profileImage from "/src/assets/backgroundImage.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
            className="flex items-center justify-center"
          >
            <img src={profileImage} alt="about" className="rounded-2xl" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
            className="flex justify-center lg:justify-start"
          >
            <p className="my-2 max-w-xl py-6 text-justify">
              During my internship, I had the opportunity to work in a
              real-world environment, applying my knowledge to solve practical
              problems. I collaborated with a team of developers, contributed to
              ongoing projects, and gained hands-on experience with the full
              software development lifecycle. This experience not only deepened
              my technical skills but also taught me the importance of teamwork,
              communication, and adaptability in a professional setting. It was
              a pivotal experience that solidified my passion for web
              development and prepared me for a career in the industry.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
