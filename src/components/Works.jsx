import React from 'react'
import { Tilt } from 'react-tilt'
 import {motion} from 'framer-motion';
 import {styles} from '../styles';
 import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';
import { fadeIn,textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
})=>{
return(
  <motion.div variants={fadeIn("up","spring",
  index ,"0.5","0.75")}
  >
    <Tilt
    options={{ 
      max:45,
      scale:1,
      speed:450
    }}
     className='bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]'
    >
   <div className="relative w-full h-[210px]">
    <img
    src={image}
    alt={name}
    className="rounded-2xl w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
      <div onClck={()=>window.open(source_code-Link,"_blank")}
        className="flex justify-center items-center rounded-full w-10 h-10 cursor-pointer black-gradient">

 <img src={github}  alt="github" className="w-1\2 h-1\2 object-contain"/> </div></div>
    </div>   
    
    <div className="mt-5">
      <h3 className="font-bold text-[24px] text-white">{name}</h3>
      <p className="mt-2 text-[14px] text-secondary">{description}</p>
    </div>
     </Tilt></motion.div>
)
}
 const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
    <p className={styles.sectionSubText}>My projects</p>
    <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    
    <div className="flex w-full">
<motion.p variance={fadeIn(",",0.1,1)}
 className='mt-3 max-w-3xl text-[17px] text-secondary leading-[30px]'
 >
   Following projects showcases my skills and experience through
   real-world examples of my work. Each project is briefly described with
   links to code repositories and live demos in it. It reflects my
   ability to solve complex problems, work with different technologies,
   and manage projects effectively.
 </motion.p>
</div>

<div className='flex flex-wrap gap-7 mt-20'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"")