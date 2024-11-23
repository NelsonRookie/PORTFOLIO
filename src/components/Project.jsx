import { motion } from "framer-motion";

// Images............
import EzzyBuy from "../assets/projectImages/e-commerse-app.png";
import MotivApp from "../assets/projectImages/inspire-hub-app.png";
import WeatherApp from "../assets/projectImages/weather-app.png";

const Project = () => {
  const projects = [
    {
      technologies: ["JavasScript", "React", "TailwindCSS"],
      title: "EzzyBuy",
      image: EzzyBuy,
      link: "https://ezzybuy.vercel.app/",
      desription:
        "The EzzyBuy is a e-commerse web application made of React and Tailwind css. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat optio" +
        "aperiam eveniet quod adipisci asperiores minus.",
    },
    {
      technologies: ["JavasScript", "React", "TailwindCSS"],
      title: "Motiv-App",
      image: MotivApp,
      link: "https://motiv-app-pi.vercel.app/",
      desription:
        "A web application that let users manages their to-do list, as well as their personal inspirations and some favorite quotes that give them motivation. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat optio" +
        "aperiam eveniet quod adipisci asperiores minus.",
    },
    {
      technologies: ["JavasScript", "React", "TailwindCSS"],
      title: "Weather App",
      image: WeatherApp,
      link: "https://weather-app-5wjy.vercel.app/",
      desription:
        "A web-application that forecast the real-time weather conditions within the cities of Metro Manila. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat optio" +
        "aperiam eveniet quod adipisci asperiores minus.",
    },
  ];
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {projects.map((project) => (
          <div
            key={project.title}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={`${project.link}`} target="_blank">
                <img
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="mb-6 rounded min-w-80 object-cover hover:opacity-60"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold ">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.desription}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 font-medium text-green-400"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
