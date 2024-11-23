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
            <p className="my-2 max-w-xl py-6 text-justify leading-7 font-semibold">
              Aspiring Front-End Developer with a strong passion for crafting
              user-friendly, responsive, and visually appealing web
              applications. My current expertise includes JavaScript, HTML, CSS,
              and React.js, and I am dedicated to continuously expanding my
              skill set. Driven by creativity and innovation, I enjoy
              transforming ideas into functional and engaging digital
              experiences. My projects reflect my commitment to delivering
              solutions that users find intuitive and enjoyable. I welcome
              opportunities to collaborate, learn, and grow in the dynamic field
              of web development. Feel free to explore my work and reach
              out—I&apos;m always eager to connect and exchange ideas!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
