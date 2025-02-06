import {PROJECTS} from "../../data/data.js";
import {PROJECTS_HEADLINE} from "../../data/lang.js";

export default function Projects() {
    return (
        <section className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">{PROJECTS_HEADLINE}</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded-2xl"/>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold"><span className="text-small text-purple-100">{project.title}</span></h6>
                            <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap">
                                {project.technologies.map((technology, index) => (
                                    <span key={index} className="mr-2 mt-4 px-2 py-2 bg-neutral-800 text-purple-400 rounded">{technology}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}