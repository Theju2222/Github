import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/Picture83.png"
import project2 from "../../public/images/projects/Picture98.png"
import project3 from "../../public/images/projects/Picture108.png"
import project4 from "../../public/images/projects/Picture113.png"
import project5 from "../../public/images/projects/Picture103.png"
import project6 from "../../public/images/projects/Picture93.png"
import project7 from "../../public/images/projects/Picture43.png"
import project8 from "../../public/images/projects/Picture133.png"
import project9 from "../../public/images/projects/Picture88.png"
import project10 from "../../public/images/projects/7.png"
import project11 from "../../public/images/projects/1.png"
import project12 from "../../public/images/projects/6.png"
import project13 from "../../public/images/projects/2.png"
import project14 from "../../public/images/projects/5.png"
import project15 from "../../public/images/projects/4.png"
import project16 from "../../public/images/projects/3.png"
import project17 from "../../public/images/projects/IMG_1375.jpeg"



import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
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
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10"> <GithubIcon /></Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">Visit Project</Link>

                </div>
            </div>
        </article>
    )
}
const FeaturedProject123 = ({type, title, summary, img, link, github}) => {
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
                <div className="mt-2 flex items-center">
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">Visit Project</Link>

                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github, summary}) => {
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
              
                <div className="w-full mt-2 flex items-center justify-between">
                <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">Visit</Link>

                    <Link href={github} target="_blank" className="w-8 md:w-6"> <GithubIcon /></Link>

                </div>
            </div>
        </article>
    )
}



const FeaturedProject1 = ({type, title, summary, img, link, github}) => {
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
                <div className="w-full mt-2 flex items-center justify-end">
                    <p className="ml-4 rounded-lg  px-6 text-lg font-semibold sm:px-4 sm:text-base"></p>
                    <Link href={github} target="_blank" className="w-10"> <GithubIcon /></Link>

                </div>
            </div>
        </article>
    )
}


const Project1 = ({title, type, img, link, github, summary}) => {
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
              
                <div className="w-full mt-2 flex items-center justify-end">
                {/* <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">Visit</Link> */}

                    <Link href={github} target="_blank" className="w-8 md:w-6"> <GithubIcon /></Link>

                </div>
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
    <FeaturedProject123 
        title="BlrPods"
        img={project17}
        summary="BlrPods revolutionizes modern sleeping solutions with smart, comfortable, and tech-enabled pods. Designed for urban travelers and professionals, BlrPods offers a seamless booking experience, privacy, and convenience at affordable rates."
        link="https://blrpods.com/"
        type="Featured Project"
    />
</div>
                    <div className="col-span-12">
                            <FeaturedProject 
                            title="IZB"
                            img={project1}
                            summary="we've helped banks connect with customers effortlessly. Our websites are designed to simplify financial transactions, provide easy access to services, and ensure a smooth and secure banking experience, putting your customers needs first."
                            link="https://izb.co.zm/"
                            github="https://github.com/Theju2222"
                            type="Featured Project"
                            
                            
                            />
                        </div>
                        
                        <div className="col-span-6 sm:col-span-12">
                        <Project 
                            title="Techrowth"
                            img={project2}
                            summary="We've partnered with clients to drive their online growth and innovation. From dynamic SEO campaigns to robust IT solutions, our success stories showcase measurable results. Dive in to see how we can elevate your digital presence and drive your business forward.We designed a website that not only boasts a sleek and responsive design but also ensures visitors can effortlessly connect through inquiry and lead forms."
                            link="https://www.techrowth.com/"
                            github="https://github.com/Theju2222"
                            type="Featured Project"
                            
                            
                            /> 
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                        <Project 
                            title="Citizen Car"
                            img={project3}
                            summary="We've created user-friendly platforms to drive your automotive business forward. We've helped resellers connect with customers effortlessly. Our websites are designed to simplify car browsing, showcase inventory, and ensure a smooth and informed buying experience, making every ride a reliable adventure that perfectly complements their premium offerings, delivering a top-notch user experience.
                            "
                            link="https://citizencars.netlify.app/"
                            github="https://github.com/Theju2222"
                            type="Featured Project"
                            
                            
                            /> 
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject 
                            title="Business Listing"
                            img={project4}
                            summary="Dive into our portfolio to see how we've helped clients connect with their communities seamlessly. Our websites are designed to simplify business discovery, showcase services, and make it easy for customers to find and engage with local enterprises, ensuring vibrant communities thrive online."
                            link="https://live.techrowth.com/business-listing/index.php"
                            github="https://github.com/Theju2222"
                            type="Featured Project"
                            
                            
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                        <Project 
                            title="Prolearn-Box"
                            img={project5}
                            summary="Discover our digital marketing institute website designs. We've crafted user-friendly platforms to empower future marketers. Dive into our portfolio to see how we've helped institutes connect with students seamlessly. Our websites are designed to simplify course offerings, showcase expertise, and facilitate an effortless learning experience."
                            link="https://prolearnbox.com/"
                            github="https://github.com/Theju2222"
                            type="Featured Project"
                            
                            
                            /> 
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                        <Project 
                            title="Venus Kart"
                            img={project6}
                            summary="We've crafted user-friendly platforms that drive online success. Dive into our portfolio to see how we've helped eCommerce businesses connect with customers effortlessly. Our websites are designed to simplify online shopping, maximize conversions, and deliver a seamless and delightful buying experience, ensuring your eCommerce journey is a retail triumph."
                            link="https://venus-kart.netlify.app/"
                            github="https://github.com/Theju2222"
                            type="Featured Project"
                            
                            
                            /> 
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject 
                            title="ZNBS Corporate"
                            img={project7}
                            summary="Explore our banking website designs. We've created user-friendly websites that put financial services at your fingertips. Dive into our portfolio to see how we've helped banks connect with customers effortlessly. Our websites are designed to simplify banking tasks, from account management to secure transactions, making your financial experience smooth and hassle-free."
                            link="https://www.znbs.co.zm/"
                            github="https://github.com/Theju2222"
                            type="Featured Project"
                            
                            
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                        <Project 
                            title="IZB CRM"
                            img={project8}
                            summary="Experience banking excellence with our CRM solutions. From personalized customer interactions to streamlined operations, our services drive measurable results. Dive into our portfolio to see how we've helped banks boost efficiency and satisfaction effortlessly. Join us in crafting your success story through customer-centric strategies."
                            link="https://izb.proxydigitalsolutions.com/login.php"
                            github="https://github.com/Theju2222"
                            type="Featured Project"
                            
                            
                            /> 
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                        <Project 
                            title="Grandiose Art"
                            img={project9}
                            summary="Discover our art website designs. We've created user-friendly platforms that celebrate creativity. Dive into our portfolio to see how we've helped artists and art enthusiasts connect effortlessly. Our websites are designed to simplify art exploration, showcase masterpieces, and offer an engaging and immersive experience, ensuring the artistry shines in the digital world."
                            link="https://grandioseart.com/"
                            github="https://github.com/Theju2222"
                            type="Featured Project"
                            
                            
                            /> 
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject1 
                            title="Budget Box"
                            img={project10}
                            summary="This project is an online ledger where you can track your expenditure and income at a glance, and effectively monitor your spending and save time from the tedious process of bookkeeping. We have diagrammatic and graphical representations to enhance your understanding. This gives you the ability to sync and manage your entire bookkeeping in a single app."
                            link="/"
                            github="https://github.com/Theju2222/Budget-Box"
                            type="Featured Project"
                            
                            
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                        <Project1 
                            title="Hive Wear Tech"
                            img={project11}
                            summary="A convenient and fun way to browse featured clothing & accessories from some of the best clothing brands online, especially aimed at teenagers. With this web app, you can browse products by any color you like or by trending colors, save products into favorites, and share products with friends on social media."
                            link="/"
                            github="https://github.com/Theju2222/Hive-Tech-Wear"
                            type="Featured Project"
                            
                            
                            /> 
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                        <Project1 
                            title="Indian Tourism"
                            img={project12}
                            summary="Visiting India? This virtual guide is extremely handy, you can scan the entire area in India and find invaluable information of major attractions, places of interest, events, museums, plays, and probable locations of rare species of wild animals which you may be lucky enough to get a glimpse of! With this app, you can easily navigate your visit to India!."
                            link="/"
                            github="https://github.com/Theju2222/Indian-Tourism"
                            type="Featured Project"
                            
                            
                            /> 
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject1 
                            title="Coolpics"
                            img={project13}
                            summary="This project contains an extensive collection of images exclusively used by children for zoom meeting backgrounds. This application enables a preview where you can check how it looks. Users can filter images by tags, names, keywords, and get search results according to the letters typed. (due to covid, zoom usage grew exponentially, and appropriate backgrounds were required. This background can be created in one minute)"
                            link="/"
                            github="https://github.com/Theju2222/CoolPics"
                            type="Featured Project"
                            
                            
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                        <Project1 
                            title="Hunger Captain"
                            img={project14}
                            summary="This is an online food menu service for Smokehouse restaurants. These days, when you visit a restaurant, you often use the QR code to load the PDF of the menu. It has no image and is not easy to select items. So we created the menu app where you can see food images with the needed information and select your items easily. During such unprecedented time and social distancing, online menu card technology is a boon!"
                            link="/"
                            github="https://github.com/Theju2222/Hunger-Captain"
                            type="Featured Project"
                            
                            
                            /> 
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                        <Project1 
                            title="Twitter Clone"
                            img={project15}
                            summary="With this project, we created a platform where you can express your thoughts anonymously, showcase your pictures, and much more on a single website. Post, edit, or delete posts at the convenience of just a few touches. This project is based on Twitter and anonymity adds to its special features. Without the necessity of an account, you can share your thoughts and memories with the world at any time."
                            link="/"
                            github="https://github.com/Theju2222/Twitter-Clone"
                            type="Featured Project"
                            
                            
                            /> 
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject1 
                            title="React-Redux Project"
                            img={project16}
                            summary="Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test. While it’s mostly used as a state management tool with React, you can use it with any other JavaScript framework or library."
                            link="/"
                            github="https://github.com/Theju2222/React-Redux-Project"
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
