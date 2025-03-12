import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {address}
            </span>
            <p className="font-medium w-full md:text-sm">
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
            Experience
                </h2> 
                <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

                    <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />
                    <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
    <Details 
                       position="Senior Full Stack Web Developer"
                       company="CheapToGo"                  
                       companyLink="https://cheaptogo.net/"
                       time="2024 Nov - Present"
                       address=""
                       work="As a Senior Full Stack Web Developer at CheapToGo, I played a key role in designing, developing, and maintaining the company’s web platforms, ensuring seamless user experiences for travel booking and related services. My responsibilities included building responsive and user-friendly interfaces using React.js, developing and optimizing APIs with Node.js for third-party integrations, and designing databases using MongoDB to enhance efficiency and security. I focused on performance optimization, improving website speed, security, and scalability through best practices and modern technologies. Additionally, I collaborated closely with UX/UI designers, project managers, and stakeholders to align development with business goals while managing cloud infrastructure on Azure, automating deployments with CI/CD pipelines. During my tenure, I contributed significantly to improving website performance, enhancing security, and introducing innovative features that streamlined the booking process, ultimately increasing user engagement and customer satisfaction."
                       />
                       <Details 
                       position="Senior Full Stack Web Developer"
                       company="Techrowth Pvt Ltd"                  
                       companyLink="https://techrowth.com/"
                       time="2023 Feb - 2024 Nov"
                       address="No.373, 2nd floor, 2nd Phase, West of Chord Road, Stage 2, Rajajinagar, Bengaluru, Karnataka 560086"
                       work="I have experience developing a comprehensive e-commerce website using HTML, CSS, JavaScript, and React, where I successfully integrated features like product listings, user authentication, and secure payment processing. Additionally, I collaborated on a team project to create a blogging platform using Node.js and Express, effectively implementing user account management, blog post creation, and comment functionality."
                       />

<Details 
                       position="Full Stack Web Developer"
                       company="TECH I.S. India Pvt. Ltd."                  
                       companyLink="https://techis.io/"
                       time="2022 Feb - 2023 Feb"
                       address="71, Jyoti Nivas College Rd, Koramangala Industrial Layout, Koramangala, Bengaluru, Karnataka 560034"
                       work="As a Full Stack Web Developer, I successfully developed and achieving a 75% increase in client satisfaction by implementing an 8-month strategic plan. I provided technical guidance to over 70 US clients, resolving issues. My contributions extended to strategic planning, resulting in a 70% increase in business flow, and I significantly contributed to the development of 3 Japan-based client projects hosted on AWS."
                       />


                    </ul>
                </div>
        </div>
    )
}

export default Experience
