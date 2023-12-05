import React from 'react';

import { motion } from 'framer-motion';
import ResumeData from '../assets/resume/resumeData.json';

export default function resume() {
  const expertise = ResumeData.expertise;
  const skills = ResumeData.skills;
  console.log(skills);

  const lgTextVarient = {
    initial: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: 'tween' },
    },
    lgTextHover: {
      x: 20,
      transition: { duration: 1 },
    },
  };

  return (
    <section className="w-full px-5 py-10 md:py-20 md:px-20" id="resume">
      <h1 className="text-center mb-10 text-6xl text-clrTitle">RESUME</h1>
      <div className="mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-medium text-clrContentTitle mb-3">
              My Expertise.
            </h1>
            <p className="text-xl text-clrParagraph leading-8 -tracking-wider mb-3">
              I focus on all things design and web related. With each of my
              services, my goal is to deliver an impactful and elevating digital
              experience for everyone
            </p>
          </div>
          <div className="flex flex-col  text-4xl md:text-6xl text-clrOPTTitle font-semibold md:mt-16">
            {expertise.map((exp) => (
              <motion.span
                key={exp.id}
                variants={lgTextVarient}
                initial="initial"
                animate="visible"
                whileHover="lgTextHover"
                className="mb-6 cursor-none"
              >
                {exp.name}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="order1 md:order-2">
            <h1 className="text-3xl md:text-5xl font-medium text-clrContentTitle mb-3">
              My Skills.
            </h1>
            <p className="text-xl text-clrParagraph leading-8 -tracking-wider mb-3">
              These are my go to tech stack to make any projects happen. I am
              always eager of learning more about my current stack, and new
              technologies that could expand my horizons.
            </p>
          </div>
          <div className="flex flex-col order-2 md:order-1 text-4xl md:text-6xl text-clrOPTTitle font-semibold md:mt-16">
            {skills.map((sk) => (    
              <motion.span
                key={sk.id}
                variants={lgTextVarient}
                initial="initial"
                animate="visible"
                whileHover="lgTextHover"
                className="mb-6 cursor-none"
              >
                {sk.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
