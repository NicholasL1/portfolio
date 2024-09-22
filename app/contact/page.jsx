"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const formVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <motion.div
      className="w-full h-full flex flex-col bg-[#cdd0d8] shadow-gray-800 rounded-xl shadow-md dark:bg-[#121c33] dark:shadow-gray-700"
      variants={formVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="px-16 lg:px-20 pt-10 space-y-6">
        <h1 className="text-5xl text-blue-500 italic">Let's Get In Touch.</h1>
        <p className="italic text-gray-600">
          Wanna work with me? Please feel free to shoot me a message.
        </p>
      </div>
      <form
        className="px-10 pt-10 pb-16 space-y-6 flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
        ref={form}
      >
        <div className="w-11/12 flex flex-col">
          <h1 className="text-gray-500">Name:</h1>
          <input
            type="text"
            className="min-w-full px-4 py-1 rounded-md focus:border-accent dark:bg-[#0d1427] bg-[#ffffff] border dark:border-white/10 border-black/40"
            name="user_name"
          />
        </div>
        <div className="w-11/12 flex flex-col">
          <h1 className="text-gray-500">Email:</h1>
          <input
            type="text"
            className="min-w-full px-4 py-1 rounded-md focus:border-accent dark:bg-[#0d1427] bg-[#ffffff] border dark:border-white/10 border-black/40"
            name="user_email"
          />
        </div>
        <div className="w-11/12 flex flex-col">
          <h1 className="text-gray-500">Subject:</h1>
          <input
            type="text"
            className="min-w-full px-4 py-1 rounded-md focus:border-accent dark:bg-[#0d1427] bg-[#ffffff] border dark:border-white/10 border-black/40"
            name="subject"
          />
        </div>
        <div className="w-11/12 flex flex-col">
          <h1 className="text-gray-500">Message:</h1>
          <textarea
            className="min-w-full px-4 py-1 min-h-40 rounded-md focus:border-accent dark:bg-[#0d1427] bg-[#ffffffd5] border dark:border-white/10 border-black/40 resize-none align-top"
            name="message"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-200"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
