import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.svg';
import LogoWhite from '../assets/logo-white.svg';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Hamburger from './hamburger';
import EmailWHT from '../assets/email-white.svg';
import GitHubWHT from '../assets/github-white.svg';
import LinkedinWHT from '../assets/linkedin-in-white.svg';


export default function Header() {
  const [toggleNav, setToggleNav] = useState(false);

  const navLinks = [
    {
      id: 1,
      name: 'Home',
      path: 'home',
    },
    {
      id: 2,
      name: 'About',
      path: 'about',
    },
    {
      id: 3,
      name: 'Projects',
      path: 'projects',
    },
    {
      id: 4,
      name: 'Resume',
      path: 'resume',
    },
    {
      id: 5,
      name: 'Contact',
      path: 'contact',
    },
  ];

  const backdrop = {
    hidden: {
      opacity: 0,
      y: '-100vh',
      transition: { duration: 0.5, type: 'tween' },
    },
    visible: {
      opacity: 1,
      y: '0vh',
      transition: { duration: 0.5, type: 'tween' },
    },
  };

  const linkAnimation = {
    hoverText: {
      scale: 1.5,
      transition: { duration: 1 },
    },
  };

  const IconAnimation = {
    hoverText: {
      scale: [1, 1.1, 1, 1.1, 1],
      transition: { duration: 1 },
    },
  };

  const headerAnimation = {
    initial: {
      opacity: 0,
      y: -500,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25 },
    },
  };

  

  return (
    <>
      <motion.nav
        variants={headerAnimation}
        initial="initial"
        animate="visible"
        className="w-full h-[75pt] flex justify-between items-center"
      >
        <div>
          <Image
            src={Logo}
            alt="logo-Dumindu-Bandara"
            width={223}
            height={76}
          />
        </div>
        <button
          onClick={() => setToggleNav(!toggleNav)}
          className="fixed right-10 top-7 z-[100] hover:scale-110 duration-700"
        >
          <Hamburger toggleNav={toggleNav} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {toggleNav && (
          <motion.div
            className="fixed w-full h-screen top-0 left-0 z-40 bg-clrTitle"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="w-full">
              <div>
                <Image
                  src={LogoWhite}
                  alt="logo-Dumindu-Bandara"
                  width={223}
                  height={76}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center gap-8 mt-14 md:mt-0">
                {navLinks.map((navLink, i) => (
                  <motion.div
                    key={i}
                    variants={linkAnimation}
                    whileHover="hoverText"
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={`#${navLink.path}`}
                      className="text-6xl font-medium text-clrSubTitle uppercase"
                      onClick={() => setToggleNav(!toggleNav)}
                    >
                      {navLink.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className='w-full mt-[50pt] flex justify-center gap-5'>
                <motion.div
                  variants={IconAnimation}
                  whileHover="hoverText"
                  className='scale-100'
                >
                  <Link href="mailto:dumindubandara969@gmail.com" target='_blank' >
                    <Image src={EmailWHT} width={30} height={40} alt="#" className="mr-3" />
                  </Link>
                </motion.div>
                <motion.div
                  variants={IconAnimation}
                  whileHover="hoverText"
                  className='scale-100'
                >
                  <Link href="https://www.linkedin.com/in/dumindulakshanbandara" target='_blank'>
                    <Image src={LinkedinWHT} width={30} height={40} alt="#" className="mr-3" />
                  </Link>
                </motion.div>
                <motion.div
                  variants={IconAnimation}
                  whileHover="hoverText"
                  className='scale-100'
                >
                  <Link href="https://github.com/DuminduBandara" target='_blank'>
                    <Image src={GitHubWHT} width={30} height={40} alt="#" className="mr-3" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
