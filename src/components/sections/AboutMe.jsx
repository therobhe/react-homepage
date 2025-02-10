import {ABOUT_ME_HEADLINE, ABOUT_ME_DESCRIPTION} from "../../data/lang.js";
import profilePic from "../../assets/about/about.webp";
import Techstack from "../Techstack.jsx";
import {motion} from "framer-motion";
import profilePic400 from "../../assets/about/about-400w.webp";
import profilePic600 from "../../assets/about/about-600w.webp";
import profilePic800 from "../../assets/about/about-800w.webp";

export default function AboutMe() {
    return (
        <section className="border-b border-neutral-900 pb-4">
            <motion.h2 className="my-20 text-center text-4xl"
                       whileInView={{opacity: 1, x: 0}}
                       initial={{opacity: 0, x: -100}}
                       transition={{duration: 0.5}}>
                {ABOUT_ME_HEADLINE}
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                    className="w-full lg:w-1/2 lg:p-8"
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}>
                    <div className="flex justify-center items-center">
                        <img src={profilePic}
                             srcSet={`${profilePic400} 400w, ${profilePic600} 600w, ${profilePic800} 800w, ${profilePic} 1000w`}
                             sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (min-width: 601px) 800px"
                             alt="Robert Heinemann Portrait Image"
                             width={500} height={500}
                             className="rounded-2xl min-w-80 max-w-xl"/>
                    </div>
                </motion.div>
                <motion.div className="w-full lg:w-1/2"
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: 100}}
                            transition={{duration: 0.5}}>
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{ABOUT_ME_DESCRIPTION}</p>
                    </div>
                </motion.div>
            </div>

            <Techstack />
        </section>
    )
}