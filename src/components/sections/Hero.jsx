import {HERO_TEXT, HERO_NAME, HERO_JOB} from "../../data/lang.js";
import profilePic from "../../assets/kevinRushProfile.jpg";
import {motion} from "framer-motion";

// configuration for the starting and ending position of the animation
const slideMotion = (delay, startingPos) => ({
    hidden: {x: startingPos, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
})

export default function Hero() {
    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={slideMotion(0.25, -100)}
                                   initial="hidden"
                                   animate="visible"
                                   className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg_text-8xl">{HERO_NAME}</motion.h1>
                        <motion.span variants={slideMotion(0.5, -100)}
                                     initial="hidden"
                                     animate="visible"
                                     className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">{HERO_JOB}</motion.span>
                        <motion.p
                            variants={slideMotion(0.75, -100)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_TEXT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div className="flex justify-center"
                         variants={slideMotion(1, 100)}
                         initial="hidden"
                         animate="visible">
                        <img src={profilePic} alt="Robert Heinemann Portrait Image" className="rounded-2xl"/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}