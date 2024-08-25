import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
    const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

//service_t7k8afe
//8RHn5jyyFU4YRuxNl
//template_8ab6l4v
    emailjs
      .send(
        'service_t7k8afe',
        'template_8ab6l4v',
        {
          from_name: form.name,
          to_name: "Majembe Vincent",
          from_email: form.email,
          to_email: "majevincent0@gmail.com",
          message: form.message,
        },
       '8RHn5jyyFU4YRuxNl'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
      
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8 mt-12'
        >
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary px-6 py-4 border-none rounded-lg font-medium text-white placeholder:text-secondary outline-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary px-6 py-4 border-none rounded-lg font-medium text-white placeholder:text-secondary outline-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary px-6 py-4 border-none rounded-lg font-medium text-white placeholder:text-secondary outline-none'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary shadow-md shadow-primary px-8 py-3 rounded-xl w-fit font-bold text-white outline-none'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      
        </motion.div>
        <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 h-[350px] md:h-[550px] xl:h-auto'
      >
        <EarthCanvas />
      </motion.div>
        </div>
  )
}

export default SectionWrapper(Contact, "contact");