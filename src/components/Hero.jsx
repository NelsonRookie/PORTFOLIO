import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="main"
      className="flex justify-center items-center md:min-h-screen bg-none md:bg-gradient-to-r from-black via-green-700 to-green-400 border-4 border-none md:border-white rounded-xl"
    >
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-lg text-center">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="pb-1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-green-600"
        >
          Nelson Nolia
        </motion.h1>
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-black"
        >
          I build things for the web.
        </motion.h2>
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0 }}
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl sm:text-2xl lg:text-3xl tracking-tight text-transparent"
        >
          Front-end Developer
        </motion.span>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-justify mt-6 text-sm sm:text-base lg:text-lg font-light tracking-tight text-gray-700"
        >
          I am an aspiring Front-End Developer, eager to dive into the dynamic
          world of web development. My expertise revolves around{" "}
          <span className="text-green-600 font-bold">React</span>,{" "}
          <span className="text-green-600 font-bold">HTML</span>,{" "}
          <span className="text-green-600 font-bold">CSS</span>, and{" "}
          <span className="text-green-600 font-bold">JavaScript</span>, focusing
          on creating visually appealing, responsive, and user-friendly
          applications. I am passionate about continuously improving my design
          and coding skills to deliver seamless user experiences.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
