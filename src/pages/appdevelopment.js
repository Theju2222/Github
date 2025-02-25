import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/taaza1.jpg"
import project2 from "../../public/images/projects/taaza2.jpg"
import project3 from "../../public/images/projects/taaza3.png"
import project4 from "../../public/images/projects/taaza4.jpg"
import project5 from "../../public/images/projects/taaza5.jpg"
import project6 from "../../public/images/projects/taaza6.jpg"
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({type, title, summary, img, link}) => {
    return(
        <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                <img src={img} alt={title} className="w-full h-auto"/>
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

const Project = ({title, type, img, link, summary}) => {
    return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <img src={img} alt={title} className="w-full h-auto"/>
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
                <meta name="description" content="Thejas Portfolio" />
            </Head>
            <TransitionEffect/>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject title="IZB App" img={project4} summary="A secure mobile banking platform by Indo Zambia Bank." link="/appdevelopemnt" type="Featured Project"/>
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project title="NotFunny App" img={project5} summary="An entertainment platform featuring hilarious content." link="/appdevelopemnt" type="Featured Project"/>
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project title="First Alliance Bank" img={project6} summary="A trusted commercial bank in Zambia." link="/appdevelopemnt" type="Featured Project"/>
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject title="Taaza Food" img={project1} summary="Fresh and hygienic food delivery service." link="/appdevelopemnt" type="Featured Project"/>
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project title="Taaza Indian Cuisine" img={project2} summary="Restaurant ordering app for Indian cuisine." link="/appdevelopemnt" type="Featured Project"/>
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project title="TaZa Delivery App" img={project3} summary="Convenient water delivery tracking app." link="/appdevelopemnt" type="Featured Project"/>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects;
