import {RiReactjsLine, RiNodejsLine, RiPhpLine, RiTailwindCssLine, RiBootstrapFill} from "react-icons/ri";
import {SiMysql} from "react-icons/si";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

export default function Techstack() {
    return (
        <div>
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                            variants={iconVariants(2.75)}
                            initial="initial"
                            animate="animate">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                            variants={iconVariants(2.5)}
                            initial="initial"
                            animate="animate">
                    <RiNodejsLine className="text-7xl text-green-500" />
                </motion.div>
                <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                            variants={iconVariants(2.25)}
                            initial="initial"
                            animate="animate">
                    <RiTailwindCssLine className="text-7xl text-cyan-600" />
                </motion.div>
                <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                            variants={iconVariants(2)}
                            initial="initial"
                            animate="animate">
                    <RiBootstrapFill className="text-7xl text-purple-600" />
                </motion.div>
                <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                            variants={iconVariants(1.75)}
                            initial="initial"
                            animate="animate">
                    <RiPhpLine className="text-7xl text-purple-700" />
                </motion.div>
                <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                            variants={iconVariants(1.5)}
                            initial="initial"
                            animate="animate">
                    <SiMysql className="text-7xl text-cyan-400" />
                </motion.div>
            </div>
        </div>
    )
}