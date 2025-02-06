import {EXPERIENCE_HEADLINE} from "../../data/lang.js";
import {EXPERIENCES} from "../../data/data.js";

export default function Experience() {

    return (
        <section className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">{EXPERIENCE_HEADLINE}</h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex fley-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{experience.role} - <span className="text-small text-purple-100">{experience.company}</span></h6>
                            <p className="text-sm text-neutral-400">{experience.description}</p>
                            <div className="flex flex-wrap">
                                {experience.technologies.map((technology, index) => (
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