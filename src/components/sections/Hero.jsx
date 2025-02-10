import {HERO_NAME, HERO_JOB} from "../../data/lang.js";
import profilePic400 from "../../assets/hero/hero-400w.webp";
import profilePic600 from "../../assets/hero/hero-600w.webp";
import {motion} from "framer-motion";

// configuration for the starting and ending position of the animation
const sliderVariants = (delay, startingPos) => ({
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
                        <motion.h1 variants={sliderVariants(0.25, -100)}
                                   initial="hidden"
                                   animate="visible"
                                   className="pb-6 pb-xl-16 text-center xl:text-left text-6xl font-thin tracking-tight lg:mt-16 lg_text-8xl">
                            {HERO_NAME}
                        </motion.h1>
                        <motion.span variants={sliderVariants(0.5, -100)}
                                     initial="hidden"
                                     animate="visible"
                                     className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-center xl:text-left bg-clip-text text-3xl tracking-tight text-transparent mb-8">
                            {HERO_JOB}
                        </motion.span>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div className="flex justify-center"
                         variants={sliderVariants(1, 100)}
                         initial="hidden"
                         animate="visible">
                        <img src={profilePic600}
                             srcSet={`${profilePic400} 400w, ${profilePic600} 600w`}
                             sizes="(max-width: 400px) 400px, (max-width: 600px) 600px"
                             alt="Robert Heinemann Portrait Image" 
                             width={500}
                             height={500}
                             className="rounded-2xl"/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}