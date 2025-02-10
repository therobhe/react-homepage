import {ABOUT_ME_HEADLINE, ABOUT_ME_DESCRIPTION} from "../../data/lang.js";
import Techstack from "../Techstack.jsx";
import {motion} from "framer-motion";
import profilePic400 from "../../assets/about/about-400w.webp";
import profilePic600 from "../../assets/about/about-600w.webp";

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
                        <img src={profilePic600}
                             srcSet={`${profilePic400} 400w, ${profilePic600} 600w`}
                             sizes="(max-width: 400px) 400px, (max-width: 600px) 600px"
                             alt="Robert Heinemann Portrait Image"
                             width={600} height={600}
                             className="rounded-2xl"/>
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