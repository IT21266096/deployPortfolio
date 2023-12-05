import Link from 'next/link';
import React, { useState } from 'react';
import {motion} from 'framer-motion'

export default function Hamburger({ toggleNav }) {

  return (
    <div className="flex flex-col items-end">
      <motion.div  className={`w-[50px] h-[3px] duration-700 ease-in-out ${toggleNav ? 'bg-[#fff] rotate-45 translate-y-1/2 mt-5' : 'bg-clrTitle rotate-0 mb-[12px]'}`}></motion.div>
      <motion.div  className={`h-[3px] duration-700 ease-in-out ${toggleNav ? 'w-[50px] bg-[#fff] -rotate-45 -translate-y-1/2 mb-5' : 'w-[35px] bg-clrTitle rotate-0 mb-[12px]'}`}></motion.div>
      <motion.div  className={`w-[20px] h-[3px] duration-700 ease-in-out ${toggleNav ? 'bg-[#fff] hidden' : 'bg-clrTitle block'}  mb-[12px]`}></motion.div>
    </div>
  );
}
