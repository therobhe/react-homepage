import {ABOUT_ME_HEADLINE, ABOUT_ME_DESCRIPTION} from "../../data/lang.js";
import profilePic from "../../assets/kevinRushProfile.jpg";
import Techstack from "../Techstack.jsx";
import {motion} from "framer-motion";

export default function AboutMe() {
    return (
        <section className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">{ABOUT_ME_HEADLINE}</h2>
            <div className="flex flex-wrap">
                <motion.div
                    className="w-full lg:w-1/2 lg:p-8"
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}>
                    <div className="flex justify-center items-center">
                        <img src={profilePic} alt="Robert Heinemann Portrait Image" className="rounded-2xl"/>
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