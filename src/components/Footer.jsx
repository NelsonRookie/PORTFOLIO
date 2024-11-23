import { motion } from "framer-motion";

const Footer = () => {
  const contact = [
    {
      email: "real.nelson92@gmail.com",
      phone: "+639099730420",
      address: "Malabon City, Metro Manila",
    },
  ];
  return (
    <div id="info" className="border-b border-neutral-900 pb-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my- text-center text-4xl"
      >
        Info
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {contact[0].address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {contact[0].phone}
        </motion.p>
        <motion.a
          href="#"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="border-b"
        >
          {contact[0].email}
        </motion.a>
        <p></p>
      </div>
    </div>
  );
};

export default Footer;
