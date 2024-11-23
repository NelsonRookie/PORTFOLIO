import { motion } from "framer-motion";

const Experience = () => {
  const experience = [
    {
      year: "2024",
      duration: "3 months",
      position: "Front-end Developer",
      compnay: "Directorate for Police Community Relations",
      description:
        "During my internship, I applied my knowledge through collaborating with our team, with a focus on designing and building interactive user interface components to meet the project requirements. This experience allowed me to sharpen my skills in Front-End Development, where I concentrated on creating responsive and user-friendly designs. This hands-on experienced has solidified my interest and proficiency in Front-End Development.",
    },
  ];
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div>
        {experience.map((e) => (
          <div key={e.year} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              {/* Dot */}
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 mr-2 -left-5 border-gray-400"></div>

              <p className="mb-2 text-purple-400">{e.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {e.position} (Intern) -{" "}
                <span className="text-purple-100">{e.compnay}</span>
              </h6>
              <p className="text-justify mb-4 text-neutral-400">
                {e.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
