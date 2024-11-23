import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="form"
      className="border-b border-neutral-900 pb-20 max-w-[1040px] m-auto md:pl-20 p-4"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mt-10 mb-5 text-center text-4xl"
      >
        Send me a message!
      </motion.h1>

      <motion.form
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        action="https://getform.io/f/bwngpexa"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label htmlFor="" className="uppercase text-sm py-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border-2 rounded-lg p-3 flex border-neutral-200 bg-neutral-300 text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="uppercase text-sm py-2">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              className="border-2 rounded-lg p-3 flexborder-neutral-200 bg-neutral-300 text-black"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="" className="uppercase text-sm py-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="border-2 rounded-lg p-3 flex border-neutral-200 bg-neutral-300 text-black"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="" className="uppercase text-sm py-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="border-2 rounded-lg p-3 flex border-neutral-200 bg-neutral-300 text-black"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="" className="uppercase text-sm py-2">
            Message
          </label>
          <textarea
            name="mesage"
            rows={10}
            className="border-2 rounded-lg-p-3 border-neutral-200 bg-neutral-300 text-black"
          ></textarea>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
