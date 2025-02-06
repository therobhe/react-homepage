import {ABOUT_ME_HEADLINE, ABOUT_ME_DESCRIPTION} from "../../data/lang.js";
import profilePic from "../../assets/kevinRushProfile.jpg";

export default function AboutMe() {
    return (
        <section className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">{ABOUT_ME_HEADLINE}</h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center items-center">
                        <img src={profilePic} alt="Robert Heinemann Portrait Image"/>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{ABOUT_ME_DESCRIPTION}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}