import {PROJECTS} from "../../data/data.js";
import {PROJECTS_HEADLINE} from "../../data/lang.js";
import {motion} from "framer-motion";
import {FaGithub} from "react-icons/fa";

export default function Projects() {
    return (
        <section className="border-b border-neutral-900 pb-4">
            <motion.h2 className="my-20 text-center text-4xl"
                       whileInView={{opacity: 1, y: 0}}
                       initial={{opacity: 0, y: -100}}
                       transition={{duration: 0.5}}>
                {PROJECTS_HEADLINE}
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="flex flex-wrap mb-8 md:justify-center">
                        <motion.div className="w-full lg:w-1/4 flex flex-col lg:block items-center"
                             whileInView={{opacity: 1, x: 0}}
                             initial={{opacity: 0, x: -100}}
                             transition={{duration: 0.5}}>
                            <img src={project.image} width={175} height={175} alt={project.title} className="mb-6 rounded-2xl"/>
                        </motion.div>
                        <motion.div className="w-full max-w-xl lg:w-3/4 flex flex-col lg:block items-center"
                             whileInView={{opacity: 1, x: 0}}
                             initial={{opacity: 0, x: 100}}
                             transition={{duration: 0.5}}>
                            <h6 className="mb-2 font-semibold"><span className="text-small text-purple-100">{project.title}</span></h6>
                            <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap justify-center lg:justify-normal">
                                {project.technologies.map((technology, index) => (
                                    <span key={index} className="mr-2 mt-4 px-2 py-2 bg-neutral-800 text-purple-400 rounded">{technology}</span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <FaGithub className="text-4xl mt-4"/>
                            </a>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}