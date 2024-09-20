import { motion } from "framer-motion";

const formVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="w-full h-full flex flex-col bg-gray-800 rounded-xl shadow-lg"
      variants={formVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="px-20 pt-10 space-y-6">
        <h1 className="text-4xl ">Lets Get In Touch.</h1>
        <p>Wanna work with me? Please feel free to shoot me a message.</p>
      </div>
      <div className="p-10 space-y-6 flex flex-col items-center justify-center">
        <div className="w-11/12 flex flex-col">
          <h1>First Name</h1>
          <input type="text" className="min-w-full" />
        </div>
        <div className="w-11/12 flex flex-col">
          <h1>Last Name</h1>
          <input type="text" className="min-w-full" />
        </div>
        <div className="w-11/12 flex flex-col">
          <h1>Subject</h1>
          <input type="text" className="min-w-full" />
        </div>
        <div className="w-11/12 flex flex-col">
          <h1>Body</h1>
          <input type="text" className="min-w-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
