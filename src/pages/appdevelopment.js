import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "/images/projects/taaza1.jpg"
import project2 from "/images/projects/taaza2.jpg"
import project3 from "/../public/images/projects/taaza3.png"
import project4 from "../../public/images/projects/taaza4.jpg"
import project5 from "../../public/images/projects/taaza5.jpg"
import project6 from "../../public/images/projects/taaza6.jpg"



import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, link2, github}) => {
    return(
        <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}} transition={{duration:0.2}}/>
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
              
            </div>
        </article>
    )
}


const Project = ({title, type, img, link, link2, github, summary}) => {
    return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

                       <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}} transition={{duration:0.2}}  priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
              
             
            </div>
        </article>
    )
}





const projects = () => {
    return (
        <>
            <Head>
            <title>Thejas | Projects Page</title>
          <meta name="description" content="thejas Portpolio" />
            </Head>
            <TransitionEffect/>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                    
                    <div className="col-span-12">
    <FeaturedProject 
           title="IZB App"
           img="/public/images/projects/taaza4.jpg"
           summary="The IZB App is a secure and user-friendly mobile banking platform by Indo Zambia Bank. It allows customers to manage their accounts, transfer funds, pay bills, and access a range of banking services conveniently from their smartphones."
           link="/appdevelopemnt"
          
           type="Featured Project"
    />
</div>

<div className="col-span-6 sm:col-span-12">
    <Project 
       
        title="NotFunny App"
        img="../public/images/projects/taaza5.jpg"
        summary="NotFunny App is a unique entertainment platform that brings hilarious and engaging content to users worldwide. From funny videos to viral memes, it ensures endless laughter and enjoyment anytime, anywhere."
       link="/appdevelopemnt"
        type="Featured Project"
    /> 
</div>

<div className="col-span-6 sm:col-span-12">
    <Project 
  
        title="First Alliance Bank"
        img="../../public/images/projects/taaza6.jpg"
        summary="First Alliance Bank Zambia Limited (FABZL) is a trusted commercial bank offering a range of financial services, including loans, savings, and online banking. With a focus on corporate clients and digital banking solutions, FABZL ensures secure and convenient financial transactions."
         link="/appdevelopemnt"
        type="Featured Project"
    /> 
</div>
                    <div className="col-span-12">
    <FeaturedProject 
        title="Taaza Food"
        img="/images/projects/taaza1.jpg"
        summary="Taaza Food is a trusted service delivering fresh, hygienic, and quality food items directly to customers' doorsteps in Vadodara City. With a user-friendly mobile app, customers can easily place orders in a simple three-step process, ensuring convenience, timely delivery, and reasonable pricing."
            link="/appdevelopemnt"
        type="Featured Project"
    />
</div>

<div className="col-span-6 sm:col-span-12">
    <Project 
        title="Taaza Indian Cuisine"
        img={project2}
        summary="Taaza Indian Cuisine app allows customers to easily browse the menu, customize orders, and securely process payments. Designed for a seamless restaurant ordering experience, it brings authentic Indian flavors straight to your doorstep with just a few taps."
        link="/appdevelopemnt"
        type="Featured Project"
    /> 
</div>

<div className="col-span-6 sm:col-span-12">
    <Project 
        title="TaZa Delivery App"
        img={project3}
        summary="The TaZa Delivery App is designed for convenient and reliable water delivery. Customers can place orders effortlessly and track their deliveries in real-time, ensuring fresh and timely water supply at their doorstep."
       link="/appdevelopemnt"
        type="Featured Project"
    /> 
</div>

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
